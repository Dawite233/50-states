module.exports = {
    devServer: {
        // '/api/states'
        // 'https:..127.0.0.1:3000/api/states
      proxy: 'http://127.0.0.1:3000'
    }
  }