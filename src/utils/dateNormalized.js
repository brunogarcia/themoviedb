export default function dateNormalized(value) {
  return new Date(value)
    .toLocaleString('en-us', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
}
