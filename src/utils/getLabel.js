/**
 * Get the label type based on the movie vote
 *
 * @param {string} vote - The movie vote
 * @returns {string} - The label info
 */
export default function getLabel(vote) {
  let label = 'danger';

  if (vote > 5) {
    label = 'warning';
  }

  if (vote > 6) {
    label = 'info';
  }

  if (vote > 7) {
    label = 'success';
  }

  return label;
}
