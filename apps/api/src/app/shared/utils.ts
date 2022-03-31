export const countDecimals = (value: number): number => {
  if (Math.floor(value) === value) {
    return 0;
  }
  value.toString().split('.')[1] ?? 0
}
