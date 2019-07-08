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
                  buildHookId: '5d22e1cea4cbf9f626ba55b4',
                  title: 'Sanity Studio',
                  name: 'noelleroseofficialV3-studio',
                  apiId: 'bc390686-d754-43ce-a43f-e3bcdf21f983'
                },
                {
                  buildHookId: '5d22e1cedd15900c77bc18a0',
                  title: 'Portfolio Website',
                  name: 'noelleroseofficialV3',
                  apiId: '502d39ae-004e-43f5-bac6-6bc656aff96c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kgwebsites/noelleroseofficialV3',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://noelleroseofficialV3.netlify.com',
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
