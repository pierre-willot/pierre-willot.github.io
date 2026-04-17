document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelector');
    
    // Sécurité : on arrête le script si l'élément n'existe pas sur la page
    if (!languageSelector) return;

    const languageBtn = languageSelector.querySelector('.language-btn');
    const currentLanguage = languageSelector.querySelector('.current-language');
    const languageOptions = languageSelector.querySelectorAll('.language-option');
    const bioElement = document.getElementById('bio');
    
    // Vos textes originaux
    const translations = {
        en: {
            langName: "English",
            bio: "Freelance illustrator exploring colorful worlds and telling their stories. Discover my work:"
        },
        fr: {
            langName: "Français",
            bio: "Illustrateur freelance explorant des mondes colorés et racontant leurs histoires. Découvrez mon travail :"
        }
    };

    // --- INITIALISATION ---
    // On définit le français par défaut au chargement
    const initialLang = 'fr'; 
    bioElement.textContent = translations[initialLang].bio;
    currentLanguage.textContent = translations[initialLang].langName;
    
    // --- LOGIQUE D'INTERACTION ---

    // Ouvrir/Fermer le menu déroulant
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageSelector.classList.toggle('open');
    });
    
    // Changer de langue au clic sur une option
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Mise à jour du texte de la bio et du bouton
            currentLanguage.textContent = translations[lang].langName;
            bioElement.textContent = translations[lang].bio;
            
            // Mise à jour visuelle des coches (checkmarks)
            languageOptions.forEach(opt => {
                opt.classList.remove('active');
                opt.querySelector('.fa-check').style.visibility = 'hidden';
            });
            this.classList.add('active');
            this.querySelector('.fa-check').style.visibility = 'visible';
            
            // Fermer le menu
            languageSelector.classList.remove('open');
        });
    });
    
    // Fermer le menu si on clique n'importe où ailleurs sur l'écran
    document.addEventListener('click', function() {
        languageSelector.classList.remove('open');
    });
});