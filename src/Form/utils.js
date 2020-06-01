import hyperid from 'hyperid'

const instances = {}

export function makeId(group = 'global', prefix) {
  const instances = makeInstance(group)

  const id = instances()
  const { count } = hyperid.decode(id)

  return `${prefix || group}-${count}`
}

function makeInstance(group) {
  if (!instances[group]) {
    instances[group] = hyperid()
  }

  return instances[group]
}
