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

    setTimeout(() => this.render(), 1000 / 30)
  }
  render () {
    this.ctx.fillStyle = "#112"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.sprites.forEach( sprite => sprite.render(this.ctx) )
  }
}
