function qs(obj) {
  const query = Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
  return query ? `?${query}` : ''
}

export default qs
