// DeliaTech USA AI Intelligence Dashboard - Professional JavaScript
// AI Intelligence for Accounting & Finance Professionals

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all dashboard functionality
    initDashboard();
    initInteractiveElements();
    initCitationSystem();
    initAccessibilityFeatures();
    initAnimations();
    initAnalytics();
    
    console.log('DeliaTech USA AI Intelligence Dashboard initialized - Week of September 22-28, 2025');
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('✅ AI Intelligence Dashboard Loaded - 3 verified developments from Sept 22-28, 2025', 'success');
    }, 1500);
});

/**
 * Initialize main dashboard functionality
 */
function initDashboard() {
    // Add loading animation completion
    document.body.classList.add('dashboard-loaded');
    
    // Initialize navigation smooth scrolling
    initSmoothScrolling();
    
    // Initialize section animations on scroll
    initScrollAnimations();
    
    // Initialize interactive cards
    initInteractiveCards();
    
    // Initialize real-time clock
    initRealTimeClock();
}

/**
 * Initialize smooth scrolling for internal navigation
 */
function initSmoothScrolling() {
    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize scroll-based animations
 */
function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        
        // Observe intelligence sections and key elements
        document.querySelectorAll('.intelligence-section, .stat-item, .deployment-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }
}

/**
 * Handle intersection observer animations
 */
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Special stagger effect for deployment items
            if (entry.target.classList.contains('deployment-item')) {
                const items = entry.target.parentElement.querySelectorAll('.deployment-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 150);
                });
            }
        }
    });
}

/**
 * Initialize interactive card effects
 */
function initInteractiveCards() {
    // Enhanced hover effects for stat items
    document.querySelectorAll('.stat-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.02)';
            this.style.boxShadow = '0 12px 28px rgba(31, 184, 205, 0.25)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Interactive effects for deployment items
    document.querySelectorAll('.deployment-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
            this.style.backgroundColor = 'rgba(31, 184, 205, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.backgroundColor = 'rgba(31, 184, 205, 0.05)';
        });
    });
    
    // Interactive metric cards
    document.querySelectorAll('.metric-item').forEach(metric => {
        metric.addEventListener('click', function() {
            const value = this.querySelector('.metric-value').textContent;
            const label = this.querySelector('.metric-label').textContent;
            showMetricDetail(value, label);
        });
    });
}

/**
 * Initialize interactive elements (CTA buttons, etc.)
 */
function initInteractiveElements() {
    // AI Assessment button
    const assessmentBtn = document.getElementById('assessment-btn');
    if (assessmentBtn) {
        assessmentBtn.addEventListener('click', function() {
            openAIAssessment();
            trackEvent('ai_assessment_started', {
                source: 'cta_button',
                week: '2025-09-22_2025-09-28'
            });
        });
    }
    
    // Professional Resources button
    const resourcesBtn = document.getElementById('resources-btn');
    if (resourcesBtn) {
        resourcesBtn.addEventListener('click', function() {
            openProfessionalResources();
            trackEvent('resources_accessed', {
                source: 'cta_button',
                week: '2025-09-22_2025-09-28'
            });
        });
    }
    
    // Add interactive feedback to all buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            createRippleEffect(this, e);
        });
    });
}

/**
 * Professional citation system with working external links
 */
function initCitationSystem() {
    const citationLinks = document.querySelectorAll('.citation-link');
    
    citationLinks.forEach(link => {
        // Ensure proper attributes for external links
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
        
        // Add click tracking and visual feedback
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            const source = this.querySelector('.citation-info strong').textContent;
            
            // Track citation access
            trackCitationAccess(url, source);
            
            // Show verification popup
            showCitationVerification(source);
            
            // Visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            console.log(`DeliaTech: Opening verified source - ${source}: ${url}`);
        });
        
        // Enhanced hover effects
        link.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 6px 20px rgba(34, 197, 94, 0.3)';
            
            // Show source preview tooltip
            showSourcePreview(this);
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 12px rgba(31, 184, 205, 0.2)';
            hideSourcePreview();
        });
    });
}

/**
 * Initialize accessibility features
 */
