export function imageResizeNumber(
  reductionFactor: number,
  imageWidth: number,
): number {
  const resizeNumber = imageWidth - imageWidth * reductionFactor;

  if (imageWidth < 720) {
    return imageWidth;
  }

  if (resizeNumber < 720) {
    return 720;
  }

  return Number(resizeNumber.toFixed(0));
}
