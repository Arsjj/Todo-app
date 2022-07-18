export function convert(date) {
  if (date) {
    return new Intl.DateTimeFormat('en-GB', {
      hour12: false,
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: 'numeric',
    }).format(new Date(date))
  }
}
