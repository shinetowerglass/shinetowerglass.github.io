
document.addEventListener('DOMContentLoaded', () => {
  const backTop = document.getElementById('backToTop');
  const onScroll = () => { if(backTop) backTop.classList.toggle('show', window.scrollY > 350); };
  window.addEventListener('scroll', onScroll); onScroll();
  if(backTop) backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());

  const modalEl = document.getElementById('inquiryModal');
  if(modalEl && window.bootstrap) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    document.querySelectorAll('[data-open-inquiry]').forEach(btn => btn.addEventListener('click', () => modal.show()));
    if(!sessionStorage.getItem('shineTowerPopupSeen')) {
      setTimeout(() => {
        if(!sessionStorage.getItem('shineTowerPopupSeen')) {
          modal.show();
          sessionStorage.setItem('shineTowerPopupSeen','1');
        }
      }, 18000);
    }
    modalEl.addEventListener('hidden.bs.modal', () => sessionStorage.setItem('shineTowerPopupSeen','1'));
  }

  document.querySelectorAll('.whatsapp-inquiry-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const phone = data.get('phone') || '';
      const email = data.get('email') || '';
      const service = data.get('service') || 'General enquiry';
      const message = data.get('message') || '';
      const text = `Hello Shine Tower, I would like to enquire.\\nName: ${name}\\nPhone: ${phone}\\nEmail: ${email}\\nService: ${service}\\nMessage: ${message}`;
      window.open(`https://wa.me/971506767279?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      const success = form.querySelector('.form-success');
      if(success) success.classList.remove('d-none');
      form.reset();
    });
  });

  document.querySelectorAll('[data-service-search]').forEach(input => {
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      document.querySelectorAll('[data-service-card]').forEach(card => {
        card.classList.toggle('d-none', !card.textContent.toLowerCase().includes(q));
      });
    });
  });
});
