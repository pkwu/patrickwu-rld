const envBuild = {
  'server': [
    'PORT=3000'
  ],
  'client':[
    'NODE_ENV=development',
    'DEBUG=true',
    'REST_SERVER_URL=http://localhost:3396'
  ]
};

module.exports = envBuild;