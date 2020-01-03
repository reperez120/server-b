module.exports = {
  apps : [{
    name: 'server-b',
    script: './index.js',
  }],
  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-18-217-74-159.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/b.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-b.git',
      path : '/home/ubuntu/server-b',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
