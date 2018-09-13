export default class Sprite {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.img = img
  }
  render (ctx) {
    ctx.drawImage(this.img, this.x, this.y)
  }
}
