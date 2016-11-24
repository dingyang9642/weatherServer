module.exports = {
    port: 8081,
    session: {
      secret: 'weather',
      key: 'weather',
      maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/weather'
};