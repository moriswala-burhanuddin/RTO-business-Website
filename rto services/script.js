const content = {
    en: {
        mainTitle: "RTO Services",
        servicesLink: "Services",
        aboutLink: "About Us",
        contactLink: "Contact",
        heroHeading: "Get Your RTO Work Done Quickly",
        heroDescription: "We assist with driving licenses, vehicle registration, and much more.",
        contactButton: "Contact Us",
        servicesHeading: "Our Services",
        service1Title: "Driving License Assistance",
        service1Desc: "Help with new licenses, renewals, and international licenses.",
        service2Title: "Vehicle Registration",
        service2Desc: "We handle all vehicle registration and transfer processes.",
        service3Title: "RTO Paperwork",
        service3Desc: "Fast and easy completion of all RTO-related paperwork.",
        aboutHeading: "About Us",
        aboutDescription: "We are a Vadodara-based agency offering quick and efficient RTO services, ensuring a hassle-free experience for our clients.",
        contactHeading: "Contact Us",
        footerText: "&copy; 2024 RTO Services. All Rights Reserved.",
    },
    gu: {
        mainTitle: "RTO સેવાઓ",
        servicesLink: "સેવાઓ",
        aboutLink: "અમારા વિશે",
        contactLink: "સંપર્ક કરો",
        heroHeading: "તમારું RTO કામ ઝડપી રીતે કરો",
        heroDescription: "અમે ડ્રાઈવિંગ લાઇસન્સ, વાહન નોંધણી અને વધુમાં મદદ કરીએ છીએ.",
        contactButton: "સંપર્ક કરો",
        servicesHeading: "આપણી સેવાઓ",
        service1Title: "ડ્રાઇવિંગ લાઇસન્સ સહાય",
        service1Desc: "નવી લાઇસન્સ, નવેસરથી લાઇસન્સ અને આંતરરાષ્ટ્રીય લાઇસન્સમાં સહાય.",
        service2Title: "વાહન નોંધણી",
        service2Desc: "અમે તમામ વાહન નોંધણી અને ટ્રાન્સફર પ્રક્રિયાઓને સંભાળીએ છીએ.",
        service3Title: "RTO કાગળ કામ",
        service3Desc: "બધા RTO સંબંધિત કાગળ કામ ઝડપથી અને સરળતાથી પૂર્ણ.",
        aboutHeading: "અમારા વિશે",
        aboutDescription: "અમે વડોદરા આધારિત એજન્સી છીએ જે ઝડપી અને કાર્યક્ષમ RTO સેવાઓ પૂરી પાડે છે.",
        contactHeading: "સંપર્ક કરો",
        footerText: "&copy; 2024 RTO સેવાઓ. બધા હકો રિઝર્વ.",
    }
};

function changeLanguage() {
    const language = document.getElementById('language').value;

    // Change content based on language selection
    document.getElementById('main-title').textContent = content[language].mainTitle;
    document.getElementById('services-link').textContent = content[language].servicesLink;
    document.getElementById('about-link').textContent = content[language].aboutLink;
    document.getElementById('contact-link').textContent = content[language].contactLink;
    document.getElementById('hero-heading').textContent = content[language].heroHeading;
    document.getElementById('hero-description').textContent = content[language].heroDescription;
    document.getElementById('contact-button').textContent = content[language].contactButton;
    document.getElementById('services-heading').textContent = content[language].servicesHeading;
    document.getElementById('service1-title').textContent = content[language].service1Title;
    document.getElementById('service1-desc').textContent = content[language].service1Desc;
    document.getElementById('service2-title').textContent = content[language].service2Title;
    document.getElementById('service2-desc').textContent = content[language].service2Desc;
    document.getElementById('service3-title').textContent = content[language].service3Title;
    document.getElementById('service3-desc').textContent = content[language].service3Desc;
    document.getElementById('about-heading').textContent = content[language].aboutHeading;
    document.getElementById('about-description').textContent = content[language].aboutDescription;
    document.getElementById('contact-heading').textContent = content[language].contactHeading;
    document.getElementById('footer-text').textContent = content[language].footerText;
}

function toggleLanguage() {
    const lang = document.getElementById('lang-switch').value;

    if (lang === 'en') {
        document.getElementById('csc-container-en').style.display = 'block';
        document.getElementById('csc-container-gu').style.display = 'none';
    } else {
        document.getElementById('csc-container-en').style.display = 'none';
        document.getElementById('csc-container-gu').style.display = 'block';
    }
}
