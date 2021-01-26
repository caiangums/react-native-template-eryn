export const wait = async (seconds = 1) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
