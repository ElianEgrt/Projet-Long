const { genIcons, genTree, genCss, genHtmlSync, genFilms } = require('./index')

genTree()
genIcons()
genCss()
genFilms()
genHtmlSync('tutorial.html')
genHtmlSync('film.html')