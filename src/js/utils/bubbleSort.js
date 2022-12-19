export const bubbleSort = (cards) => {
  for (let j = 0; j < cards.length; j++) {
    for (let i = 0; i < cards.length - 1; i++) {
      let a = cards[i];
      let b = cards[i + 1];
      if (a.name > b.name) {
        const temp = a;
        a = b;
        b = temp;
      }
      cards[i] = a;
      cards[i + 1] = b;
    }
  }
};
