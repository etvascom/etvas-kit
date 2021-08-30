export const range = (start, end, step = 1) => {
  if (end === undefined) {
    return Array(start)
      .fill()
      .map((x, y) => x + y * step)
  }

  return Array(end - start + 1)
    .fill()
    .map((_, i) => i * step)
}
