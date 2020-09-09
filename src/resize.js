export function resize(gameWidth, gameHeight) {
  const canvas = document.getElementById('canvas');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const windowRatio = width / height;
  const gameWindowRatio = gameWidth / gameHeight;

  if (gameWindowRatio < windowRatio) {
    canvas.style.width = `${height * gameWindowRatio}px`;
    canvas.style.height = `${height}px`;
  } else {
    canvas.style.width = `${width}px`;
    canvas.style.height = `${width / gameWindowRatio}px`;
  }
}
