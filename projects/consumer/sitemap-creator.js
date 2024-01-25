const xmlbuilder = require('xmlbuilder');
const moment = require('moment');
const fs = require('fs');



// Define your application's routes
const routes = [
  '/',
  '/docs/accordion',
  '/docs/alert',
  '/docs/avatar',
  '/docs/breadcrumb',
  '/docs/button',
  '/docs/button-group',
  '/docs/checkbox',
  '/docs/chip',
  '/docs/collapse',
  '/docs/colors',
  '/docs/dialog',
  '/docs/fonts',
  '/docs/icon-button',
  '/docs/installation',
  '/docs/input',
  '/docs/license',
  '/docs/pagination',
  '/docs/radiobutton',
  '/docs/select',
  '/docs/slider',
  '/docs/switch',
  '/docs/textarea',
  '/docs/theming',
  '/docs/what-is-tailwind-css',
];

function generateSitemap(){
    const root = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
      root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    
      routes.forEach(route => {
        const url = root.ele('url');
        url.ele('loc', `https://www.david-ui-angular.com${route}`);
        url.ele('lastmod', `${moment(new Date()).format('YYYY-MM-DD')}`);
        // You can add more elements like <changefreq> and <priority> here if needed
      });

      // write to file
      fs.writeFile('./projects/consumer/src/sitemap.xml', root.toString(), (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}

generateSitemap();