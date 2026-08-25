const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

const items = [...document.querySelectorAll('.gallery-item')];
const box = document.querySelector('.lightbox');
const img = box?.querySelector('img');
let current = 0;

function openLightbox(index){
  if(!box || !img || !items.length) return;
  current = index;
  img.src = items[index].dataset.img;
  img.alt = items[index].querySelector('img').alt;
  box.classList.add('open');
  box.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  if(!box) return;
  box.classList.remove('open');
  box.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function moveLightbox(delta){
  current = (current + delta + items.length) % items.length;
  openLightbox(current);
}
items.forEach((item,index) => item.addEventListener('click', () => openLightbox(index)));
box?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
box?.querySelector('.lightbox-prev')?.addEventListener('click', () => moveLightbox(-1));
box?.querySelector('.lightbox-next')?.addEventListener('click', () => moveLightbox(1));
box?.addEventListener('click', event => { if(event.target === box) closeLightbox(); });
document.addEventListener('keydown', event => {
  if(!box?.classList.contains('open')) return;
  if(event.key === 'Escape') closeLightbox();
  if(event.key === 'ArrowLeft') moveLightbox(-1);
  if(event.key === 'ArrowRight') moveLightbox(1);
});
