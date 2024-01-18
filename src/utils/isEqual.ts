export const isEqual = (object1: any, object2: any) => {
  if (typeof object1 !== typeof object2) {
    return false
  }

  if (typeof object1 !== 'object') {
    return object1 === object2
  }

  const keys1 = Object.keys(object1 ?? {})
  const keys2 = Object.keys(object2 ?? {})

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let key of keys1) {
    if (!isEqual(object1[key], object2[key])) {
      return false
    }
  }

  return true
}
