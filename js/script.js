function onAboutClick() {
    window.location.href="../pages/AboutPage.html"
}
function onHomeClick() {
    window.location.href="../index.html"
}
function onServicesClick() {
    window.location.href="../pages/ServicesPage.html"
}
function onProjectsClick() {
    window.location.href="../pages/ProjectsPage.html"
}
function onQuoteClick() {
    // pages are already in the same directory, so a simple relative link avoids
    // potential path issues when the site is served or opened via file://
    window.location.href="ContactPage.html";
}
