const { Sprite } = kontra;

export default class Block extends Sprite.class {
  constructor() {
    super();
    this.row = 0;
    this.col = 0;
    this.selected = false;
  }

  kill() {
    this.ttl = 0;
  }
}
