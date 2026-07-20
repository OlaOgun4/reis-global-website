
const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');
menuToggle?.addEventListener('click',()=>{nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year')?.append(new Date().getFullYear());
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 const f=btn.dataset.filter; document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
 document.querySelectorAll('.filterable').forEach(c=>c.style.display=(f==='all'||c.dataset.category.includes(f))?'':'none');
}));
const form=document.getElementById('contactForm');
form?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const sub=encodeURIComponent(`REIS enquiry from ${fd.get('name')}`);const body=encodeURIComponent(`Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\nOrganisation: ${fd.get('organisation')||''}\n\nEnquiry:\n${fd.get('message')}`);location.href=`mailto:info@reis-global.com?subject=${sub}&body=${body}`});
