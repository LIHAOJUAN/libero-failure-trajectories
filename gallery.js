(() => {
  const field = document.getElementById('gallery-search');
  if (!field) return;
  const cards = [...document.querySelectorAll('.video-card')];
  const status = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  const normalize = value => value.toLocaleLowerCase().trim().replace(/\s+/g, ' ');
  field.addEventListener('input', () => {
    const words = normalize(field.value).split(' ').filter(Boolean);
    let count = 0;
    cards.forEach(card => {
      const match = words.every(word => card.dataset.search.includes(word));
      card.hidden = !match;
      if (match) count += 1;
      else card.querySelector('video')?.pause();
    });
    status.textContent = `显示 ${count} / ${cards.length} 条`;
    empty.hidden = count !== 0;
  });
})();
