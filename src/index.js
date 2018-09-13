import Main from './Main'

document.addEventListener("DOMContentLoaded", event => {
  new Main()
  var markdownContainer = document.querySelector('#markdown')
  var converter = new showdown.Converter();
  markdownContainer.innerHTML = converter.makeHtml(markdownContainer.textContent.replace(/(?:\r\n|\r|\n)/g, '\n'));
  hljs.initHighlightingOnLoad();
})
