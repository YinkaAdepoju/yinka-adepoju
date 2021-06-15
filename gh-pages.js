var ghpages = require('gh-pages');

ghpages.publish(
    'Users/yinka/Documents/GitHub/yinka-adepoju/public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/YinkaAdepoju/yinka-adepoju', // Update to point to your repository  
        user: {
            name: 'YinkaAdepoju', // update to use your name
            email: 'yinka.social@icl' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)