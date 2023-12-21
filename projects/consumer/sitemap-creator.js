const xmlbuilder = require('xmlbuilder');
const moment = require('moment');
const fs = require('fs');



// Define your application's routes
const routes = [
  '/',
  '/docs/installation',
  '/docs/license',
  '/docs/what-is-tailwind-css',
  '/docs/theming',
  '/docs/button',
  '/docs/accordion',
  '/docs/colors',
  '/docs/fonts',
  '/docs/alert',
  '/docs/avatar',
  '/docs/checkbox',
  '/docs/dialog',
  '/docs/input',
  '/docs/radiobutton',
  '/docs/select',
  '/docs/textarea',
  '/docs/button-group',
  '/docs/icon-button',
  '/docs/switch',
  '/docs/slider',
  '/docs/switch',
  '/docs/pagination',
  '/docs/chip',
  '/docs/collapse'
  // Add more routes as needed
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