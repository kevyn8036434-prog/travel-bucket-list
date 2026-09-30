const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.destination-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    cards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selectedFilter === 'all' || category === selectedFilter;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});
