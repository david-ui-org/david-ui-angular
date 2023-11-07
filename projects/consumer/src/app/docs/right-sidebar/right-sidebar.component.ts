import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Location } from '@angular/common';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import {
  SidebarData,
  SidebarItem,
  ScrollSpyElement,
} from '../../shared/model/sidebar-item.model';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit, AfterContentInit {
  sidebarItems = SidebarData;
  sidebarItem!: SidebarItem;
  scrollSpyElements?: ScrollSpyElement[] = [];
  loading: boolean = false;
  constructor(
    private location: Location,
    private router: Router,
    private renderer: Renderer2
  ) {}
  ngAfterContentInit(): void {
    const findUrl = this.findRouteUrl(this.router.url.split('#')[0]);
    this.scrollSpyElements = findUrl?.scrollSpyElements
      ? findUrl?.scrollSpyElements
      : [];
    this.loading = true;
    if (this.router.url) {
      this.handleLinkClick(this.router.url);
    }
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: any) => {
        const findUrl = this.findRouteUrl(event.url);
        this.scrollSpyElements = findUrl?.scrollSpyElements
          ? findUrl?.scrollSpyElements
          : [];
      });
  }
  handleLinkClick(target: string, event?: Event): void {
    // Prevent the default behavior of the anchor tag (navigation)
    event?.preventDefault();

    // You can add your custom logic here if needed
    // For example, scroll to the target element with JavaScript
    const targetElement = document.getElementById(target);
    if (targetElement) {
      this.scrollIntoViewIfNeeded(targetElement);
      this.location.replaceState(this.location.path() + `#` + target);
    }
  }

  findRouteUrl(url: string): SidebarItem | null {
    let sidebarItem: any = null;
    const foundItem = this.sidebarItems.find((parentItem) => {
      if (parentItem.children) {
        // If parent item has children, search in children array
        const childItem = parentItem.children.find(
          (child) => child.route === url
        );
        if (childItem) {
          sidebarItem = childItem; // Found in children array
        }
      } // Not found in both parent and children
      return null;
    });

    // Return the found item or null if not found
    return sidebarItem || null;
  }
  scrollIntoViewIfNeeded(element: HTMLElement): void {
    const rect = element.getBoundingClientRect();
    const isVisible =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (!isVisible) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline : 'center'});
    }
  }
}
