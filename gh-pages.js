var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/YinkaAdepoju/yinka-adepoju.git', // Update to point to your repository  
        user: {
            name: 'YinkaAdepoju', // update to use your name
            email: 'yinka.social@icloud.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)