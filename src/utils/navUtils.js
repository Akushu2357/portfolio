export const handleNavClick = (href, optionFunc = null) => {
    if (optionFunc) { optionFunc(); }
    // Smooth scroll to section
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};