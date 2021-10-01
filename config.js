const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://example.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://pbs.twimg.com/profile_images/954388469392007168/oFRmCg17_100x100.jpg',
    logoLink: 'https://shetechitaly.org/',
    title:
      "React Introduction",
    githubUrl: 'https://github.com/bitrockteam',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/bitrockit" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li><li>
		    <a href="https://twitter.com/shetechitaly" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/what-is-react',
      '/jsx',
      '/building-components',
      '/working-with-events',
      '/react-state',
      '/creating-simple-forms',
      '/conditional-content',
      '/build-a-list',
    ],
    collapsedNav: [],
    links: [{ text: 'Shetech', link: 'https://shetechitaly.org' }, { text: "Bitrock", link: "https://bitrock.it" }],
    frontline: false,
    ignoreIndex: true,
    title:
      "Introduction to React",
  },
  siteMetadata: {
    title: 'React Bootcamp | Shetech + Bitrock',
    description: 'Introduction to React',
    ogImage: null,
    docsLocation: 'https://github.com/bitrockteam',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
