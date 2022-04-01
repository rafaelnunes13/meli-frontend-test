export const getDecimals = (value: number): number => {
  if (Math.floor(value) === value) {
    return 0;
  }
  return Number(Number(value).toString().split('.')[1] ?? 0);
}
