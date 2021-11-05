export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fadeOut() {
  return new Promise((resolve) => {
    let opacity = 1;

    let intervalId = setInterval(() => {
      opacity -= 0.02;
      document.body.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(intervalId);
        document.body.opacity = 0;
        resolve();
      }
    }, 1)
  })
}

export async function fadeIn() {
  return new Promise((resolve) => {
    let opacity = 1;

    let intervalId = setInterval(() => {
      opacity += 0.02;
      document.body.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(intervalId);
        resolve();
      }
    }, 1)
  })
}
