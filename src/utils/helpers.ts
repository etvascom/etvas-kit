export const range = (start: number, end: number, step: number = 1) => {
  if (end === undefined) {
    return Array(start)
      .fill(start, end, undefined)
      .map((x, y) => x + y * step)
  }

  return Array(end - start + 1)
    .fill(start, end, undefined)
    .map((_, i) => i * step)
}
