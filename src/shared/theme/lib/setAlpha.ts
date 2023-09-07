export const setAlpha = (rgbaHex: string, a: number): string => {
  const hexColor = rgbaHex.split('#')[1];
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  return `rgba(${r},${g},${b},${a})`;
};