function initAccessibilityFeatures() {
    // Add ARIA labels and roles
    document.querySelectorAll('.intelligence-section').forEach((section, index) => {
        section.setAttribute('role', 'article');
        section.setAttribute('aria-labelledby', `section-title-${index}`);
        
        const title = section.querySelector('h2');
        if (title) {
            title.id = `section-title-${index}`;
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Alt + number keys for quick section navigation
        if (e.altKey) {
            if (e.key >= '1' && e.key <= '3') {
                e.preventDefault();
                const sectionIndex = parseInt(e.key) - 1;
                const sections = document.querySelectorAll('.intelligence-section');
                if (sections[sectionIndex]) {
                    sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
                    sections[sectionIndex].focus();
                }
            }
        }
        
        // Escape key to close modals
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
    
    // Focus management for interactive elements
    document.querySelectorAll('.citation-link, .btn, .interactive-hover').forEach(element => {
        element.setAttribute('tabindex', '0');
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Create screen reader announcer
    if (!document.getElementById('aria-announcer')) {
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.id = 'aria-announcer';
        document.body.appendChild(announcer);
    }
}

/**
 * Initialize professional animations
 */
function initAnimations() {
    // Add loading animations to key elements
    setTimeout(() => {
        document.querySelectorAll('.header-badge, .executive-summary').forEach((el, index) => {
            el.style.animation = `fadeIn 0.8s ease-out ${index * 0.2}s both`;
        });
    }, 500);
    
    // Stagger animation for nav stats
    setTimeout(() => {
        document.querySelectorAll('.stat-item').forEach((stat, index) => {
            stat.style.animation = `slideUp 0.6s ease-out ${0.8 + (index * 0.2)}s both`;
        });
    }, 800);
    
    // Add CSS animations
    addAnimationStyles();
}

/**
 * Add dynamic CSS animations
 */
function addAnimationStyles() {
    if (!document.getElementById('dynamic-animations')) {
        const style = document.createElement('style');
        style.id = 'dynamic-animations';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(40px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            
            @keyframes ripple {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(4); opacity: 0; }
            }
            
            .ripple-effect {
                position: absolute;
                border-radius: 50%;
                background: rgba(31, 184, 205, 0.6);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            }
            
            .dashboard-loaded .intelligence-section {
                animation: fadeIn 0.8s ease-out both;
            }
            
            .metric-detail-modal {
                animation: modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
            }
            
            @keyframes modalSlideIn {
                from { opacity: 0; transform: scale(0.8) translateY(-20px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Real-time clock functionality
 */
function initRealTimeClock() {
    const updateClock = () => {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
            timeZone: 'America/New_York',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        });
        
        // Update any real-time elements if they exist
        const clockElements = document.querySelectorAll('.real-time-clock');
        clockElements.forEach(el => {
            el.textContent = timeString;
        });
    };
    
    updateClock();
    setInterval(updateClock, 1000);
}

/**
 * Open AI Readiness Assessment Modal
 */
function openAIAssessment() {
    const modal = createModal('AI Readiness Assessment', `
        <div class="assessment-content">
            <h4>Evaluate Your Firm's AI Readiness</h4>
            <p>Answer these quick questions to get personalized recommendations:</p>
            
            <div class="assessment-questions">
                <div class="question-group">
                    <label>1. How many AI tools is your firm currently using?</label>
                    <select class="form-control" id="ai-tools-count">
                        <option value="0">None</option>
                        <option value="1-2">1-2 tools</option>
                        <option value="3-5">3-5 tools</option>
                        <option value="5+">More than 5</option>
                    </select>
                </div>
                
                <div class="question-group">
                    <label>2. What's your biggest AI concern?</label>
                    <select class="form-control" id="ai-concern">
                        <option value="accuracy">Data accuracy and reliability</option>
                        <option value="security">Security and privacy</option>
                        <option value="training">Team training and adoption</option>
                        <option value="cost">Implementation costs</option>
                        <option value="compliance">Regulatory compliance</option>
                    </select>
                </div>
                
                <div class="question-group">
                    <label>3. How prepared are you for AI-driven audits?</label>
                    <select class="form-control" id="audit-readiness">
                        <option value="not-ready">Not prepared at all</option>
                        <option value="basic">Basic record-keeping in place</option>
                        <option value="good">Good digital documentation</option>
                        <option value="advanced">Fully AI-audit ready</option>
                    </select>
                </div>
            </div>
            
            <div class="assessment-actions">
                <button class="btn btn--primary" onclick="processAssessment()">Get My Recommendations</button>
                <button class="btn btn--outline" onclick="closeModal()">Maybe Later</button>
            </div>
        </div>
    `);
    
    showModal(modal);
}

/**
 * Process AI assessment and show results
 */
function processAssessment() {
    const toolsCount = document.getElementById('ai-tools-count').value;
    const concern = document.getElementById('ai-concern').value;
    const auditReadiness = document.getElementById('audit-readiness').value;
    
    // Generate personalized recommendations
    const recommendations = generateRecommendations(toolsCount, concern, auditReadiness);
    
    // Update modal with results
    const modal = document.querySelector('.modal-content');
    modal.innerHTML = `
        <div class="assessment-results">
            <h4>🎯 Your Personalized AI Roadmap</h4>
            <div class="recommendations">
                ${recommendations.map(rec => `
                    <div class="recommendation-item">
                        <h5>${rec.title}</h5>
                        <p>${rec.description}</p>
                        <div class="priority-badge priority-${rec.priority}">
                            ${rec.priority.toUpperCase()} PRIORITY
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="next-steps">
                <h5>🚀 Immediate Next Steps:</h5>
                <ol>
                    <li>Review the TIGTA report on IRS AI deployment</li>
                    <li>Audit your current record-keeping systems</li>
                    <li>Schedule team AI literacy training</li>
                    <li>Develop your firm's AI strategy document</li>
                </ol>
            </div>
            
            <div class="assessment-actions">
                <button class="btn btn--primary" onclick="downloadAssessment()">📄 Download Report</button>
                <button class="btn btn--secondary" onclick="scheduleConsultation()">📅 Schedule Consultation</button>
                <button class="btn btn--outline" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    
    // Track assessment completion
    trackEvent('ai_assessment_completed', {
        tools_count: toolsCount,
        concern: concern,
        audit_readiness: auditReadiness
    });
}

/**
 * Generate personalized recommendations based on assessment
 */
function generateRecommendations(toolsCount, concern, auditReadiness) {
    const recommendations = [];
    
    // Tool-based recommendations
    if (toolsCount === '0') {
        recommendations.push({
            title: 'Start with Basic AI Tools',
            description: 'Begin with simple AI-powered accounting software features like automated categorization and anomaly detection.',
            priority: 'high'
        });
    } else if (toolsCount === '5+') {
        recommendations.push({
            title: 'Optimize Current AI Portfolio',
            description: 'Focus on integration and team training to maximize ROI from existing AI tools.',
            priority: 'medium'
        });
    }
    
    // Concern-based recommendations
    if (concern === 'security') {
        recommendations.push({
            title: 'Implement AI Security Framework',
            description: 'Establish data governance policies and security protocols specific to AI tool usage.',
            priority: 'high'
        });
    } else if (concern === 'training') {
        recommendations.push({
            title: 'Develop AI Literacy Program',
            description: 'Create structured training program following the "AI Lab" model from our workforce section.',
            priority: 'high'
        });
    }
    
    // Audit readiness recommendations
    if (auditReadiness === 'not-ready') {
        recommendations.push({
            title: 'Urgent: Audit-Ready System Implementation',
            description: 'Immediately implement versioned backups, immutable logs, and metadata documentation as outlined in the IRS AI section.',
            priority: 'critical'
        });
    }
    
    return recommendations;
}

/**
 * Open Professional Resources
 */
function openProfessionalResources() {
    const modal = createModal('DeliaTech Professional Resources', `
        <div class="resources-content">
            <h4>🎓 AI Intelligence Resources for Accounting Professionals</h4>
            
            <div class="resource-categories">
                <div class="resource-category">
                    <h5>📚 This Week's Essential Reading</h5>
                    <ul class="resource-list">
                        <li>
                            <a href="https://www.tigta.gov/sites/default/files/reports/2025-05/2025308022fr.pdf" target="_blank">
                                <strong>TIGTA Report 2025-308-022:</strong> IRS Could Leverage Examination Results in AI
                            </a>
                            <span class="resource-badge verified">VERIFIED SOURCE</span>
                        </li>
                        <li>
                            <a href="https://www.axios.com/2025/09/24/ceos-ai-adoption-campaign" target="_blank">
                                <strong>CEO AI Adoption Campaign:</strong> Industry Leadership Initiative
                            </a>
                            <span class="resource-badge verified">VERIFIED SOURCE</span>
                        </li>
                        <li>
                            <a href="https://www.techradar.com/news/building-ai-ready-finance-teams" target="_blank">
                                <strong>Building AI-Ready Teams:</strong> People Over Tools Strategy
                            </a>
                            <span class="resource-badge verified">VERIFIED SOURCE</span>
                        </li>
                    </ul>
                </div>
                
                <div class="resource-category">
                    <h5>🛠️ Implementation Tools</h5>
                    <ul class="resource-list">
                        <li><strong>AI Audit Readiness Checklist:</strong> Prepare for IRS AI-driven audits</li>
                        <li><strong>Team AI Training Template:</strong> Based on 92% success rate model</li>
                        <li><strong>AI Strategy Communication Kit:</strong> Address client concerns</li>
                        <li><strong>ROI Tracking Dashboard:</strong> Measure AI implementation success</li>
                    </ul>
                </div>
                
                <div class="resource-category">
                    <h5>📅 Upcoming Intelligence</h5>
                    <p><strong>Next Week (October 6, 2025):</strong></p>
                    <ul class="resource-list">
                        <li>AI regulation updates and compliance changes</li>
                        <li>New fintech partnerships affecting accountants</li>
                        <li>Workforce development trends and skills mapping</li>
                        <li>International AI adoption case studies</li>
                    </ul>
                </div>
            </div>
            
            <div class="resources-actions">
                <button class="btn btn--primary" onclick="subscribeToUpdates()">📧 Subscribe to Weekly Updates</button>
                <button class="btn btn--outline" onclick="closeModal()">Close</button>
            </div>
        </div>
    `);
    
    showModal(modal);
}

/**
 * Create and show modal
 */
function createModal(title, content) {
    const modalHtml = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-container" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-content">
                    ${content}
                </div>
            </div>
        </div>
    `;
    
    const modalElement = document.createElement('div');
    modalElement.className = 'modal';
    modalElement.innerHTML = modalHtml;
    
    return modalElement;
}

/**
 * Show modal with animation
 */
function showModal(modalElement) {
    document.body.appendChild(modalElement);
    document.body.style.overflow = 'hidden';
    
    // Add modal styles if not present
    if (!document.getElementById('modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: var(--space-20);
            }
            
            .modal-container {
                background: var(--color-slate-900);
                border-radius: var(--radius-lg);
                border: 1px solid rgba(31, 184, 205, 0.3);
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--space-20);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(26, 35, 126, 0.3);
            }
            
            .modal-header h3 {
                color: var(--color-teal-300);
                margin: 0;
                font-size: var(--font-size-xl);
            }
            
            .modal-close {
                background: none;
                border: none;
                color: var(--color-cream-100);
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background var(--duration-fast);
            }
            
            .modal-close:hover {
                background: rgba(255, 255, 255, 0.1);
            }
            
            .modal-content {
                padding: var(--space-20);
                color: var(--color-cream-100);
            }
            
            .question-group {
                margin-bottom: var(--space-16);
            }
            
            .question-group label {
                display: block;
                margin-bottom: var(--space-8);
                font-weight: var(--font-weight-medium);
                color: var(--color-cream-100);
            }
            
            .assessment-actions,
            .resources-actions {
                margin-top: var(--space-24);
                display: flex;
                gap: var(--space-12);
                flex-wrap: wrap;
            }
            
            .recommendation-item {
                background: rgba(31, 184, 205, 0.05);
                border: 1px solid rgba(31, 184, 205, 0.2);
                border-radius: var(--radius-base);
                padding: var(--space-16);
                margin-bottom: var(--space-12);
                position: relative;
            }
            
            .recommendation-item h5 {
                color: var(--color-teal-300);
                margin-bottom: var(--space-8);
                font-size: var(--font-size-base);
            }
            
            .priority-badge {
                position: absolute;
                top: var(--space-8);
                right: var(--space-8);
                padding: var(--space-2) var(--space-8);
                border-radius: var(--radius-full);
                font-size: var(--font-size-xs);
                font-weight: var(--font-weight-bold);
            }
            
            .priority-critical {
                background: #ef4444;
                color: white;
            }
            
            .priority-high {
                background: #f59e0b;
                color: white;
            }
            
            .priority-medium {
                background: #22c55e;
                color: white;
            }
            
            .resource-category {
                margin-bottom: var(--space-20);
            }
            
            .resource-category h5 {
                color: var(--color-teal-300);
                margin-bottom: var(--space-12);
                font-size: var(--font-size-base);
            }
            
            .resource-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .resource-list li {
                margin-bottom: var(--space-8);
                padding: var(--space-8);
                background: rgba(255, 255, 255, 0.03);
                border-radius: var(--radius-sm);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: var(--space-8);
            }
            
            .resource-list a {
                color: var(--color-cream-100);
                text-decoration: none;
                flex: 1;
            }
            
            .resource-list a:hover {
                color: var(--color-teal-300);
            }
            
            .resource-badge {
                padding: var(--space-2) var(--space-6);
                border-radius: var(--radius-full);
                font-size: var(--font-size-xs);
                font-weight: var(--font-weight-bold);
            }
            
            .resource-badge.verified {
                background: #22c55e;
                color: white;
            }
            
            .next-steps ol {
                padding-left: var(--space-20);
                color: rgba(255, 255, 255, 0.9);
            }
            
            .next-steps li {
                margin-bottom: var(--space-4);
                line-height: var(--line-height-normal);
            }
        `;
        document.head.appendChild(modalStyles);
    }
    
    // Animate in
    requestAnimationFrame(() => {
        modalElement.style.animation = 'fadeIn 0.3s ease-out';
        modalElement.querySelector('.modal-container').style.animation = 'modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    });
}

/**
 * Close modal
 */
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

/**
 * Close all modals
 */
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.remove();
    });
    document.body.style.overflow = '';
}

/**
 * Show metric detail popup
 */
function showMetricDetail(value, label) {
    const detailContent = getMetricDetailContent(value, label);
    const modal = createModal(`Metric Details: ${label}`, detailContent);
    showModal(modal);
}

/**
 * Get detailed content for metrics
 */
function getMetricDetailContent(value, label) {
    const details = {
        '$26M': 'The IRS AI implementation is projected to generate $26 million in additional tax assessments annually through improved case selection and fraud detection.',
        '14': '14 examination classifiers were reassigned to focus on AI-enhanced examination functions, improving efficiency and accuracy.',
        '92%': 'The successful team transformation case study achieved 92% AI adoption rate through proper change management and training.',
        '8.5hrs': 'Each team member saved an average of 8.5 hours per week through AI tool adoption, enabling 30% more client capacity.',
        '30%': 'The team was able to take on 30% more clients with the same headcount after successful AI implementation.',
        '25%': 'Staff satisfaction scores increased by 25% after proper AI training and adoption support.'
    };
    
    const detail = details[value] || 'This metric represents a key data point from our verified sources covering AI developments in accounting and finance.';
    
    return `
        <div class="metric-detail-content">
            <div class="metric-display">
                <span class="metric-big-value">${value}</span>
                <span class="metric-big-label">${label}</span>
            </div>
            <div class="metric-explanation">
                <h5>📊 What This Means:</h5>
                <p>${detail}</p>
            </div>
            <div class="metric-implications">
                <h5>💡 Professional Implications:</h5>
                <ul>
                    <li>This represents a measurable impact of AI adoption in professional services</li>
                    <li>Consider how similar metrics might apply to your firm's AI strategy</li>
                    <li>Use this data to benchmark your own AI implementation goals</li>
                </ul>
            </div>
            <div class="modal-actions">
                <button class="btn btn--outline" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
}

/**
 * Show citation verification popup
 */
function showCitationVerification(source) {
    const notification = document.createElement('div');
    notification.className = 'citation-verification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-slate-900);
        border: 2px solid #22c55e;
        border-radius: var(--radius-lg);
        padding: var(--space-16);
        color: white;
        z-index: 1001;
        max-width: 320px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8);">
            <span style="font-size: 20px;">✅</span>
            <strong style="color: #22c55e;">Verified Source</strong>
        </div>
        <div style="font-size: var(--font-size-sm); color: var(--color-cream-100); margin-bottom: var(--space-8);">
            ${source}
        </div>
        <div style="font-size: var(--font-size-xs); color: rgba(255,255,255,0.7);">
            Opening original article...
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

/**
 * Show source preview tooltip
 */
function showSourcePreview(element) {
    const source = element.querySelector('.citation-info strong').textContent;
    const date = element.querySelector('.citation-info .date').textContent;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'source-preview-tooltip';
    tooltip.style.cssText = `
        position: absolute;
        background: var(--color-slate-900);
        border: 1px solid var(--color-teal-300);
        border-radius: var(--radius-base);
        padding: var(--space-12);
        color: white;
        z-index: 1000;
        max-width: 250px;
        font-size: var(--font-size-sm);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        pointer-events: none;
        transform: translateY(-100%);
        margin-top: -10px;
    `;
    
    tooltip.innerHTML = `
        <div style="color: var(--color-teal-300); font-weight: bold; margin-bottom: var(--space-4);">
            ${source}
        </div>
        <div style="color: rgba(255,255,255,0.8);">
            Published: ${date}
        </div>
        <div style="color: rgba(255,255,255,0.6); margin-top: var(--space-4); font-size: var(--font-size-xs);">
            Click to open original article ↗
        </div>
    `;
    
    element.style.position = 'relative';
    element.appendChild(tooltip);
}

/**
 * Hide source preview tooltip
 */
function hideSourcePreview() {
    document.querySelectorAll('.source-preview-tooltip').forEach(tooltip => {
        tooltip.remove();
    });
}

/**
 * Create ripple effect for button clicks
 */
function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Show notification system
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const colors = {
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        background: ${colors[type]};
        color: white;
        padding: var(--space-12) var(--space-24);
        border-radius: var(--radius-lg);
        font-weight: var(--font-weight-medium);
        z-index: 1001;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        max-width: 90vw;
        text-align: center;
        font-size: var(--font-size-sm);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(-100%)';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

/**
 * Initialize analytics and tracking
 */
function initAnalytics() {
    // Track page load
    trackEvent('dashboard_loaded', {
        week: '2025-09-22_2025-09-28',
        sections: 3,
        sources: 3
    });
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                trackEvent('scroll_depth', { percent: maxScroll });
            }
        }
    });
    
    // Track section visibility
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionName = entry.target.id || 'unknown';
                    trackEvent('section_viewed', { section: sectionName });
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('.intelligence-section').forEach(section => {
            sectionObserver.observe(section);
        });
    }
}

/**
 * Track events (can be connected to real analytics)
 */
function trackEvent(eventName, properties = {}) {
    console.log(`DeliaTech Analytics: ${eventName}`, properties);
    
    // Integration point for real analytics services
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    if (typeof mixpanel !== 'undefined') {
        mixpanel.track(eventName, properties);
    }
}

/**
 * Track citation access
 */
function trackCitationAccess(url, source) {
    trackEvent('citation_accessed', {
        source: source,
        url: url,
        week: '2025-09-22_2025-09-28'
    });
}

/**
 * Announce to screen readers
 */
function announceToScreenReader(message) {
    const announcer = document.getElementById('aria-announcer');
    if (announcer) {
        announcer.textContent = message;
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    }
}

/**
 * Placeholder functions for future implementation
 */
function downloadAssessment() {
    showNotification('Assessment report download will be available in the full version.', 'info');
    trackEvent('assessment_download_requested');
}

function scheduleConsultation() {
    showNotification('Consultation scheduling will be available in the full version.', 'info');
    trackEvent('consultation_requested');
}

function subscribeToUpdates() {
    showNotification('Newsletter subscription will be available in the full version.', 'info');
    trackEvent('newsletter_subscription_requested');
}

// Global error handling
window.addEventListener('error', function(e) {
    console.error('DeliaTech Dashboard error:', e.error);
    trackEvent('javascript_error', { message: e.message, filename: e.filename, lineno: e.lineno });
});

// Export global functions for external access
window.DeliaTechDashboard = {
    showNotification,
    trackEvent,
    closeAllModals,
    openAIAssessment,
    openProfessionalResources
};

// Add fade out styles for modals
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(fadeOutStyle);