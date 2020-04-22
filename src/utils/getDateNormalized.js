/**
 * Get the date normalized
 *
 * @param {string} date - The date string to process
 * @returns {string} - The date normalized
 */
export default function getDateNormalized(date) {
  return new Date(date)
    .toLocaleString('en-us', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
}
