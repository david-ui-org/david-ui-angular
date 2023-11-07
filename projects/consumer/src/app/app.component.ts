import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showHome = true;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: any
  ) {}
  ngOnInit(): void {
    this.setMeta();
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
  setMeta(){
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          this.updateCanonical();
          const child = this.getChild(this.route);
          const title = child && child.routeConfig?.data.title;
          const meta = child && child.routeConfig?.data?.meta
          if (title) {
            return { title : title , meta : meta};
          } else {
            return { title : 'David UI Angular' , meta : []};
          }
        })
      )
      .subscribe((p) => {
        if (p) {
          this.titleService.setTitle(`${p.title}`);
          p?.meta.forEach((m: { name: any; content: any; }) => {
            this.metaService.removeTag('name="description"')
            this.metaService.removeTag('name="title"')
            this.metaService.addTag({name : m.name,content : m.content})
          });
        }
      });
  }
  updateCanonical() {
    const canonicalUrl = window.location.href;
    const head = this.document.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.document.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.document.updateElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', canonicalUrl);
  }
}
