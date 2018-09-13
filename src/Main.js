import Sprite from './Sprite'
export default class Main {
  constructor () {
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.canvas.width = 300
    this.canvas.height = 300

    this.imgs = {
      'table': document.querySelector('#img-table'),
      'bed': document.querySelector('#img-bed'),
      'z': document.querySelector('#img-z'),
    }

    this.sprites = [
      new Sprite(100, 100, this.imgs.bed),
      new Sprite(52, 146, this.imgs.table),
      new Sprite(80, 135, this.imgs.z)
    ]

    this.inputCanvas = document.createElement('canvas')
    this.inputCanvas.width = this.canvas.width
    this.inputCanvas.height = this.canvas.width
    this.inputCanvasCtx = this.inputCanvas.getContext('2d')

    this.clicked = "Nothing :("

    this.canvas.addEventListener('click', event => {
      let color = this.inputCanvasCtx.getImageData(event.layerX, event.layerY, 1, 1).data
      let hexColor = ("000000" + this.rgbToHex(color[0], color[1], color[2])).slice(-6)

      console.log('Youjust clicked on color #' + hexColor)

      let sprite = this.sprites.filter(sprite => sprite.id === hexColor)
      this.clicked = sprite[0].name
    })

    setInterval(() => this.render(), 1000 / 30)
  }

  rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component"
    return ((r << 16) | (g << 8) | b).toString(16)
  }

  render () {
    this.ctx.fillStyle = "#112"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.sprites.forEach( sprite => {
        sprite.render(this.ctx)
        sprite.renderColor(this.inputCanvasCtx)
    })

    this.ctx.fillStyle = "#EEF"
    this.ctx.font = "14px sans-serif"
    this.ctx.fillText("You clicked on: " + this.clicked, 15, 20)
  }
}
