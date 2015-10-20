const unprefixify = (prefix, key) => {
  const stripped = key.replace(prefix, '')
  return stripped[0].toLowerCase() + stripped.slice(1)
}

const filtered = (props, prefix) => {
  if (typeof prefix === 'string') prefix = new RegExp(`^${prefix}`)
  return Object.keys(props)
    .filter(key => prefix.test(key))
    .map(key => ({[unprefixify(prefix, key)]: props[key]}))
    .reduce((props, prop) => ({ ...props, ...prop }), {})
}

export default filtered
