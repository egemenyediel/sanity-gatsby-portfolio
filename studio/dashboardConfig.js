export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d136cd6b8c78fe152e719e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ymjk3uh7',
                  apiId: 'd26f34f5-ed92-4b9b-9bcc-d9b7374e9cf2'
                },
                {
                  buildHookId: '5d136cd6b8c78f6fabe71970',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kdtxvnnu',
                  apiId: '5c27d292-90c9-41c0-8d9b-b257a884933c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/egemenyediel/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kdtxvnnu.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
