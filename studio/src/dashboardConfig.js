export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3f7effec56964bb90f7128',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hq4abhz9',
                  apiId: '6f3c85d7-7773-4ce6-818d-8e3850e0d45f'
                },
                {
                  buildHookId: '5f3f7eff5c652e522b592632',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gf9pc1wx',
                  apiId: 'd349b08d-2e70-413a-aa25-910bdfb0c22b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/notrab/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gf9pc1wx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
