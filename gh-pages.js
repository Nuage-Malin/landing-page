const ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Nuage-Malin/Landing-page.git', // Update to point to your repository
        user: {
            name: 'Vincent Andrieu', // update to use your name
            email: 'vincent.andrieu@epitech.eu' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)