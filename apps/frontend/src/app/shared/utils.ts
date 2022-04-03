export const addTrailingZero = (value: number): string => {
  return value > 9 ? value.toString() : `${value}0`;
}

export const integerValueWithThousandSeparator = (value: number): string => {
  return Number(value.toFixed(0)).toLocaleString();
}
