class Dot {
  constructor(x, y, x_v, y_v, c) {
    this.x = x;
    this.y = y;
    this.x_v = x_v;
    this.y_v = y_v;
    this.class = ["purple", "green", "blue"][c];
  }

  update() {
    this.limitCheck();
    this.x += this.x_v;
    this.y += this.y_v;
  }

  limitCheck() {
    if (this.x < -5) {
      this.x = this.x + window.innerWidth;
    }
    if (this.x > window.innerWidth) {
      this.x = -5;
    }
    if (this.y < -5) {
      this.y = this.y + window.innerHeight;
    }
    if (this.y > window.innerHeight) {
      this.y = -5;
    }
  }
}

export default Dot;
