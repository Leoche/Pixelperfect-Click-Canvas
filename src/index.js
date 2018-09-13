import Main from './Main'

document.addEventListener("DOMContentLoaded", event => {
  new Main()
  var converter = new showdown.Converter();
  var markdownContainer = document.querySelector('#markdown')
  markdownContainer.innerHTML = converter.makeHtml(markdownContainer.textContent.replace(/(?:\r\n|\r|\n)/g, '\n'));
})
