/* ==========================================================
   PORTFOLIOCRAFT - DYNAMIC PORTFOLIO BUILDER & GENERATOR
   Robust Application Core, State Engine & Standalone Exporter
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. DEFAULT SAMPLE PROFILE STATE
     ---------------------------------------------------------- */
  const DEFAULT_STATE = {
    profile: {
      name: "Alex Rivera",
      title: "Full Stack Developer",
      bio: "Full Stack Developer specializing in crafting robust backend systems, dynamic frontend web interfaces, and high-performance applications. Turning complex technical challenges into intuitive digital experiences.",
      photoUrl: "assets/images/profile.png",
      ctaText: "View Projects",
      ctaLink: "#projects"
    },
    skills: [
      { id: 1, name: "HTML5", category: "frontend", proficiency: 95, icon: "bi-filetype-html" },
      { id: 2, name: "CSS3", category: "frontend", proficiency: 92, icon: "bi-palette-fill" },
      { id: 3, name: "JavaScript", category: "languages", proficiency: 90, icon: "bi-filetype-js" },
      { id: 4, name: "React", category: "frontend", proficiency: 88, icon: "bi-gear-wide-connected" },
      { id: 5, name: "Node.js", category: "backend", proficiency: 87, icon: "bi-server" },
      { id: 6, name: "Express", category: "backend", proficiency: 85, icon: "bi-cpu-fill" },
      { id: 7, name: "Python", category: "languages", proficiency: 84, icon: "bi-filetype-py" },
      { id: 8, name: "Java", category: "languages", proficiency: 80, icon: "bi-filetype-java" },
      { id: 9, name: "MongoDB", category: "databases", proficiency: 86, icon: "bi-database-fill-gear" },
      { id: 10, name: "MySQL", category: "databases", proficiency: 85, icon: "bi-database-fill-check" },
      { id: 11, name: "Git", category: "tools", proficiency: 90, icon: "bi-git" },
      { id: 12, name: "GitHub", category: "tools", proficiency: 92, icon: "bi-github" },
      { id: 13, name: "VS Code", category: "tools", proficiency: 95, icon: "bi-code-square" }
    ],
    projects: [
      {
        id: 1,
        title: "Portfolio Website",
        desc: "A sleek, modern developer portfolio featuring dark mode aesthetic, animated background shapes, interactive skills filter, and contact form validation.",
        tags: "HTML5, CSS3, JavaScript, Bootstrap 5",
        image: "assets/images/project1.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com"
      },
      {
        id: 2,
        title: "Weather App",
        desc: "Real-time weather forecasting web app integrating OpenWeatherMap API, geolocation lookup, 7-day outlook predictions, and dynamic weather icons.",
        tags: "React, REST API, Tailwind, Chart.js",
        image: "assets/images/project2.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com"
      },
      {
        id: 3,
        title: "To-Do App",
        desc: "An interactive task management app with category filters, priority tags, drag-and-drop ordering, and persistent local storage synchronization.",
        tags: "JavaScript, HTML5, CSS Grid, LocalStorage",
        image: "assets/images/project3.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com"
      },
      {
        id: 4,
        title: "E-commerce Website",
        desc: "Full-featured online shopping platform complete with product catalogue filtering, persistent shopping cart, Stripe payment gateway, and admin dashboard.",
        tags: "React, Node.js, Express, MongoDB",
        image: "assets/images/project4.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com"
      },
      {
        id: 5,
        title: "Chat Application",
        desc: "Real-time messaging web app featuring instant chat rooms, online user status indicators, media file attachments, and end-to-end WebSocket communication.",
        tags: "Socket.io, Node.js, React, Express",
        image: "assets/images/project5.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com"
      },
      {
        id: 6,
        title: "Student Management System",
        desc: "Comprehensive web portal for managing student records, attendance tracking, course enrollments, grade calculations, and automated report generation.",
        tags: "Python, MySQL, Bootstrap 5, Flask",
        image: "assets/images/project6.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com"
      }
    ],
    contact: {
      email: "alex.rivera.dev@example.com",
      phone: "+1 (415) 555-0199",
      location: "San Francisco, CA (Open to Remote / Relocation)",
      availability: "Available for New Projects & Opportunities",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://x.com"
    },
    achievements: [
      {
        id: 1,
        title: "Full-Stack Web Development Professional Certificate",
        issuer: "Meta & Coursera Certified",
        mediaType: "image",
        mediaUrl: "assets/images/project1.png",
        credentialUrl: "https://coursera.org"
      },
      {
        id: 2,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services (AWS)",
        mediaType: "image",
        mediaUrl: "assets/images/project2.png",
        credentialUrl: "https://aws.amazon.com"
      }
    ],
    theme: {
      primaryColor: "#3B82F6",
      secondaryColor: "#06B6D4",
      bgColor: "#0b0f19",
      font: "'Poppins', 'Inter', sans-serif",
      defaultMode: "dark"
    }
  };

  // Active State (Loaded from LocalStorage or Defaults)
  let appState = JSON.parse(localStorage.getItem('portfoliocraft_state')) || JSON.parse(JSON.stringify(DEFAULT_STATE));


  /* ----------------------------------------------------------
     2. DOM ELEMENTS
     ---------------------------------------------------------- */
  const appWorkspace = document.getElementById('appWorkspace');
  const previewContainer = document.getElementById('previewContainer');
  const viewportWrapper = document.getElementById('viewportWrapper');
  const portfolioForm = document.getElementById('portfolioGeneratorForm');

  // Profile Inputs
  const inputName = document.getElementById('inputName');
  const inputTitle = document.getElementById('inputTitle');
  const inputBio = document.getElementById('inputBio');
  const inputPhotoUrl = document.getElementById('inputPhotoUrl');
  const inputPhotoFile = document.getElementById('inputPhotoFile');
  const inputCtaText = document.getElementById('inputCtaText');
  const inputCtaLink = document.getElementById('inputCtaLink');

  // Contact & Social Inputs
  const inputEmail = document.getElementById('inputEmail');
  const inputPhone = document.getElementById('inputPhone');
  const inputLocation = document.getElementById('inputLocation');
  const inputAvailability = document.getElementById('inputAvailability');
  const inputGithub = document.getElementById('inputGithub');
  const inputLinkedin = document.getElementById('inputLinkedin');
  const inputInstagram = document.getElementById('inputInstagram');
  const inputTwitter = document.getElementById('inputTwitter');

  // Theme Elements
  const selectFont = document.getElementById('selectFont');
  const skillsListContainer = document.getElementById('skillsListContainer');
  const projectsListContainer = document.getElementById('projectsListContainer');
  const achievementsListContainer = document.getElementById('achievementsListContainer');
  const addSkillBtn = document.getElementById('addSkillBtn');
  const addProjectBtn = document.getElementById('addProjectBtn');
  const addAchievementBtn = document.getElementById('addAchievementBtn');


  /* ----------------------------------------------------------
     3. INITIALIZATION & FORM SYNCHRONIZATION
     ---------------------------------------------------------- */
  populateFormFromState();
  renderSkillsList();
  renderProjectsList();
  renderAchievementsList();
  renderPreview();

  function saveStateAndRender() {
    localStorage.setItem('portfoliocraft_state', JSON.stringify(appState));
    renderPreview();
  }

  function syncStateFromInputs() {
    if (inputName) appState.profile.name = inputName.value;
    if (inputTitle) appState.profile.title = inputTitle.value;
    if (inputBio) appState.profile.bio = inputBio.value;
    if (inputPhotoUrl) appState.profile.photoUrl = inputPhotoUrl.value;
    if (inputCtaText) appState.profile.ctaText = inputCtaText.value;
    if (inputCtaLink) appState.profile.ctaLink = inputCtaLink.value;

    if (inputEmail) appState.contact.email = inputEmail.value;
    if (inputPhone) appState.contact.phone = inputPhone.value;
    if (inputLocation) appState.contact.location = inputLocation.value;
    if (inputAvailability) appState.contact.availability = inputAvailability.value;
    if (inputGithub) appState.contact.github = inputGithub.value;
    if (inputLinkedin) appState.contact.linkedin = inputLinkedin.value;
    if (inputInstagram) appState.contact.instagram = inputInstagram.value;
    if (inputTwitter) appState.contact.twitter = inputTwitter.value;

    if (selectFont) appState.theme.font = selectFont.value;
  }

  function populateFormFromState() {
    if (inputName) inputName.value = appState.profile.name || '';
    if (inputTitle) inputTitle.value = appState.profile.title || '';
    if (inputBio) inputBio.value = appState.profile.bio || '';
    if (inputPhotoUrl) inputPhotoUrl.value = appState.profile.photoUrl || '';
    if (inputCtaText) inputCtaText.value = appState.profile.ctaText || '';
    if (inputCtaLink) inputCtaLink.value = appState.profile.ctaLink || '';

    if (inputEmail) inputEmail.value = appState.contact.email || '';
    if (inputPhone) inputPhone.value = appState.contact.phone || '';
    if (inputLocation) inputLocation.value = appState.contact.location || '';
    if (inputAvailability) inputAvailability.value = appState.contact.availability || '';
    if (inputGithub) inputGithub.value = appState.contact.github || '';
    if (inputLinkedin) inputLinkedin.value = appState.contact.linkedin || '';
    if (inputInstagram) inputInstagram.value = appState.contact.instagram || '';
    if (inputTwitter) inputTwitter.value = appState.contact.twitter || '';

    if (selectFont) selectFont.value = appState.theme.font || "'Poppins', 'Inter', sans-serif";

    const radioMode = document.querySelector(`input[name="themeModeRadio"][value="${appState.theme.defaultMode}"]`);
    if (radioMode) radioMode.checked = true;
  }

  // Real-time Event Listeners for Profile & Contact Input Fields
  [inputName, inputTitle, inputBio, inputPhotoUrl, inputCtaText, inputCtaLink,
   inputEmail, inputPhone, inputLocation, inputAvailability, inputGithub, inputLinkedin, inputInstagram, inputTwitter].forEach(el => {
    if (el) {
      el.addEventListener('input', () => {
        syncStateFromInputs();
        saveStateAndRender();
      });
    }
  });

  // Local Image Upload Handler
  if (inputPhotoFile) {
    inputPhotoFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          appState.profile.photoUrl = event.target.result;
          if (inputPhotoUrl) inputPhotoUrl.value = event.target.result;
          saveStateAndRender();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Theme Selectors
  if (selectFont) {
    selectFont.addEventListener('change', () => {
      syncStateFromInputs();
      saveStateAndRender();
    });
  }

  document.querySelectorAll('input[name="themeModeRadio"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
      appState.theme.defaultMode = e.target.value;
      saveStateAndRender();
    });
  });

  document.querySelectorAll('.color-swatch-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.theme.primaryColor = btn.getAttribute('data-color-blue');
      appState.theme.secondaryColor = btn.getAttribute('data-color-cyan');
      saveStateAndRender();
    });
  });

  // Background Color Swatches & Custom Picker Handlers
  document.querySelectorAll('.bg-swatch-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bg = btn.getAttribute('data-bg');
      if (bg) {
        appState.theme.bgColor = bg;
        saveStateAndRender();
      }
    });
  });

  ['customBgColorInput', 'formBgColorPicker'].forEach(id => {
    const picker = document.getElementById(id);
    if (picker) {
      picker.addEventListener('input', (e) => {
        appState.theme.bgColor = e.target.value;
        saveStateAndRender();
      });
    }
  });


  /* ----------------------------------------------------------
     4. DYNAMIC SKILLS LIST CONTROLLER & EVENT DELEGATION
     ---------------------------------------------------------- */
  function renderSkillsList() {
    if (!skillsListContainer) return;
    skillsListContainer.innerHTML = '';

    if (!appState.skills || appState.skills.length === 0) {
      skillsListContainer.innerHTML = '<p class="small text-muted text-center py-2 mb-0">No skills added yet. Click "Add Skill" above.</p>';
      return;
    }

    appState.skills.forEach((skill, index) => {
      const card = document.createElement('div');
      card.className = 'dynamic-item-card';
      card.innerHTML = `
        <button type="button" class="item-delete-btn" data-action="delete-skill" data-index="${index}" title="Remove Skill">
          <i class="bi bi-trash"></i>
        </button>
        <div class="row g-2">
          <div class="col-7">
            <label class="form-label-sm">Skill Name</label>
            <input type="text" class="form-control builder-form-control skill-name-input" data-index="${index}" value="${escapeHTML(skill.name)}">
          </div>
          <div class="col-5">
            <label class="form-label-sm">Category</label>
            <select class="form-select builder-form-control skill-cat-input" data-index="${index}">
              <option value="languages" ${skill.category === 'languages' ? 'selected' : ''}>Languages</option>
              <option value="frontend" ${skill.category === 'frontend' ? 'selected' : ''}>Frontend</option>
              <option value="backend" ${skill.category === 'backend' ? 'selected' : ''}>Backend</option>
              <option value="databases" ${skill.category === 'databases' ? 'selected' : ''}>Databases</option>
              <option value="tools" ${skill.category === 'tools' ? 'selected' : ''}>Tools</option>
            </select>
          </div>
        </div>
      `;
      skillsListContainer.appendChild(card);
    });
  }

  if (skillsListContainer) {
    skillsListContainer.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      if (idx !== null && appState.skills[idx]) {
        if (e.target.classList.contains('skill-name-input')) {
          appState.skills[idx].name = e.target.value;
        } else if (e.target.classList.contains('skill-cat-input')) {
          appState.skills[idx].category = e.target.value;
        }
        saveStateAndRender();
      }
    });

    skillsListContainer.addEventListener('click', (e) => {
      const deleteBtn = e.target.closest('[data-action="delete-skill"]');
      if (deleteBtn) {
        const idx = deleteBtn.getAttribute('data-index');
        appState.skills.splice(idx, 1);
        renderSkillsList();
        saveStateAndRender();
      }
    });
  }

  if (addSkillBtn) {
    addSkillBtn.addEventListener('click', () => {
      if (!appState.skills) appState.skills = [];
      appState.skills.push({
        id: Date.now(),
        name: "New Skill",
        category: "frontend",
        proficiency: 85,
        icon: "bi-code-slash"
      });
      renderSkillsList();
      saveStateAndRender();
    });
  }


  /* ----------------------------------------------------------
     5. DYNAMIC PROJECTS LIST CONTROLLER & EVENT DELEGATION
     ---------------------------------------------------------- */
  function renderProjectsList() {
    if (!projectsListContainer) return;
    projectsListContainer.innerHTML = '';

    if (!appState.projects || appState.projects.length === 0) {
      projectsListContainer.innerHTML = '<p class="small text-muted text-center py-2 mb-0">No projects added yet. Click "Add Project" above.</p>';
      return;
    }

    appState.projects.forEach((proj, index) => {
      const card = document.createElement('div');
      card.className = 'dynamic-item-card';
      card.innerHTML = `
        <button type="button" class="item-delete-btn" data-action="delete-project" data-index="${index}" title="Remove Project">
          <i class="bi bi-trash"></i>
        </button>
        <div class="mb-2">
          <label class="form-label-sm">Project Title</label>
          <input type="text" class="form-control builder-form-control proj-title-input" data-index="${index}" value="${escapeHTML(proj.title)}">
        </div>
        <div class="mb-2">
          <label class="form-label-sm">Description</label>
          <textarea class="form-control builder-form-control proj-desc-input" data-index="${index}" rows="2">${escapeHTML(proj.desc)}</textarea>
        </div>
        <div class="mb-2">
          <label class="form-label-sm">Tech Badges (comma separated)</label>
          <input type="text" class="form-control builder-form-control proj-tags-input" data-index="${index}" value="${escapeHTML(proj.tags)}">
        </div>
        <div class="row g-2 mb-2">
          <div class="col-6">
            <label class="form-label-sm">Live Demo URL</label>
            <input type="url" class="form-control builder-form-control proj-demo-input" data-index="${index}" value="${escapeHTML(proj.demoUrl)}">
          </div>
          <div class="col-6">
            <label class="form-label-sm">GitHub URL</label>
            <input type="url" class="form-control builder-form-control proj-github-input" data-index="${index}" value="${escapeHTML(proj.githubUrl)}">
          </div>
        </div>
        <div class="mb-2">
          <label class="form-label-sm">Image Path or URL</label>
          <input type="text" class="form-control builder-form-control proj-img-input" data-index="${index}" value="${escapeHTML(proj.image)}">
        </div>
      `;
      projectsListContainer.appendChild(card);
    });
  }

  if (projectsListContainer) {
    projectsListContainer.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      if (idx !== null && appState.projects[idx]) {
        if (e.target.classList.contains('proj-title-input')) {
          appState.projects[idx].title = e.target.value;
        } else if (e.target.classList.contains('proj-desc-input')) {
          appState.projects[idx].desc = e.target.value;
        } else if (e.target.classList.contains('proj-tags-input')) {
          appState.projects[idx].tags = e.target.value;
        } else if (e.target.classList.contains('proj-demo-input')) {
          appState.projects[idx].demoUrl = e.target.value;
        } else if (e.target.classList.contains('proj-github-input')) {
          appState.projects[idx].githubUrl = e.target.value;
        } else if (e.target.classList.contains('proj-img-input')) {
          appState.projects[idx].image = e.target.value;
        }
        saveStateAndRender();
      }
    });

    projectsListContainer.addEventListener('click', (e) => {
      const deleteBtn = e.target.closest('[data-action="delete-project"]');
      if (deleteBtn) {
        const idx = deleteBtn.getAttribute('data-index');
        appState.projects.splice(idx, 1);
        renderProjectsList();
        saveStateAndRender();
      }
    });
  }

  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', () => {
      if (!appState.projects) appState.projects = [];
      appState.projects.push({
        id: Date.now(),
        title: "New Featured Project",
        desc: "Detailed description of your project goals, features, and tech stack.",
        tags: "React, Node.js, Express",
        image: "assets/images/project1.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com"
      });
      renderProjectsList();
      saveStateAndRender();
    });
  }


  /* ----------------------------------------------------------
     5.5. DYNAMIC ACHIEVEMENTS & MEDIA LIST CONTROLLER
     ---------------------------------------------------------- */
  function renderAchievementsList() {
    if (!achievementsListContainer) return;
    achievementsListContainer.innerHTML = '';

    if (!appState.achievements || appState.achievements.length === 0) {
      achievementsListContainer.innerHTML = '<p class="small text-muted text-center py-2 mb-0">No certificates or media added yet. Click "Add Certificate / Media" above.</p>';
      return;
    }

    appState.achievements.forEach((ach, index) => {
      const card = document.createElement('div');
      card.className = 'dynamic-item-card';
      card.innerHTML = `
        <button type="button" class="item-delete-btn" data-action="delete-achievement" data-index="${index}" title="Remove Achievement">
          <i class="bi bi-trash"></i>
        </button>
        <div class="mb-2">
          <label class="form-label-sm">Title / Certificate Name</label>
          <input type="text" class="form-control builder-form-control ach-title-input" data-index="${index}" value="${escapeHTML(ach.title)}">
        </div>
        <div class="row g-2 mb-2">
          <div class="col-7">
            <label class="form-label-sm">Issuer / Organization</label>
            <input type="text" class="form-control builder-form-control ach-issuer-input" data-index="${index}" value="${escapeHTML(ach.issuer)}">
          </div>
          <div class="col-5">
            <label class="form-label-sm">Media Type</label>
            <select class="form-select builder-form-control ach-type-input" data-index="${index}">
              <option value="image" ${ach.mediaType === 'image' ? 'selected' : ''}>Certificate / Photo</option>
              <option value="video" ${ach.mediaType === 'video' ? 'selected' : ''}>Demo Video</option>
            </select>
          </div>
        </div>
        <div class="mb-2">
          <label class="form-label-sm">Media File Upload or URL</label>
          <input type="text" class="form-control builder-form-control mb-1 ach-url-input" data-index="${index}" value="${escapeHTML(ach.mediaUrl)}" placeholder="assets/images/cert.png or URL">
          <input type="file" class="form-control builder-form-control ach-file-input" data-index="${index}" accept="image/*,video/*">
        </div>
        <div>
          <label class="form-label-sm">Verification / Credential Link (Optional)</label>
          <input type="url" class="form-control builder-form-control ach-link-input" data-index="${index}" value="${escapeHTML(ach.credentialUrl)}" placeholder="https://credential-link.com">
        </div>
      `;
      achievementsListContainer.appendChild(card);
    });
  }

  if (achievementsListContainer) {
    achievementsListContainer.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      if (idx !== null && appState.achievements[idx]) {
        if (e.target.classList.contains('ach-title-input')) {
          appState.achievements[idx].title = e.target.value;
        } else if (e.target.classList.contains('ach-issuer-input')) {
          appState.achievements[idx].issuer = e.target.value;
        } else if (e.target.classList.contains('ach-type-input')) {
          appState.achievements[idx].mediaType = e.target.value;
        } else if (e.target.classList.contains('ach-url-input')) {
          appState.achievements[idx].mediaUrl = e.target.value;
        } else if (e.target.classList.contains('ach-link-input')) {
          appState.achievements[idx].credentialUrl = e.target.value;
        }
        saveStateAndRender();
      }
    });

    achievementsListContainer.addEventListener('change', (e) => {
      if (e.target.classList.contains('ach-file-input')) {
        const idx = e.target.getAttribute('data-index');
        const file = e.target.files[0];
        if (file && idx !== null && appState.achievements[idx]) {
          const reader = new FileReader();
          reader.onload = (event) => {
            appState.achievements[idx].mediaUrl = event.target.result;
            if (file.type.startsWith('video/')) {
              appState.achievements[idx].mediaType = 'video';
            } else if (file.type.startsWith('image/')) {
              appState.achievements[idx].mediaType = 'image';
            }
            renderAchievementsList();
            saveStateAndRender();
          };
          reader.readAsDataURL(file);
        }
      }
    });

    achievementsListContainer.addEventListener('click', (e) => {
      const deleteBtn = e.target.closest('[data-action="delete-achievement"]');
      if (deleteBtn) {
        const idx = deleteBtn.getAttribute('data-index');
        appState.achievements.splice(idx, 1);
        renderAchievementsList();
        saveStateAndRender();
      }
    });
  }

  if (addAchievementBtn) {
    addAchievementBtn.addEventListener('click', () => {
      if (!appState.achievements) appState.achievements = [];
      appState.achievements.push({
        id: Date.now(),
        title: "New Achievement / Certificate",
        issuer: "Issuing Authority / Self-Project",
        mediaType: "image",
        mediaUrl: "assets/images/project1.png",
        credentialUrl: ""
      });
      renderAchievementsList();
      saveStateAndRender();
    });
  }


  /* ----------------------------------------------------------
     6. FORM SUBMIT HANDLER ("BUILD & PREVIEW PORTFOLIO")
     ---------------------------------------------------------- */
  if (portfolioForm) {
    portfolioForm.addEventListener('submit', (e) => {
      e.preventDefault();
      syncStateFromInputs();

      if (!appState.profile.name || !appState.profile.name.trim()) {
        showToast('Required Field', 'Please enter your Full Name before generating.', 'danger');
        if (inputName) inputName.focus();
        return;
      }

      saveStateAndRender();

      // Switch workspace view mode to Generated Preview
      if (appWorkspace) appWorkspace.className = 'app-workspace mode-preview';
      document.querySelectorAll('.view-mode-btn').forEach(b => b.classList.remove('active'));
      const btnPreview = document.getElementById('btnModePreview');
      if (btnPreview) btnPreview.classList.add('active');

      if (viewportWrapper) viewportWrapper.scrollTop = 0;

      showToast('Portfolio Built!', `Congratulations! ${appState.profile.name}'s portfolio is ready! Click "Download My Portfolio" to get your HTML file.`, 'success');
    });
  }


  /* ----------------------------------------------------------
     7. REAL-TIME PREVIEW RENDER ENGINE
     ---------------------------------------------------------- */
  function applyBgColor(color) {
    const bg = color || '#0b0f19';
    document.documentElement.style.setProperty('--bg-dark', bg);

    ['customBgColorInput', 'formBgColorPicker'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value !== bg) el.value = bg;
    });

    document.querySelectorAll('.bg-swatch-btn').forEach(btn => {
      const btnBg = btn.getAttribute('data-bg');
      if (btnBg && btnBg.toLowerCase() === bg.toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const hex = bg.replace('#', '');
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

      if (luminance > 0.6) {
        document.documentElement.style.setProperty('--text-main', '#0f172a');
        document.documentElement.style.setProperty('--text-muted', '#475569');
        document.documentElement.style.setProperty('--bg-surface', 'rgba(0, 0, 0, 0.05)');
        document.documentElement.style.setProperty('--bg-surface-hover', 'rgba(0, 0, 0, 0.08)');
        document.documentElement.style.setProperty('--border-color', 'rgba(15, 23, 42, 0.12)');
      } else {
        document.documentElement.style.setProperty('--text-main', '#f9fafb');
        document.documentElement.style.setProperty('--text-muted', '#9ca3af');
        document.documentElement.style.setProperty('--bg-surface', 'rgba(255, 255, 255, 0.06)');
        document.documentElement.style.setProperty('--bg-surface-hover', 'rgba(255, 255, 255, 0.12)');
        document.documentElement.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.12)');
      }
    }
  }

  function renderPreview() {
    if (!previewContainer) return;

    const p = appState.profile;
    const c = appState.contact;
    const t = appState.theme;

    // Apply CSS Custom Properties
    document.documentElement.style.setProperty('--user-accent-blue', t.primaryColor || '#3B82F6');
    document.documentElement.style.setProperty('--user-accent-cyan', t.secondaryColor || '#06B6D4');
    document.documentElement.style.setProperty('--font-body', t.font || "'Inter', sans-serif");
    applyBgColor(t.bgColor || '#0b0f19');

    // Grouped Skills HTML
    const skillCategories = [
      { key: 'frontend', name: 'Frontend Engineering', icon: 'bi-window-sidebar' },
      { key: 'backend', name: 'Backend & API Architecture', icon: 'bi-server' },
      { key: 'languages', name: 'Programming Languages', icon: 'bi-terminal' },
      { key: 'databases', name: 'Databases & Storage', icon: 'bi-database' },
      { key: 'tools', name: 'Developer Tools & DevOps', icon: 'bi-tools' }
    ];

    const allSkills = appState.skills || [];
    let skillsHTML = '';

    if (allSkills.length === 0) {
      skillsHTML = '<p class="text-center text-muted">No skills added yet.</p>';
    } else {
      skillCategories.forEach(cat => {
        const catSkills = allSkills.filter(s => (s.category || 'frontend').toLowerCase() === cat.key);
        if (catSkills.length > 0) {
          const cardsHTML = catSkills.map(s => {
            const catClass = `cat-${(s.category || 'frontend').toLowerCase()}`;
            return `
              <div class="col-6 col-md-4 col-lg-3 mb-3 skill-item">
                <div class="skill-card">
                  <div class="skill-icon-wrapper">
                    <i class="bi ${s.icon || 'bi-code-slash'}"></i>
                  </div>
                  <h3 class="skill-name">${escapeHTML(s.name)}</h3>
                  <span class="skill-badge ${catClass} text-capitalize">${escapeHTML(s.category || 'Skill')}</span>
                </div>
              </div>
            `;
          }).join('');

          skillsHTML += `
            <div class="mb-4">
              <div class="skill-group-heading">
                <i class="bi ${cat.icon} text-info"></i>
                <span>${cat.name}</span>
              </div>
              <div class="row g-3">
                ${cardsHTML}
              </div>
            </div>
          `;
        }
      });

      const categorizedKeys = skillCategories.map(c => c.key);
      const uncategorized = allSkills.filter(s => !categorizedKeys.includes((s.category || '').toLowerCase()));
      if (uncategorized.length > 0) {
        const otherCardsHTML = uncategorized.map(s => `
          <div class="col-6 col-md-4 col-lg-3 mb-3 skill-item">
            <div class="skill-card">
              <div class="skill-icon-wrapper"><i class="bi ${s.icon || 'bi-code-slash'}"></i></div>
              <h3 class="skill-name">${escapeHTML(s.name)}</h3>
              <span class="skill-badge cat-frontend text-capitalize">${escapeHTML(s.category || 'Skill')}</span>
            </div>
          </div>
        `).join('');
        skillsHTML += `
          <div class="mb-4">
            <div class="skill-group-heading"><i class="bi bi-cpu text-info"></i><span>Other Technologies</span></div>
            <div class="row g-3">${otherCardsHTML}</div>
          </div>
        `;
      }
    }

    // Projects HTML
    let projectsHTML = (appState.projects || []).map(pj => {
      const tagsArray = (pj.tags || '').split(',').map(t => t.trim()).filter(Boolean);
      const tagsHTML = tagsArray.map(tg => `<span class="tag-badge">${escapeHTML(tg)}</span>`).join('');
      return `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="project-card">
            <div class="project-img-container">
              <img src="${escapeHTML(pj.image || 'assets/images/project1.png')}" alt="${escapeHTML(pj.title)}" class="project-img" loading="lazy">
            </div>
            <div class="project-card-body">
              <h3 class="project-title">${escapeHTML(pj.title)}</h3>
              <p class="project-desc">${escapeHTML(pj.desc)}</p>
              <div class="project-tags">${tagsHTML}</div>
              <div class="project-links">
                ${pj.demoUrl ? `<a href="${escapeHTML(pj.demoUrl)}" target="_blank" class="project-link-btn"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>` : ''}
                ${pj.githubUrl ? `<a href="${escapeHTML(pj.githubUrl)}" target="_blank" class="project-link-btn ms-auto"><i class="bi bi-github"></i> GitHub</a>` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Achievements HTML
    let achievementsHTML = (appState.achievements || []).map(ach => {
      const isVideo = ach.mediaType === 'video';
      const mediaMarkup = isVideo
        ? `<video src="${escapeHTML(ach.mediaUrl)}" controls class="achievement-video"></video>`
        : `<img src="${escapeHTML(ach.mediaUrl || 'assets/images/project1.png')}" alt="${escapeHTML(ach.title)}" class="achievement-img" loading="lazy">`;
      const badgeIcon = isVideo ? 'bi-camera-video-fill' : 'bi-patch-check-fill';
      const badgeLabel = isVideo ? 'Demo Video' : 'Certificate / Award';
      
      return `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="achievement-card">
            <div class="achievement-media-container">
              ${mediaMarkup}
            </div>
            <div class="achievement-card-body">
              <div class="achievement-type-badge mb-2"><i class="bi ${badgeIcon} me-1"></i>${badgeLabel}</div>
              <h3 class="achievement-title">${escapeHTML(ach.title)}</h3>
              <p class="achievement-issuer">${escapeHTML(ach.issuer)}</p>
              ${ach.credentialUrl ? `<a href="${escapeHTML(ach.credentialUrl)}" target="_blank" class="btn btn-sm btn-outline-custom mt-auto text-decoration-none" style="width:fit-content;"><i class="bi bi-box-arrow-up-right me-1"></i>View Credential</a>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Render Generated Site Markup
    const previewHTML = `
      <div class="gen-portfolio" data-theme="${t.defaultMode}">
        <!-- Generated Header Navbar -->
        <nav class="navbar navbar-expand-lg fixed-top navbar-custom position-sticky" id="genNav">
          <div class="container">
            <a class="navbar-brand gen-scroll-link" href="#home">
              <span>&lt;</span>${escapeHTML((p.name || 'Dev').replace(/\s+/g, ''))} <span>/&gt;</span>
            </a>
            <div class="navbar-nav ms-auto d-flex flex-row gap-3">
              <a class="nav-link gen-scroll-link active" href="#home">Home</a>
              <a class="nav-link gen-scroll-link" href="#skills">Skills</a>
              <a class="nav-link gen-scroll-link" href="#projects">Projects</a>
              <a class="nav-link gen-scroll-link" href="#achievements">Achievements</a>
              <a class="nav-link gen-scroll-link" href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-section" id="home">
          <div class="container">
            <div class="row align-items-center gy-4">
              <div class="col-lg-7 text-center text-lg-start">
                <div class="hero-role-badge mb-3">
                  <i class="bi bi-lightning-charge-fill text-gradient"></i>
                  <span>${escapeHTML(c.availability || 'Available for New Opportunities')}</span>
                </div>
                <h1 class="hero-title mb-3">
                  Hi, I'm <span class="text-gradient">${escapeHTML(p.name || 'Your Name')}</span>
                </h1>
                <h2 class="h4 mb-3 text-info fw-semibold">
                  ${escapeHTML(p.title || 'Full Stack Developer')}
                </h2>
                <p class="hero-bio">${escapeHTML(p.bio)}</p>
                <div class="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                  <a href="${escapeHTML(p.ctaLink || '#projects')}" class="btn btn-primary-gradient gen-scroll-link">${escapeHTML(p.ctaText || 'View Projects')}</a>
                  <a href="#contact" class="btn btn-outline-custom gen-scroll-link">Contact Me</a>
                </div>
                <div class="social-links-row">
                  ${c.github ? `<a href="${escapeHTML(c.github)}" target="_blank" class="social-icon-btn" aria-label="GitHub"><i class="bi bi-github"></i></a>` : ''}
                  ${c.linkedin ? `<a href="${escapeHTML(c.linkedin)}" target="_blank" class="social-icon-btn" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>` : ''}
                  ${c.instagram ? `<a href="${escapeHTML(c.instagram)}" target="_blank" class="social-icon-btn" aria-label="Instagram"><i class="bi bi-instagram"></i></a>` : ''}
                  ${c.twitter ? `<a href="${escapeHTML(c.twitter)}" target="_blank" class="social-icon-btn" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>` : ''}
                </div>
              </div>
              <div class="col-lg-5 text-center position-relative">
                <div class="avatar-wrapper">
                  <div class="avatar-ring">
                    <img src="${escapeHTML(p.photoUrl || 'assets/images/profile.png')}" alt="Profile Avatar" class="avatar-img">
                  </div>
                  <div class="hero-stat-badge">
                    <i class="bi bi-award-fill text-warning"></i>
                    <span><strong>20+</strong> Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section class="section-padding bg-secondary-theme" id="skills">
          <div class="container">
            <div class="section-title text-center">
              <h2>Technical Skills</h2>
              <p class="section-subtitle">Technologies &amp; frameworks I use to bring digital products to life</p>
              <div class="title-underline"></div>
            </div>
            <div class="mt-4">
              ${skillsHTML}
            </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section class="section-padding" id="projects">
          <div class="container">
            <div class="section-title text-center">
              <h2>Featured Projects</h2>
              <div class="title-underline"></div>
            </div>
            <div class="row g-3 mt-2">
              ${projectsHTML || '<p class="text-center text-muted">No projects added yet.</p>'}
            </div>
          </div>
        </section>

        <!-- Achievements & Media Gallery Section -->
        <section class="section-padding bg-secondary-theme" id="achievements">
          <div class="container">
            <div class="section-title text-center">
              <h2>Certificates &amp; Achievements</h2>
              <div class="title-underline"></div>
            </div>
            <div class="row g-3 mt-2">
              ${achievementsHTML || '<p class="text-center text-muted">No certificates or media added yet.</p>'}
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="section-padding" id="contact">
          <div class="container">
            <div class="section-title text-center">
              <h2>Get In Touch</h2>
              <div class="title-underline"></div>
            </div>
            <div class="row g-4 mt-2">
              <div class="col-lg-5">
                <div class="contact-info-card">
                  <h3 class="h4 mb-3">Contact Details</h3>
                  ${c.email ? `<div class="contact-item"><div class="contact-icon"><i class="bi bi-envelope-at-fill"></i></div><div class="contact-detail"><h5>Email</h5><a href="mailto:${escapeHTML(c.email)}">${escapeHTML(c.email)}</a></div></div>` : ''}
                  ${c.phone ? `<div class="contact-item"><div class="contact-icon"><i class="bi bi-telephone-fill"></i></div><div class="contact-detail"><h5>Phone</h5><a href="tel:${escapeHTML(c.phone)}">${escapeHTML(c.phone)}</a></div></div>` : ''}
                  ${c.location ? `<div class="contact-item"><div class="contact-icon"><i class="bi bi-geo-alt-fill"></i></div><div class="contact-detail"><h5>Location</h5><p>${escapeHTML(c.location)}</p></div></div>` : ''}
                </div>
              </div>
              <div class="col-lg-7">
                <div class="contact-form-card">
                  <h3 class="h4 mb-3">Send a Message</h3>
                  <form onsubmit="alert('Thank you! Your message has been sent successfully.'); return false;">
                    <div class="row g-3">
                      <div class="col-md-6"><input type="text" class="form-control form-control-custom" placeholder="Full Name" required></div>
                      <div class="col-md-6"><input type="email" class="form-control form-control-custom" placeholder="Email Address" required></div>
                      <div class="col-12"><input type="text" class="form-control form-control-custom" placeholder="Subject" required></div>
                      <div class="col-12"><textarea class="form-control form-control-custom" rows="4" placeholder="Your Message..." required></textarea></div>
                      <div class="col-12"><button type="submit" class="btn btn-primary-gradient w-100">Send Message</button></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="footer-custom">
          <div class="container text-center">
            <p class="mb-0 small text-muted">&copy; 2026 ${escapeHTML(p.name || 'User')}. Built with PortfolioCraft.</p>
          </div>
        </footer>
      </div>
    `;

    previewContainer.innerHTML = previewHTML;
    bindPreviewScrollListeners();
  }

  function bindPreviewScrollListeners() {
    if (!previewContainer) return;
    previewContainer.querySelectorAll('.gen-scroll-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElem = previewContainer.querySelector(href);
          if (targetElem && viewportWrapper) {
            const topOffset = targetElem.offsetTop - 60;
            viewportWrapper.scrollTo({
              top: topOffset,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Scroll Triggered Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    previewContainer.querySelectorAll('section, .skill-card, .project-card, .achievement-card, .contact-info-card, .contact-form-card').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, match => {
      const escape = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
      return escape[match];
    });
  }


  /* ----------------------------------------------------------
     8. VIEW MODES & TOOLBAR CONTROLS
     ---------------------------------------------------------- */
  document.querySelectorAll('.view-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      if (appWorkspace) appWorkspace.className = `app-workspace mode-${mode}`;
    });
  });

  document.querySelectorAll('.viewport-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.viewport-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vp = btn.getAttribute('data-viewport');
      if (viewportWrapper) viewportWrapper.className = `preview-viewport-wrapper viewport-${vp}`;
    });
  });

  const expandFullscreenBtn = document.getElementById('expandFullscreenBtn');
  if (expandFullscreenBtn) {
    expandFullscreenBtn.addEventListener('click', () => {
      if (appWorkspace) appWorkspace.className = 'app-workspace mode-preview';
      document.querySelectorAll('.view-mode-btn').forEach(b => b.classList.remove('active'));
      const btnPreview = document.getElementById('btnModePreview');
      if (btnPreview) btnPreview.classList.add('active');
    });
  }

  const appThemeToggle = document.getElementById('appThemeToggle');
  const appThemeIcon = document.getElementById('appThemeIcon');
  if (appThemeToggle) {
    appThemeToggle.addEventListener('click', () => {
      const curTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = curTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      if (appThemeIcon) appThemeIcon.className = newTheme === 'light' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    });
  }

  // Load Sample Data
  const loadSampleBtn = document.getElementById('loadSampleBtn');
  if (loadSampleBtn) {
    loadSampleBtn.addEventListener('click', () => {
      if (confirm('Load sample profile data into builder?')) {
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        populateFormFromState();
        renderSkillsList();
        renderProjectsList();
        renderAchievementsList();
        saveStateAndRender();
        showToast('Sample Data Loaded', 'Sample profile data loaded successfully!', 'success');
      }
    });
  }

  // Reset Button
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset profile builder? All fields will be cleared.')) {
        appState = {
          profile: { name: "", title: "", bio: "", photoUrl: "", ctaText: "View Projects", ctaLink: "#projects" },
          skills: [],
          projects: [],
          achievements: [],
          contact: { email: "", phone: "", location: "", availability: "", github: "", linkedin: "", instagram: "", twitter: "" },
          theme: { primaryColor: "#3B82F6", secondaryColor: "#06B6D4", bgColor: "#0b0f19", font: "'Poppins', 'Inter', sans-serif", defaultMode: "dark" }
        };
        populateFormFromState();
        renderSkillsList();
        renderProjectsList();
        renderAchievementsList();
        saveStateAndRender();
        showToast('Reset', 'Form cleared successfully.', 'info');
      }
    });
  }


  /* ----------------------------------------------------------
     9. STANDALONE USER PORTFOLIO HTML EXPORTER
     ---------------------------------------------------------- */
  function generateStandaloneUserHTML() {
    const p = appState.profile;
    const t = appState.theme;
    const bgCol = t.bgColor || '#0b0f19';

    return `<!DOCTYPE html>
<html lang="en" data-theme="${t.defaultMode || 'dark'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHTML(p.name || 'User')} | Portfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: ${bgCol};
      --user-accent-blue: ${t.primaryColor || '#3B82F6'};
      --user-accent-cyan: ${t.secondaryColor || '#06B6D4'};
      --user-accent-gradient: linear-gradient(135deg, ${t.primaryColor || '#3B82F6'} 0%, ${t.secondaryColor || '#06B6D4'} 100%);
      --font-body: ${t.font || "'Inter', sans-serif"};
      --font-heading: 'Poppins', sans-serif;
    }
    body { font-family: var(--font-body); background-color: var(--bg-dark, ${bgCol}); color: #f9fafb; margin: 0; padding: 0; line-height: 1.6; }
    h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
    .navbar-custom { background: #111827; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 0.85rem 0; position: sticky; top: 0; z-index: 100; }
    .navbar-brand { color: #ffffff !important; font-weight: 800; text-decoration: none; font-size: 1.35rem; }
    .nav-link { color: #f9fafb !important; font-weight: 600; padding: 0.5rem 1rem !important; text-decoration: none; border-radius: 50rem; transition: all 0.2s ease; }
    .nav-link:hover, .nav-link.active { color: var(--user-accent-cyan) !important; background: rgba(6, 182, 212, 0.18) !important; }
    .text-gradient { background: var(--user-accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .btn-primary-gradient { background: var(--user-accent-gradient); color: #fff; border: none; border-radius: 50rem; padding: 0.75rem 1.75rem; text-decoration: none; display: inline-block; font-weight: 600; }
    .btn-outline-custom { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.2); border-radius: 50rem; padding: 0.75rem 1.75rem; text-decoration: none; display: inline-block; font-weight: 600; }
    .section-title h2 { color: #ffffff !important; font-weight: 700; margin-bottom: 0.5rem; }
    .skill-card, .project-card, .achievement-card, .contact-info-card, .contact-form-card { background: #111827; border-radius: 12px; padding: 1.5rem; border: 1px solid rgba(255,255,255,0.1); }
    .achievement-card { padding: 0; overflow: hidden; }
    .achievement-media-container { width: 100%; height: 190px; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .achievement-img, .achievement-video { width: 100%; height: 100%; object-fit: cover; }
    .achievement-card-body { padding: 1.25rem; }
    .achievement-type-badge { display: inline-flex; background: rgba(6, 182, 212, 0.12); color: var(--user-accent-cyan); padding: 0.25rem 0.65rem; border-radius: 0.35rem; font-size: 0.8rem; font-weight: 600; }
    .achievement-title { font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-top: 0.4rem; margin-bottom: 0.25rem; }
    .achievement-issuer { font-size: 0.85rem; color: #9ca3af; margin-bottom: 0.75rem; }
    .skill-badge { border-radius: 999px; padding: 0.25rem 0.7rem; font-size: 0.75rem; font-weight: 600; display: inline-block; }
    .skill-badge.cat-frontend { background: rgba(6, 182, 212, 0.15); color: #06b6d4; border: 1px solid rgba(6, 182, 212, 0.25); }
    .skill-badge.cat-backend { background: rgba(139, 92, 246, 0.15); color: #a78bfa; border: 1px solid rgba(139, 92, 246, 0.25); }
    .skill-badge.cat-languages { background: rgba(20, 184, 166, 0.15); color: #14b8a6; border: 1px solid rgba(20, 184, 166, 0.25); }
    .skill-badge.cat-tools { background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.25); }
    .skill-badge.cat-databases { background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.25); }
    .tag-badge { background: rgba(6, 182, 212, 0.12); color: var(--user-accent-cyan); border-radius: 0.35rem; padding: 0.25rem 0.6rem; font-size: 0.8rem; }
    .section-padding { padding: 6.5rem 0; }
    .bg-secondary-theme { background: #111827; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); }
    .social-icon-btn { width: 42px; height: 42px; border-radius: 50%; background: #111827; border: 1px solid rgba(255,255,255,0.1); color: #fff; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; margin-right: 0.5rem; transition: all 0.2s ease; }
    .social-icon-btn:hover { background: linear-gradient(135deg, ${t.primaryColor || '#3B82F6'} 0%, ${t.secondaryColor || '#06B6D4'} 100%); transform: translateY(-2px); }
    .reveal-on-scroll { opacity: 0; transform: translateY(24px); transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
    .reveal-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body>
  ${previewContainer ? previewContainer.innerHTML : ''}
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('section, .skill-card, .project-card, .achievement-card, .contact-info-card, .contact-form-card').forEach(function(el) {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
      });
    });
  </script>
</body>
</html>`;
  }

  // Trigger Download Function
  function triggerStandaloneDownload() {
    const code = generateStandaloneUserHTML();
    const fileName = `${(appState.profile.name || 'user').toLowerCase().replace(/\s+/g, '_')}_portfolio.html`;
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Downloaded!', `Downloaded ${fileName} containing only your portfolio!`, 'success');
  }

  const downloadPortfolioBtn = document.getElementById('downloadPortfolioBtn');
  if (downloadPortfolioBtn) {
    downloadPortfolioBtn.addEventListener('click', triggerStandaloneDownload);
  }

  function showToast(title, message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toastId = 'toast-' + Date.now();
    const bgColor = type === 'success' ? 'bg-success' : (type === 'danger' ? 'bg-danger' : 'bg-info');
    const html = `
      <div id="${toastId}" class="toast align-items-center text-white ${bgColor} border-0 shadow-lg" role="alert">
        <div class="d-flex">
          <div class="toast-body"><strong>${title}</strong> — ${message}</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
    const elem = document.getElementById(toastId);
    if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
      const toast = new bootstrap.Toast(elem, { delay: 3500 });
      toast.show();
    }
    elem.addEventListener('hidden.bs.toast', () => elem.remove());
  }

});
