export const range = (start: number, end?: number, step = 1): number[] => {
  if (end === undefined) {
    return Array(start)
      .fill(0)
      .map((x, y) => x + y * step)
  }

  return Array(end - start + 1)
    .fill(0)
    .map((_, i) => i * step)
}
