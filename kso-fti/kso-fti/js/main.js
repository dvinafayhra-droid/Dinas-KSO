// ===== KSO FTI - main.js =====
// 1) Menu burger (mobile)
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
}

// 2) Filter (halaman Event & Galeri). Tombol: data-filter="rukes"; item: data-program="rukes"
document.querySelectorAll('.filter').forEach(group => {
  const items = document.querySelectorAll(group.dataset.target);
  group.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(it => it.classList.toggle('hide', f !== 'semua' && it.dataset.program !== f));
    });
  });
});
