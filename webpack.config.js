let path = require('path')
module.exports= {
    entry: './dist/src/Auth.js',
    mode:'development',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
}