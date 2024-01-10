export const range = (start: number, end: number, step: number = 1) => {
  if (end === undefined) {
    return Array(start)
      .fill(undefined, start, end)
      .map((x, y) => x + y * step)
  }

  return Array(end - start + 1)
    .fill(undefined, start, end)
    .map((_, i) => i * step)
}
