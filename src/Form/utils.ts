import hyperid from 'hyperid'

const instances: Record<string, hyperid.Instance> = {}

export function makeId(group = 'global', prefix: string) {
  const instances = makeInstance(group)

  const id = instances()
  const { count } = hyperid.decode(id)

  return `${prefix || group}-${count}`
}

function makeInstance(group: string) {
  if (!instances[group]) {
    instances[group] = hyperid()
  }

  return instances[group]
}
