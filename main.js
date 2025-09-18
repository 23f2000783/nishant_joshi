
document.addEventListener('DOMContentLoaded', function() {
    const educationData = [
        { id: 'svnit', title: 'Integrated M.Sc. Physics', institution: 'SVNIT, Surat', dates: '2021 - 2026', icon: 'fa-atom', gpa: 'CGPA: 7.94', courses: [
            { category: 'Core Physics', subjects: ['Solid State Physics', 'Quantum Physics', 'Condensed Matter Physics', 'Nuclear Physics', 'Electromagnetism', 'Classical Mechanics', 'Atomic and Molecular Physics', 'Astrophysics'] },
            { category: 'Applied & Computational', subjects: ['Density Functional Theory', 'Material Science', 'Microprocessor', 'Engineering Mathematics'] }
        ]},
        { id: 'iitm', title: 'BS in Data Science', institution: 'IIT, Madras', dates: '2022 - Present', icon: 'fa-chart-line', gpa: 'CGPA: 7.9', courses: [
            { category: 'Foundation Level', subjects: ['Python', 'Statistics', 'Mathematics'] },
            { category: 'Diploma Level (Programming)', subjects: ['PDSA', 'Java', 'System Commands', 'Modern Application Development'] },
            { category: 'Diploma Level (Data Science)', subjects: ['Machine Learning', 'Business Analytics', 'Business Database Management', 'Tools in Data Science'] }
        ]},
        { id: 'cbse', title: 'Senior Secondary', institution: 'CBSE Board', dates: '2020', icon: 'fa-school', gpa: 'Percentage: 96%', courses: null }
    ];
    const projectsData = [
        { 
            id: 'heusler', 
            icon: 'fas fa-atom', 
            title: 'Predictive Modeling for Heusler Alloys', 
            summary: 'Established a new benchmark for predicting Heusler alloy properties using Gaussian Process Regression.', 
            categories: ['Machine Learning', 'Materials Science'],
            techStack: ['Python', 'ML Models', 'Data Analysis'] 
        },
        { 
            id: 'cmc', 
            icon: 'fas fa-thermometer-half', 
            title: 'Thermal Conductivity in CMCs', 
            summary: 'Built a model that predicts thermal conductivity of CMCs with 88.7% R² accuracy, identifying key features.', 
            categories: ['Machine Learning', 'Materials Science'],
            techStack: ['Python', 'ML Models', 'Data Analysis'] 
        },
        { 
            id: 'cansat', 
            icon: 'fas fa-satellite', 
            title: 'IN-SPACE CanSat Competition', 
            summary: 'Led mechanical design, engineering grid fins that cut descent velocity by 15% and secured selection for final launch.', 
            categories: ['Aerospace Design'],
            techStack: ['CAD', 'Simulation'] 
        },
        { 
            id: 'sae_aeromodelling', 
            icon: 'fas fa-plane', 
            title: 'SAE Aeromodelling Competition', 
            summary: 'Achieved 5th place overall by designing a novel multi-element wing for superior lift at low speeds.', 
            categories: ['Aerospace Design'],
            techStack: ['CAD', 'Simulation'] 
        },
        { 
            id: 'parking_app', 
            icon: 'fas fa-parking', 
            title: 'Vehicle Parking Management System', 
            summary: 'Built a full-stack Flask app with a real-time admin dashboard and data visualization.', 
            categories: ['Web Dev'],
            techStack: ['Python', 'Web Dev'] 
        },
        { 
            id: 'business_analysis', 
            icon: 'fas fa-briefcase', 
            title: 'School Business Analysis', 
            summary: 'Led data analysis improving revenue forecast accuracy by 13% and identifying key drivers for stability.', 
            categories: ['Data Analysis', 'Business Development'],
            techStack: ['Python', 'Data Analysis'] 
        }
    ];
    const experienceData = [
        { title: 'Machine Learning for Materials Science', role: 'Dissertation Research', date: 'Sept 2023 - Present', description: 'Led independent research predicting material properties. Developed a GPR model for Half-Heusler alloys and an ML model to predict 2-theta values from XRD data, improving peak detection by 10%.' },
        { title: 'Senior Under Officer, NCC', role: 'Leadership Role', date: 'Oct 2023 - Mar 2024', description: 'Commanded the SVNIT Surat NCC unit, demonstrating strategic planning and resource management. Trained and mentored new recruits, fostering an environment of teamwork and discipline.' },
        { title: 'IN-SPACE CanSat India Competition', role: 'Technical Lead', date: 'Sept 2022 - Mar 2024', description: 'Led the design and analysis for a satellite, innovating with 3D-printed grid fins to reduce descent velocity by 15% and enhance stability, securing selection for the final launch phase by ISRO.' },
        { title: 'SAE DDC Aeromodelling Competition', role: 'Aerodynamics Designer', date: 'Dec 2022 - June 2023', description: 'Achieved 3rd in the technical round and 5th overall (of 50 teams) by designing a novel multi-element wing for superior aerodynamic performance at low speeds.' },
    ];
    
    const technicalSkills = [
        { category: 'Programming & Core', skills: [{ name: 'Python', icon: 'fab fa-python text-blue-400' }, { name: 'SQL', icon: 'fas fa-database text-orange-400' }, { name: 'Git', icon: 'fab fa-git-alt text-red-400' }] },
        { category: 'Data Science & ML', skills: [{ name: 'Scikit-learn', icon: 'fas fa-brain text-purple-400' }, { name: 'Pandas & NumPy', icon: 'fas fa-table text-blue-400' }, { name: 'Matplotlib', icon: 'fas fa-chart-bar text-green-400' }] },
        { category: 'Engineering', skills: [{ name: 'SolidWorks', icon: 'fas fa-cube text-cyan-400' }, { name: 'Ansys (CFD)', icon: 'fas fa-wind text-blue-400' }, { name: 'Materials Science', icon: 'fas fa-atom text-green-400' }] },
        { category: 'Web Development', skills: [{ name: 'Flask', icon: 'fas fa-server text-gray-400' }, { name: 'HTML & CSS', icon: 'fab fa-css3-alt text-blue-500' }, { name: 'JavaScript', icon: 'fab fa-js text-yellow-400' }] }
    ];
    
    const competencyData = [
        { label: 'Technical Stack', data: { labels: ['Machine Learning', 'Data Analysis', 'Materials Science', 'Aerospace Design', 'Problem Solving', 'Web Dev'], values: [4.5, 4.2, 4.0, 3.8, 4.8, 3.5] } },
        { label: 'Soft Skills', data: { labels: ['Leadership', 'Communication', 'Teamwork', 'Strategic Planning', 'Adaptability', 'Mentorship'], values: [4.8, 4.5, 4.6, 4.4, 4.5, 4.5] } }
    ];
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    const educationGrid = document.getElementById('education-grid');
    educationData.forEach((edu, index) => {
        const card = document.createElement('article');
        card.className = 'clickable-card education-card glass p-6 flex flex-col fade-in';
        card.style.transitionDelay = `${index * 100}ms`;
        card.dataset.educationId = edu.id;
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
            <div class="icon"><i class="fas ${edu.icon}"></i></div>
            <h3 class="text-xl font-semibold mb-2">${edu.title}</h3>
            <p class="text-gray-400">${edu.institution}</p>
            <p class="text-sm text-gray-500 mb-4">${edu.dates}</p>
            <p class="font-mono text-primary mb-4">${edu.gpa}</p>
            <div class="text-primary hover:text-blue-300 transition font-medium mt-auto">
                ${edu.courses ? 'View Coursework <i class="fas fa-arrow-right ml-1"></i>' : ''}
            </div>
        `;
        educationGrid.appendChild(card);
    });
    const timelineItemsContainer = document.getElementById('timeline-items');
    experienceData.forEach(exp => {
        const item = document.createElement('article');
        item.className = 'timeline-item fade-in';
        item.innerHTML = `
            <div class="glass p-6">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 class="text-xl font-semibold text-primary">${exp.title}</h3>
                    <span class="text-sm text-gray-400 font-mono">${exp.date}</span>
                </div>
                <p class="text-gray-400 mb-2">${exp.role}</p>
                <p class="text-gray-300">${exp.description}</p>
            </div>
        `;
        timelineItemsContainer.appendChild(item);
    });
    const projectGrid = document.getElementById('project-grid');
    const projectFilters = document.getElementById('project-filters');
    const categories = ['All', ...new Set(projectsData.flatMap(p => p.categories))];
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'project-filter-btn px-4 py-2 rounded-lg text-sm font-medium border border-gray-600 hover:bg-primary hover:text-dark-bg focus:outline-none focus:ring-2 focus:ring-primary';
        if (category === 'All') button.classList.add('active');
        button.textContent = category;
        button.dataset.filter = category;
        projectFilters.appendChild(button);
    });
    const renderProjects = (filter = 'All') => {
        projectGrid.innerHTML = '';
        const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.categories.includes(filter));
        
        filteredProjects.forEach((project, index) => {
            const card = document.createElement('article');
            card.className = 'clickable-card project-card glass p-6 flex flex-col fade-in';
            card.style.transitionDelay = `${index * 50}ms`;
            card.dataset.projectId = project.id;
            card.setAttribute('tabindex', '0');
            card.innerHTML = `
                <div class="icon"><i class="${project.icon}"></i></div>
                <h3 class="text-xl font-semibold mb-3">${project.title}</h3>
                <p class="text-gray-400 mb-4 flex-grow">${project.summary}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.categories.map(cat => `<span class="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">${cat}</span>`).join('')}
                </div>
                <div class="text-primary hover:text-blue-300 transition font-medium mt-auto">
                    Learn More <i class="fas fa-arrow-right ml-1"></i>
                </div>
            `;
            projectGrid.appendChild(card);
        });
        document.querySelectorAll('#project-grid .fade-in').forEach(el => new IntersectionObserver(entries => {
            entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
        }, {threshold: 0.1}).observe(el));
        addProjectCardListeners();
    };
    projectFilters.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelectorAll('.project-filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderProjects(e.target.dataset.filter);
        }
    });
    
    const skillsContainer = document.getElementById('skills-list');
    technicalSkills.forEach((skillCat, index) => {
        const div = document.createElement('div');
        div.className = 'fade-in';
        div.style.transitionDelay = `${index * 100}ms`;
        let skillsHTML = '';
        skillCat.skills.forEach(skill => {
            skillsHTML += `
                <div class="flex items-center gap-4 p-3 rounded-lg skill-category">
                    <div class="skill-icon text-4xl w-12 text-center"><i class="${skill.icon}"></i></div>
                    <span class="font-medium">${skill.name}</span>
                </div>`;
        });
        div.innerHTML = `
            <h3 class="text-lg font-semibold mb-4 text-primary">${skillCat.category}</h3>
            <div class="space-y-3">${skillsHTML}</div>`;
        skillsContainer.appendChild(div);
    });
    // Replace the competency carousel creation around line 280
    const competencyCarousel = document.getElementById('competency-carousel');
    competencyData.forEach((comp, index) => {
        const slide = document.createElement('div');
        slide.className = 'competency-slide';
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-label', `${comp.label} chart`);
        slide.innerHTML = `
            <h3 class="text-xl font-bold text-center mb-4">${comp.label}</h3>
                <div class="relative flex-grow w-full">
                    <canvas id="radar-chart-${index}"></canvas>
            </div>
        `;
        competencyCarousel.appendChild(slide);
    });
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    });
    document.querySelectorAll('.nav-link-mobile').forEach(link => link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting));
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    const timelineContainer = document.getElementById('timeline-container');
    const timelineProgress = document.getElementById('timeline-progress');
    const timelinePointer = document.getElementById('timeline-pointer');
    
    window.addEventListener('scroll', () => {
        if (!timelineContainer) return;
        const { top, height } = timelineContainer.getBoundingClientRect();
        const scrollableHeight = height - window.innerHeight;
        let progress = Math.max(0, Math.min(1, -top / scrollableHeight));
        const pointerPosition = progress * (timelineContainer.offsetHeight - 40);
        timelineProgress.style.height = `${pointerPosition}px`;
        timelinePointer.style.top = `${pointerPosition}px`;
    });
    
    const compCarousel = document.getElementById('competency-carousel');
    const compPrevBtn = document.getElementById('competency-prev');
    const compNextBtn = document.getElementById('competency-next');
    let compCurrentIndex = 0;
    const totalSlides = competencyData.length;
    function updateCompetencyCarousel() { compCarousel.style.transform = `translateX(-${compCurrentIndex * 100}%)`; }
    compNextBtn.addEventListener('click', () => { compCurrentIndex = (compCurrentIndex + 1) % totalSlides; updateCompetencyCarousel(); });
    compPrevBtn.addEventListener('click', () => { compCurrentIndex = (compCurrentIndex - 1 + totalSlides) % totalSlides; updateCompetencyCarousel(); });
    
   
    const projectSkillsChart = new Chart(document.getElementById('projectSkillsChart'), {
        type: 'bar',
        data: { 
            labels: ['Python', 'ML Models', 'Data Analysis', 'Simulation', 'CAD', 'Web Dev'], 
            datasets: [{ 
                label: '# of Projects', 
                data: [4, 2, 3, 2, 2, 1], // Data updated to match new techStack counts
                backgroundColor: 'rgba(0, 212, 255, 0.4)', 
                borderColor: 'rgba(0, 212, 255, 1)', 
                borderWidth: 1 
            }] 
        },
        options: { 
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y', 
            scales: { 
                y: { 
                    ticks: { color: 'white', font: { size: window.innerWidth < 768 ? 10 : 12 } }, 
                    grid: { display: false } 
                }, 
                x: { 
                    ticks: { color: 'white', stepSize: 1, font: { size: window.innerWidth < 768 ? 10 : 12 } }, 
                    grid: { color: 'rgba(255, 255, 255, 0.1)' } 
                } 
            }, 
            plugins: { legend: { display: false } },
            
            // --- Interactive onClick Handler ---
            onClick: (event, elements) => {
                if (elements.length === 0) return;
            
                // 1. Get the label of the bar that was clicked
                const clickedElementIndex = elements[0].index;
                const skillLabel = projectSkillsChart.data.labels[clickedElementIndex];
            
                // 2. Filter projectsData to find projects that include this skill
                const relevantProjects = projectsData.filter(project => 
                    project.techStack && project.techStack.includes(skillLabel)
                );
            
                // 3. Build the HTML content for the modal
                let modalContent = `<p class="mb-6 text-gray-400">Projects where I used <strong>${skillLabel}</strong>:</p>`;
                if (relevantProjects.length > 0) {
                    modalContent += '<ul class="space-y-4">';
                    relevantProjects.forEach(p => {
                        modalContent += `
                            <li class="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                                <h4 class="font-semibold text-primary">${p.title}</h4>
                                <p class="text-sm text-gray-300 mt-1">${p.summary}</p>
                            </li>
                        `;
                    });
                    modalContent += '</ul>';
                } else {
                    modalContent += '<p>No specific projects are tagged with this skill yet.</p>';
                }
            
                // 4. Use your existing modal functions to display the content
                modalTitle.textContent = `Projects Using ${skillLabel}`;
                modalBody.innerHTML = modalContent;
                openModal();
            }
        }
    });
    
    competencyData.forEach((comp, index) => {
        new Chart(document.getElementById(`radar-chart-${index}`), {
            type: 'radar',
            data: { 
                labels: comp.data.labels, 
                datasets: [{ 
                    data: comp.data.values, 
                    backgroundColor: 'rgba(0, 212, 255, 0.2)', 
                    borderColor: 'rgba(0, 212, 255, 1)', 
                    pointBackgroundColor: 'rgba(0, 212, 255, 1)' 
                }] 
            },
            options: { 
                responsive: true,
                maintainAspectRatio: false,
                scales: { 
                    r: { 
                        angleLines: { color: 'rgba(255, 255, 255, 0.2)' }, 
                        grid: { color: 'rgba(255, 255, 255, 0.2)' }, 
                        pointLabels: { 
                            color: 'white', 
                            font: { size: window.innerWidth < 768 ? 8 : 10 } 
                        }, 
                        ticks: { display: false, stepSize: 1, max: 5, min: 0 } 
                    } 
                }, 
                plugins: { legend: { display: false } } 
            }
        });
    });
    
    const modal = document.getElementById('universal-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal');
    let lastFocusedElement;
    const openModal = () => {
        lastFocusedElement = document.activeElement;
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        closeModalBtn.focus();
    };
    const closeModal = () => {
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    };
    
    function handleModalClick(id, type) {
        let item;
        if (type === 'project') {
            item = projectsData.find(p => p.id === id);
            if (item) {
                modalTitle.textContent = item.title;
                modalBody.innerHTML = getProjectDetailsHTML(item.id);
                openModal();
            }
        } else if (type === 'education') {
            item = educationData.find(e => e.id === id);
            if (item && item.courses) {
                modalTitle.textContent = "Relevant Coursework";
                modalBody.innerHTML = getEducationDetailsHTML(item);
                openModal();
            }
        }
    }
    function addProjectCardListeners() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => handleModalClick(card.dataset.projectId, 'project'));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleModalClick(card.dataset.projectId, 'project');
                }
            });
        });
    }
    
    function addEducationCardListeners() {
        document.querySelectorAll('.education-card').forEach(card => {
            card.addEventListener('click', () => handleModalClick(card.dataset.educationId, 'education'));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleModalClick(card.dataset.educationId, 'education');
                }
            });
        });
    }
    
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const status = document.createElement('p');
        status.className = 'text-center text-primary mt-4';
        status.textContent = 'Sending...';
        contactForm.appendChild(status);
        const formData = new FormData(contactForm);
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                status.textContent = "Thanks for your message!";
                contactForm.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.textContent = "Oops! There was a problem submitting your form";
                    }
                })
            }
        }).catch(error => {
            status.textContent = "Oops! There was a problem submitting your form";
        }).finally(() => {
            setTimeout(() => {
                status.remove();
            }, 4000);
        });
    });
    renderProjects();
    addEducationCardListeners();
});
// Add before the closing bracket of DOMContentLoaded around line 420
window.addEventListener('resize', () => {
    // Trigger chart resize
    Chart.helpers.each(Chart.instances, (instance) => {
        instance.resize();
    });
});
function getEducationDetailsHTML(education) {
    if (!education.courses) return '<p>No specific coursework to display.</p>';
    let html = `<div class="space-y-6">`;
    education.courses.forEach(category => {
        html += `<div>
                    <h4 class="text-xl font-semibold text-primary mb-3">${category.category}</h4>
                    <div class="flex flex-wrap gap-2">
                        ${category.subjects.map(subject => `<span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">${subject}</span>`).join('')}
                    </div>
                   </div>`;
    });
    html += `</div>`;
    return html;
}
function getProjectDetailsHTML(id) {
    const projectDetails = {
        heusler: `<div class="space-y-6"><div><h4 class="text-xl font-semibold text-primary mb-3">Impact & Overview</h4><p>Developed a machine learning pipeline that accurately predicts the lattice constants of Heusler alloys. This work establishes Gaussian Process Regression (GPR) as a superior model due to its accuracy and crucial ability to quantify prediction uncertainty, accelerating experimental validation cycles.</p></div><div><h4 class="text-xl font-semibold text-primary mb-3">Key Methodologies</h4><ul class="list-disc list-inside space-y-2"><li><strong>Feature Engineering:</strong> Engineered input features from core atomic properties (ionic radii, electronegativity) to provide physically relevant information to the models.</li><li><strong>Comparative Modeling:</strong> Rigorously compared Linear Regression (baseline), Random Forest (non-linear), and GPR (probabilistic). GPR consistently yielded the best performance.</li><li><strong>Uncertainty Quantification:</strong> A key outcome was demonstrating GPR's ability to provide confidence intervals, guiding researchers to focus experimental efforts on regions where the model is less certain, optimizing resource allocation.</li></ul></div><div><h4 class="text-xl font-semibold text-primary mb-3">Tech Stack</h4><div class="flex flex-wrap gap-2"><span class="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Python</span><span class="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">Scikit-learn</span><span class="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm">Pandas</span><span class="px-3 py-1 bg-yellow-900/30 text-yellow-300 rounded-full text-sm">GPR</span></div></div></div>`,
        cmc: `<div class="space-y-6"><div><h4 class="text-xl font-semibold text-primary mb-3">Project Impact</h4><p>Created a validated ML pipeline that predicts the thermal conductivity of Ceramic Matrix Composites (CMCs) with an <strong>R² of 0.887</strong>. This provides a fast, reliable, and cost-effective tool to accelerate the design of next-generation materials for extreme-temperature applications.</p></div><div><h4 class="text-xl font-semibold text-primary mb-3">Analysis & Findings</h4><p class="mb-2">Through Exploratory Data Analysis and Feature Importance analysis using a Random Forest model, we discovered:</p><ul class="list-disc list-inside space-y-2"><li><strong>Density is the most influential predictor</strong> with 51% importance.</li><li><strong>Heat Capacity</strong> follows with 42% importance.</li><li>This insight helps material scientists focus on the most critical design parameters to tune thermal conductivity.</li></ul></div><div><h4 class="text-xl font-semibold text-primary mb-3">Tech Stack</h4><div class="flex flex-wrap gap-2"><span class="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Python</span><span class="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">Random Forest</span><span class="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm">Matminer</span></div></div></div>`,
        cansat: `<div class="space-y-6"><div><h4 class="text-xl font-semibold text-primary mb-3">Competition Achievement</h4><p>As Technical Lead, my design and analysis were instrumental in our team's success in the IN-SPACE CanSat competition. We passed two Critical Design Reviews and were selected by ISRO officials for the final launch phase.</p></div><div><h4 class="text-xl font-semibold text-primary mb-3">Engineering Innovation</h4><ul class="list-disc list-inside space-y-2"><li><strong>Innovative Fin Design:</strong> Designed and 3D modeled custom grid fins in SolidWorks, which offer high drag and control authority in a compact form factor.</li><li><strong>Quantifiable Performance:</strong> The design was proven to <strong>reduce descent velocity by 15%</strong>, ensuring a slower, more stable descent for better data acquisition.</li><li><strong>Technical Leadership:</strong> Successfully presented and defended complex engineering choices to a panel of ISRO experts during rigorous design reviews.</li></ul></div><div><h4 class="text-xl font-semibold text-primary mb-3">Tools Used</h4><div class="flex flex-wrap gap-2"><span class="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm">SolidWorks</span><span class="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm">Ansys (CFD)</span><span class="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Aerodynamic Analysis</span></div></div></div>`,
        sae_aeromodelling: `<div class="space-y-6"><div><h4 class="text-xl font-semibold text-primary mb-3">Competition Impact</h4><p>My innovative aerodynamic design was a key factor in our team achieving <strong>3rd place in the Technical Round</strong> and <strong>5th place overall</strong> out of 50 teams. The design directly addressed the core challenge of generating high lift at low speeds for short takeoffs.</p></div><div><h4 class="text-xl font-semibold text-primary mb-3">Design Solution</h4><ul class="list-disc list-inside space-y-2"><li><strong>Multi-Element Wing:</strong> Designed a wing combining a primary airfoil with secondary high-lift elements, a concept typically seen on commercial aircraft, to maintain lift at speeds where a standard wing would stall.</li><li><strong>Performance Optimization:</strong> Used XFLR5 to model and analyze various airfoil combinations to find the optimal configuration, balancing high lift generation with manageable drag.</li></ul></div><div><h4 class="text-xl font-semibold text-primary mb-3">Tools Used</h4><div class="flex flex-wrap gap-2"><span class="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm">XFLR5</span><span class="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm">SolidWorks</span><span class="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Aircraft Design Principles</span></div></div></div>`,
        parking_app: `<div class="space-y-6"><div><h4 class="text-xl font-semibold text-primary mb-3">Project Impact</h4><p>Designed and built a multi-user, full-stack web application that modernizes parking management. The system provides a centralized platform for administrators to monitor real-time availability and revenue, while offering users a seamless booking experience.</p></div><div><h4 class="text-xl font-semibold text-primary mb-3">Architecture & Features</h4><ul class="list-disc list-inside space-y-2"><li><strong>Modular Backend:</strong> Architected with Flask Blueprints to separate concerns (authentication, admin, user routes), ensuring a clean and maintainable codebase.</li><li><strong>Admin Dashboard:</strong> A comprehensive dashboard with Matplotlib-generated charts (occupancy, revenue) providing actionable business insights.</li><li><strong>Database Integrity:</strong> Used SQLAlchemy ORM with robust logic, such as using ON DELETE SET NULL to preserve reservation history even if a physical spot is deleted.</li></ul></div><div><h4 class="text-xl font-semibold text-primary mb-3">Tech Stack</h4><div class="flex flex-wrap gap-2"><span class="px-3 py-1 bg-gray-600/30 text-gray-300 rounded-full text-sm">Flask</span><span class="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm">SQLAlchemy</span><span class="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">Bootstrap</span><span class="px-3 py-1 bg-yellow-900/30 text-yellow-300 rounded-full text-sm">Matplotlib</span></div></div></div>`,
        business_analysis: `<div class="space-y-6"><div><h4 class="text-xl font-semibold text-primary mb-3">Project Impact</h4><p>Conducted a comprehensive analysis of nine years of a school's operational data, delivering data-driven recommendations projected to increase enrollment stability by 8-10%. My statistical models improved revenue forecasting accuracy by <strong>13%</strong>.</p></div><div><h4 class="text-xl font-semibold text-primary mb-3">Methodology & Analysis</h4><ul class="list-disc list-inside space-y-2"><li><strong>Data Wrangling:</strong> Manually collected and cleaned non-digitized, inconsistent records, standardizing addresses and categorizing student data.</li><li><strong>Statistical Modeling:</strong> Applied Linear Regression to identify a clear enrollment decline (-2.35 students/year) and a strong inverse correlation between fees and enrollment (R² = 0.91).</li><li><strong>Hypothesis Testing:</strong> Used t-tests and ANOVA to prove that delayed subsidies had a significant negative financial impact (p < 0.05).</li><li><strong>Actionable Insights:</strong> Translated complex analyses into visual insights and clear recommendations, such as implementing a digital admission system.</li></ul></div><div><h4 class="text-xl font-semibold text-primary mb-3">Tech Stack</h4><div class="flex flex-wrap gap-2"><span class="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Python</span><span class="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm">Pandas</span><span class="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm">SciPy</span><span class="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">Statsmodels</span></div></div></div>`
    };
    return projectDetails[id] || '<p>Details coming soon.</p>';
}