export const decimalsLeadingZero = (value: number): string => {
  return value > 9 ? value.toString() : `0${value}`;
}

export const integerValueWithThousandSeparator = (value: number): string => {
  return Number(value.toFixed(0)).toLocaleString();
}