/**
 * Get the movie overview smaller
 *
 * @param {string} overview - The movie overview
 * @returns {string} - The movie overview smaller
 */
export default function getOverviewSmaller(overview) {
  const MAX_OVERVIEW_WORDS = 35;

  return overview
    .split(' ')
    .splice(0, MAX_OVERVIEW_WORDS)
    .join(' ');
}
