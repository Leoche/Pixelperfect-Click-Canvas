export default class Sprite {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.img = img
    this.name = this.img.id.replace('img-', '')
    this.id = Math.floor(Math.random()*16777215).toString(16);
    console.log("Created '" + this.name + "' with color #" + this.id);
  }
  render (ctx) {
    ctx.drawImage(this.img, this.x, this.y)
  }
  renderColor (ctx) {
    var buffer = document.createElement('canvas');
        buffer.width = this.img.width;
        buffer.height = this.img.height;
    var bx = buffer.getContext('2d');
    bx.fillStyle = '#' + this.id
    bx.fillRect(0,0,buffer.width,buffer.height);
    bx.globalCompositeOperation = "destination-atop";
    bx.drawImage(this.img,0,0);
    ctx.drawImage(buffer, this.x, this.y)
  }
}
