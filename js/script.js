document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelector');
    
    // Safety check: only run the rest of the script if the language selector exists in the HTML
    // (Since it is currently commented out in your HTML, this prevents console errors)
    if (!languageSelector) return;

    const languageBtn = languageSelector.querySelector('.language-btn');
    const currentLanguage = languageSelector.querySelector('.current-language');
    const languageOptions = languageSelector.querySelectorAll('.language-option');
    const bioElement = document.getElementById('bio');
    
    // Define translations
    const translations = {
        en: {
            bio: "Freelance illustrator exploring colorful worlds and telling their stories. Discover my work:"
        },
        fr: {
            bio: "Illustrateur freelance explorant des mondes colorés et racontant leurs histoires. Découvrez mon travail :"
        }
    };
    
    // Toggle language dropdown
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageSelector.classList.toggle('open');
    });
    
    // Select a language
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Update current language text
            currentLanguage.textContent = lang === 'en' ? 'English' : 'Français';
            
            // Update active state
            languageOptions.forEach(opt => {
                opt.classList.remove('active');
                opt.querySelector('.fa-check').style.visibility = 'hidden';
            });
            this.classList.add('active');
            this.querySelector('.fa-check').style.visibility = 'visible';
            
            // Update bio translation
            bioElement.textContent = translations[lang].bio;
            
            // Close dropdown
            languageSelector.classList.remove('open');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageSelector.contains(e.target)) {
            languageSelector.classList.remove('open');
        }
    });
});