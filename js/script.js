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
const lenis = new Lenis({
    duration: 1.2,
    smooth: true
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{
  threshold:0.2
});

sections.forEach(section=>{
  observer.observe(section);
});