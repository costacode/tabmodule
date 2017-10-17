# Tab component setup

Initial setup for a tab component

### Sergio notes - things worth to explore or to-dos

CSS Lint
- stylelint PostCSS plugin - https://stylelint.io/user-guide/postcss-plugin/
- webpack plugin - https://web-design-weekly.com/2016/06/15/integrate-stylelint-workflow-better-css/

CSS variables / CSS Modules
- Using CSS Next plugin (PostCSS)
- https://www.smashingmagazine.com/2015/12/introduction-to-postcss/
- https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care
- Lea Verou slides: https://leaverou.github.io/css-variables/#for-browser

Serve gzipped assets
- Webpack or htaccess

Set local Open Sans font as fallback
- https://www.keycdn.com/blog/web-font-performance/

KEY ADDITIONS 'POST_LAUNCH'
Best practices:
- Devs should test their code on actual devices (Browsersync, etc)
- Peer review (code review) is essential
- QA test is key

Key bug fixes:
- Add viewport to the markup
- In IE10 the default value for flex on children elements is 0 0 auto rather than 0 1 auto as defined in the latest spec, so add: flex: 0 1 auto; to tablist__tab property.
- Add display: table (parent) & display: table-cell (children) as fallback for older browsers.


----------------------------------
Things to consider:

* Accessibility
* BEM class structure
* Compatibility with older browsers (IE10 +)
* Progressive Enhancement
* Performance
* Mobile First
* Modularity (particularly in your CSS)
* New CSS techniques, while keeping in mind progressive enhancement

