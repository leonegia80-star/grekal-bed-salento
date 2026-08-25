const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{nav.style.display = nav.style.display==='flex' ? '' : 'flex'; nav.style.flexDirection='column'; nav.style.position='absolute'; nav.style.top='74px'; nav.style.right='14px'; nav.style.background='#fff'; nav.style.padding='18px'; nav.style.borderRadius='16px'; nav.style.boxShadow='0 20px 45px rgba(0,0,0,.15)';});

const items=[...document.querySelectorAll('.gallery-item')];
const box=document.querySelector('.lightbox');
const img=box?.querySelector('img');
let current=0;
function openLightbox(i){current=i;img.src=items[i].dataset.img;img.alt=items[i].querySelector('img').alt;box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeLightbox(){box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function move(dir){current=(current+dir+items.length)%items.length;openLightbox(current)}
items.forEach((it,i)=>it.addEventListener('click',()=>openLightbox(i)));
box?.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
box?.querySelector('.lightbox-prev').addEventListener('click',()=>move(-1));
box?.querySelector('.lightbox-next').addEventListener('click',()=>move(1));
box?.addEventListener('click',e=>{if(e.target===box)closeLightbox()});
document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)});
