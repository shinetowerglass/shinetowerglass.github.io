document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  const navItems = [
    ["home","Home","index.html"],["about","About","about.html"],["services","Services","services.html"],["blog","Blog","blog.html"],["contact","Contact","contact.html"]
  ];
  const serviceMenu = [
    ["Aluminum doors & windows","aluminum-doors-windows.html","bi-window"],
    ["Glass partitions","glass-partitions.html","bi-grid-1x2"],
    ["Glass & aluminum facades","glass-aluminum-facades.html","bi-buildings"],
    ["Glass doors & shopfronts","glass-doors-shopfronts.html","bi-door-open"],
    ["Shower & bathroom glass","shower-bathroom-glass.html","bi-droplet-half"],
    ["Glass railings & mirrors","glass-railings-mirrors.html","bi-columns-gap"]
  ];
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
          <a class="navbar-brand" href="index.html" aria-label="Shine Tower home">
            <span class="brand-mark"><i class="bi bi-buildings"></i></span>
            <span class="brand-name">SHINE TOWER<small>GLASS & ALUMINUM WORKS LLC SPC</small></span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav ms-auto align-items-lg-center">
              <li class="nav-item"><a class="nav-link ${page==='home'?'active':''}" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link ${page==='about'?'active':''}" href="about.html">About</a></li>
              <li class="nav-item dropdown services-nav">
                <a class="nav-link dropdown-toggle ${page==='services'?'active':''}" href="services.html" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                <div class="dropdown-menu mega-services-menu" aria-labelledby="servicesDropdown">
                  <div class="mega-menu-heading"><span>OUR SERVICES</span><a href="services.html">View all services <i class="bi bi-arrow-up-right"></i></a></div>
                  <div class="mega-services-grid">${serviceMenu.map(([label,url,icon])=>`<a class="mega-service-item" href="${url}"><span class="mega-service-icon"><i class="bi ${icon}"></i></span><span>${label}</span><i class="bi bi-arrow-up-right item-arrow"></i></a>`).join("")}</div>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link ${page==='blog'?'active':''}" href="blog.html">Blog</a></li>
              <li class="nav-item"><a class="nav-link ${page==='contact'?'active':''}" href="contact.html">Contact</a></li>
              <li class="nav-item ms-lg-2"><button class="btn btn-accent" data-open-enquiry>GET A QUOTE <i class="bi bi-arrow-up-right ms-1"></i></button></li>
            </ul>
          </div>
        </div>
      </nav>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = `
    <footer class="site-footer"><div class="container"><div class="row g-4">
      <div class="col-lg-5"><div class="footer-brand">SHINE TOWER<small>GLASS & ALUMINUM WORKS LLC SPC</small></div><p class="footer-copy">Professional glass and aluminum solutions for residential, commercial and industrial applications in Abu Dhabi, UAE.</p></div>
      <div class="col-6 col-lg-2"><h4>Explore</h4><ul class="footer-links">${navItems.map(([k,l,u])=>`<li><a href="${u}">${l}</a></li>`).join("")}</ul></div>
      <div class="col-6 col-lg-2"><h4>Our services</h4><ul class="footer-links"><li><a href="services.html">Aluminum doors & windows</a></li><li><a href="services.html">Glass partitions</a></li><li><a href="services.html">Glass facades</a></li><li><a href="services.html">Shopfronts</a></li></ul></div>
      <div class="col-lg-3"><h4>Contact</h4><div class="footer-contact"><p><i class="bi bi-geo-alt me-2"></i>M37, Musaffah, Abu Dhabi, UAE</p><p><i class="bi bi-telephone me-2"></i><a class="footer-contact" href="tel:+971506767279">+971 50 676 7279</a></p><p><i class="bi bi-whatsapp me-2"></i><a class="footer-contact" href="https://wa.me/971506767279">WhatsApp us</a></p></div></div>
    </div><div class="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2"><span>© <span id="year"></span> Shine Tower Glass and Aluminum Works LLC SPC. All rights reserved.</span><span>Made for modern spaces.</span></div></div></footer>`;
  const year = document.getElementById("year"); if(year) year.textContent = new Date().getFullYear();

  const floating = document.getElementById("floating-actions");
  if (floating) floating.innerHTML = `<div class="floating-actions" aria-label="Quick contact"><a class="float-btn float-call" href="tel:+971506767279" aria-label="Call Shine Tower" title="Call"><i class="bi bi-telephone-fill"></i></a><a class="float-btn float-wa" href="https://wa.me/971506767279" target="_blank" rel="noopener" aria-label="WhatsApp Shine Tower" title="WhatsApp"><i class="bi bi-whatsapp"></i></a></div><button class="back-top" id="backTop" aria-label="Back to top" title="Back to top"><i class="bi bi-arrow-up"></i></button>`;

  const modalHost = document.getElementById("enquiry-modal");
  if (modalHost) modalHost.innerHTML = `
    <div class="modal fade" id="enquiryModal" tabindex="-1" aria-labelledby="enquiryModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content">
        <div class="modal-header"><div><h2 class="modal-title" id="enquiryModalLabel">Let's discuss your project</h2><p class="modal-subtitle">Share a few details and our team can follow up with you.</p></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div class="modal-body"><form id="popupEnquiryForm">
          <div class="row g-3">
            <div class="col-md-6"><label class="form-label">Your name *</label><input class="form-control" name="name" required placeholder="Full name"></div>
            <div class="col-md-6"><label class="form-label">Phone number *</label><input class="form-control" name="phone" required placeholder="+971"></div>
            <div class="col-md-6"><label class="form-label">Email address</label><input class="form-control" type="email" name="email" placeholder="name@example.com"></div>
            <div class="col-md-6"><label class="form-label">Service required</label><select class="form-select" name="service" id="popupService"><option value="">Select a service</option><option>Aluminum doors & windows</option><option>Glass partitions</option><option>Glass & aluminum facades</option><option>Glass doors & shopfronts</option><option>Shower & bathroom glass</option><option>Glass railings & mirrors</option><option>Other / Not sure</option></select></div>
            <div class="col-12"><label class="form-label">How can we help?</label><textarea class="form-control" name="message" rows="3" placeholder="Briefly describe your project"></textarea></div>
            <div class="col-12 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3"><small class="text-secondary">* Required fields</small><button type="submit" class="btn btn-accent">Submit enquiry <i class="bi bi-arrow-up-right ms-2"></i></button></div>
            <div class="col-12"><div id="popupFeedback" class="form-feedback" role="status"></div><p class="form-note mb-0">Submitting opens your email application with the enquiry prepared. A server-side form service is needed for direct online delivery.</p></div>
          </div>
        </form></div>
      </div></div>
    </div>`;

  const modalElement = document.getElementById("enquiryModal");
  const enquiryModal = modalElement && window.bootstrap ? new bootstrap.Modal(modalElement) : null;
  document.querySelectorAll("[data-open-enquiry]").forEach(btn => btn.addEventListener("click", () => {
    const service = btn.getAttribute("data-service");
    const serviceSelect = document.getElementById("popupService");
    if (service && serviceSelect) serviceSelect.value = service;
    if (enquiryModal) enquiryModal.show();
  }));

  function submitEnquiry(form, feedback) {
    const data = new FormData(form);
    const name = (data.get("name") || "").trim();
    const phone = (data.get("phone") || "").trim();
    if (!name || !phone) { if(feedback) feedback.textContent = "Please enter your name and phone number."; return; }
    const subject = encodeURIComponent("Website enquiry - Shine Tower");
    const body = encodeURIComponent(
      `Website enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${data.get("email") || "Not provided"}\nService: ${data.get("service") || "Not specified"}\nMessage: ${data.get("message") || "Not provided"}\n\nPlease contact me regarding this enquiry.`
    );
    if(feedback) feedback.textContent = "Your email application should open with the enquiry details. Please send the prepared email to complete your enquiry.";
    window.location.href = `mailto:info@shinetower.ae?subject=${subject}&body=${body}`;
  }
  const popupForm = document.getElementById("popupEnquiryForm");
  if (popupForm) popupForm.addEventListener("submit", e => { e.preventDefault(); submitEnquiry(popupForm, document.getElementById("popupFeedback")); });
  document.querySelectorAll(".js-enquiry-form").forEach(form => form.addEventListener("submit", e => { e.preventDefault(); submitEnquiry(form, form.querySelector(".form-feedback")); }));

  const backTop = document.getElementById("backTop");
  if (backTop) {
    const toggleBackTop = () => backTop.classList.toggle("show", window.scrollY > 350);
    window.addEventListener("scroll", toggleBackTop, {passive:true}); toggleBackTop();
    backTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
  }

  document.querySelectorAll(".blog-read").forEach(link => link.addEventListener("click", e => {
    e.preventDefault();
    const title = link.dataset.title, copy = link.dataset.copy;
    const articleModal = document.createElement("div");
    articleModal.className = "modal fade";
    articleModal.innerHTML = `<div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h2 class="modal-title">${title}</h2><button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p>${copy}</p><button class="btn btn-accent" data-bs-dismiss="modal">Close</button></div></div></div>`;
    document.body.appendChild(articleModal);
    const instance = new bootstrap.Modal(articleModal); instance.show();
    articleModal.addEventListener("hidden.bs.modal", () => articleModal.remove(), {once:true});
  }));

  // Optional first-visit popup: delayed and session-limited to avoid repeatedly interrupting visitors.
  if (enquiryModal && !sessionStorage.getItem("shinePopupSeen")) {
    setTimeout(() => {
      if (!sessionStorage.getItem("shinePopupSeen")) {
        enquiryModal.show();
        sessionStorage.setItem("shinePopupSeen", "1");
      }
    }, 9000);
  }
});