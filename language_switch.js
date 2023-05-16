// Language data
const translations = {
    english: {
      title: 'Enthusiastic, dedicated, detail-oriented Java developer with special interest in Micro-services.',
      skills: 'About',
      contact: 'Contact'
    },
    french: {
      title: 'Développeur Java passionné par les Microservices.',
      skills: 'À propos',
      contact: 'Contact'
    }
  };

  // Function to update the text content of the elements
  function updateTextContent(lang) {
    const translation = translations[lang];
    Object.keys(translation).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = translation[key];
      }
    });
  }

  // Event listener for language toggle
  const languageToggle = document.getElementById('language-toggle');
  languageToggle.addEventListener('change', function() {
    const lang = this.checked ? 'french' : 'english';
    updateTextContent(lang);
  });

  // Fetch the initial language (English by default)
  updateTextContent('english');
