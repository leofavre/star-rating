const starRatingTemplate = document.createElement('template');

starRatingTemplate.innerHTML = `
  <style>
    @import url(StarRating.css);
  </style>
  <div>
    ${'<button>★</button>'.repeat(5)}
  </div>
`;

export { starRatingTemplate };
