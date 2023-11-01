import Dot from "./Dot";

class Line {
  dotOne: Dot;
  dotTwo: Dot;
  dead: boolean;
  deadCount: number;
  new: boolean;
  newCount: number;
  colorStep: number;
  alpha: number;
  canvas: HTMLCanvasElement;

  constructor(dotOne: Dot, dotTwo: Dot, canvas: HTMLCanvasElement) {
    this.dotOne = dotOne;
    this.dotTwo = dotTwo;
    this.dead = false;
    this.deadCount = 0;
    this.new = true;
    this.newCount = 10;
    this.colorStep = 1;
    this.alpha = 0;
    this.canvas = canvas;
  }

  draw(): void {
    const difference = (a: number, b: number) => {
      return Math.abs(a - b);
    };

    if (
      difference(this.dotOne.x, this.dotTwo.x) > 250 ||
      difference(this.dotOne.y, this.dotTwo.y) > 250
    )
      return;

    const ctx = this.canvas.getContext("2d");
    if(ctx){
      const offsetBugPatch = -2
      ctx.strokeStyle = this.getColour();
      ctx.lineWidth = 1;
  
      ctx.beginPath();
      ctx.moveTo(this.dotOne.x - offsetBugPatch, this.dotOne.y - offsetBugPatch);
      ctx.lineTo(this.dotTwo.x - offsetBugPatch, this.dotTwo.y - offsetBugPatch);
      ctx.stroke();
    }
  }

  getColour(): string {
    if (this.new) {
      this.alpha += 0.05;
      if (this.alpha >= 1) {
        this.alpha = 1;
        this.new = false;
      }
    } else if (this.dead) {
      this.alpha -= 0.05;
      if (this.alpha <= 0) {
        this.alpha = 0;
        this.deadCount += 1;
      }
    }
    return `rgba(0, 39, 124, ${this.alpha})`;
  }
}

export default Line;
