const loader=document.querySelector('#preloader');
let introStarted=false;
function startPageIntro(){
  if(introStarted)return;
  introStarted=true;
  loader?.classList.add('done');
  // Reveal only after the spinner has faded out.
  window.setTimeout(()=>{document.body.classList.add('intro-ready');loader?.setAttribute('aria-hidden','true')},470);
}
if(document.readyState==='complete')window.setTimeout(startPageIntro,700);
else window.addEventListener('load',()=>window.setTimeout(startPageIntro,700),{once:true});
window.setTimeout(startPageIntro,4500);
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach((el,i)=>{if(el.classList.contains('service-card'))el.style.transitionDelay=`${(i%6)*65}ms`;observer.observe(el)});

const modal=document.querySelector('#lightbox');document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',()=>{modal.querySelector('img').src=card.dataset.image;modal.querySelector('img').alt=card.dataset.title;modal.querySelector('p').textContent=card.dataset.title;modal.hidden=false;document.body.style.overflow='hidden'}));function closeModal(){modal.hidden=true;document.body.style.overflow=''}modal?.querySelector('.lightbox-close')?.addEventListener('click',closeModal);modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal()});
document.querySelector('#year').textContent=new Date().getFullYear();document.querySelector('#quote-form')?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const fields=Object.fromEntries(data.entries());const subject=`Quotation Inquiry - ${fields.service}`;const body=`Hello On-Target IT Solutions,\n\nI would like to request a quotation.\n\nName: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\nService/Product: ${fields.service}\n\nProject Details:\n${fields.details}\n\nThank you.`;const contactEmail='';if(contactEmail){location.href=`mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}else{navigator.clipboard?.writeText(`Subject: ${subject}\n\n${body}`).then(()=>alert('Inquiry details copied. Please send them to the company using your preferred contact channel.')).catch(()=>prompt('Copy your inquiry:',body));}});

// Stagger the expanded brand and client grids by row, not by the whole page.
for (const selector of ['.brand-showcase','.clients-grid']) {const grid=document.querySelector(selector);if(grid){[...grid.children].forEach((card,index)=>{card.style.transitionDelay=`${Math.min(index%5,4)*110}ms`;});}}
