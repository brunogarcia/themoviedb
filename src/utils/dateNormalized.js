const dateNormalized = value =>
  new Date(value)
    .toLocaleString('en-us', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

export default dateNormalized;
