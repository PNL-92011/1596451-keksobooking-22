const path = require('path');    // импорт path в синтаксисе Node.js

module.exports = {
  entry: './source/js/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build/js'),   // dirname = корень раб папки // папка js в папке build создастся сама
  }
};
