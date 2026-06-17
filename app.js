
//   <!-- ============================================================
//        JAVASCRIPT
//   ============================================================ -->

    // ── Page routing ──────────────────────────────────────────────
    function showPage(pageId) {
      document.querySelectorAll('.page').forEach(function(p) {
        p.classList.remove('page--active');
      });
      var target = document.getElementById('page-' + pageId);
      if (target) {
        target.classList.add('page--active');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }

    function goToHome() {
      showPage('home');
    }

    // ── Password toggle ───────────────────────────────────────────
    function togglePassword(inputId, btn) {
      var input = document.getElementById(inputId);
      if (!input) return;
      var isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.setAttribute('aria-label', isPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
      // Swap icon
      var svg = btn.querySelector('svg');
      if (isPassword) {
        // Eye-off icon
        svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
      } else {
        svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
      }
    }

    // ── Mobile nav ────────────────────────────────────────────────
    function toggleMobileNav() {
      var btn = document.getElementById('hamburger-btn');
      var menu = document.getElementById('mobile-nav-menu');
      if (!btn || !menu) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.setAttribute('aria-label', expanded ? 'Buka menu navigasi' : 'Tutup menu navigasi');
      menu.classList.toggle('mobile-nav--open', !expanded);
    }

    // Close mobile nav on outside click
    document.addEventListener('click', function(e) {
      var btn = document.getElementById('hamburger-btn');
      var menu = document.getElementById('mobile-nav-menu');
      if (!btn || !menu) return;
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Buka menu navigasi');
        menu.classList.remove('mobile-nav--open');
      }
    });

    // ── Header scroll effect ──────────────────────────────────────
    var header = document.getElementById('site-header');
    if (header) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
          header.classList.add('site-header--scrolled');
        } else {
          header.classList.remove('site-header--scrolled');
        }
      }, { passive: true });
    }

    // ── Volume toggle ─────────────────────────────────────────────
    var volumeOn = false;
    function toggleVolume() {
      volumeOn = !volumeOn;
      var off = document.getElementById('vol-icon-off');
      var on  = document.getElementById('vol-icon-on');
      var btn = document.getElementById('volume-btn');
      if (off) off.style.display = volumeOn ? 'none' : '';
      if (on)  on.style.display  = volumeOn ? '' : 'none';
      if (btn) btn.setAttribute('aria-label', volumeOn ? 'Kontrol volume – aktif' : 'Kontrol volume – dimatikan');
    }

    // ── Profile dropdown ──────────────────────────────────────────
    function toggleProfileDropdown(e) {
      if (e) e.stopPropagation();
      var btn = event.target.closest('.header-account-trigger');
      var dropdown = btn ? btn.parentElement.querySelector('.profile-dropdown') : null;
      if (!btn || !dropdown) return;
      var isOpen = dropdown.classList.contains('profile-dropdown--open');
      btn.setAttribute('aria-expanded', String(!isOpen));
      dropdown.classList.toggle('profile-dropdown--open', !isOpen);
    }

    document.addEventListener('click', function(e) {
      var profileMenus = document.querySelectorAll('.profile-menu');
      profileMenus.forEach(function(menu) {
        var btn = menu.querySelector('.header-account-trigger');
        var dropdown = menu.querySelector('.profile-dropdown');
        if (!btn || !dropdown) return;
        if (!menu.contains(e.target)) {
          btn.setAttribute('aria-expanded', 'false');
          dropdown.classList.remove('profile-dropdown--open');
        }
      });
    });

    // ── Footer accordion toggle ───────────────────────────────────
    function toggleFooterSection(btn) {
      if (!btn) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var targetId = btn.getAttribute('aria-controls');
      var linksSection = document.getElementById(targetId);
      
      if (!linksSection) return;
      
      btn.setAttribute('aria-expanded', String(!expanded));
      linksSection.classList.toggle('site-footer__links--hidden', expanded);
    }