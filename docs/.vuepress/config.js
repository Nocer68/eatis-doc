const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Documentation EATIS',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    
    logo: '/Logo-Eatis.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    nav: [],
    sidebar: [
        {
          title: 'Formations',
          collapsable: true,
          children: [
            '/licences_pilotes/',
            '/qualifications_pilotes/',
            '/stages_instructeurs/',
            '/formations_theoriques/',
            '/formations_complementaires/',
            
          ]
        }
      ,
        {
          title: 'Vol decouverte',
          collapsable: true,
          children: [
            '/vol_initiation/',
            '/vol_initiation_voltige/',
          ]
        }
      ,
        {
          title: "Aviation d'affaire",
          collapsable: true,
          children: [
            '/aviation_daffaire/',
          ]
        }
      ,
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/active-header-links',
    'vuepress-plugin-smooth-scroll',
  ]
}
