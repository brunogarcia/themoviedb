export default function getLabelInfo(vote) {
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
