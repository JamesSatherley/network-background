class Dot {
  x: number;
  y: number;
  x_v: number;
  y_v: number;
  x_max: number;
  y_max: number;
  class: string;

  constructor(x: number, y: number, x_v: number, y_v: number, c: number, x_max: number, y_max: number) {
    this.x = x;
    this.y = y;
    this.x_v = x_v;
    this.y_v = y_v;
    this.x_max = x_max;
    this.y_max = y_max;
    this.class = ["purple", "green", "blue"][c];
  }

  update(): void {
    this.limitCheck();
    this.x += this.x_v;
    this.y += this.y_v;
  }

  limitCheck(): void {
    if (this.x < -5)  this.x = this.x + this.x_max;
    if (this.x > this.x_max) this.x = -5;
    if (this.y < -5) this.y = this.y + this.y_max;
    if (this.y > this.y_max) this.y = -5;
  }
}

export default Dot;
