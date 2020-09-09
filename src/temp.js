function clickedObject(object) {
  console.log('onDown');
  console.log(object);
}

const { init, GameLoop, Sprite, initPointer, track } = kontra;

const { canvas, context } = init();
console.log(canvas);
console.log(context);
initPointer();

let sprite = null;
const blockImage = new Image();
blockImage.src = 'assets/images/bean_blue.png';
blockImage.onload = () => {
  sprite = Sprite({
    x: 200,
    y: 200,
    // dx: 2,
    image: blockImage,
    // onDown: () => {
    //   console.log('onDown');
    //   console.log(this);
    // },
    onUp: () => {
      // console.log('onUp');
    },
    onOver: () => {
      // console.log('onOver');
    },
  });
  console.log(sprite);
  sprite.onDown = () => {
    clickedObject(sprite);
  };
  track(sprite);
};


const loop = GameLoop({
  update: () => {
    if (sprite) {
      sprite.update();

      // if (sprite.x > canvas.width) {
      //   sprite.x = -sprite.width;
      // }
    }
    // console.log('update');
  },
  render: () => {
    // console.log('render');
    if (sprite) {
      sprite.render();
    }
  },
});
loop.start();
