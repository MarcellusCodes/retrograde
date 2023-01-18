export const comparePieces = (scrapedPieces: number) => {
  if (scrapedPieces <= 50) {
    return 0;
  } else if (scrapedPieces <= 100) {
    return 10;
  } else if (scrapedPieces <= 300) {
    return 15;
  } else if (scrapedPieces <= 500) {
    return 25;
  } else return 50;
};
