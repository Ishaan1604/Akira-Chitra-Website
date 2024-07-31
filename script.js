console.log(window.innerWidth);
document.addEventListener("DOMContentLoaded", function() {
    const rightToLeft = document.querySelectorAll('.rtl');
    const leftToRight = document.querySelectorAll('.ltr');
    const sponsorDiv = document.querySelector('#sponsor-container');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('ltr')) {
                    entry.target.classList.add('ltrAnimation');
                } else if (entry.target.tagName === 'DIV') {
                    entry.target.classList.add('sponsorAnimation')
                } else {
                    entry.target.classList.add('rtlAnimation');
                }
                observer.unobserve(entry.target); // Stop observing after the animation has been triggered
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    rightToLeft.forEach((item) => observer.observe(item))
    leftToRight.forEach((item) => observer.observe(item))
    observer.observe(sponsorDiv)
});


function merchPopUp(merch) {

    const modalBackground = document.createElement("div");
    modalBackground.classList.add("full-screen");
    modalBackground.style.position = "absolute";
    modalBackground.style.top = 0;
    modalBackground.style.left = 0;
    modalBackground.style.backgroundColor = "gray";
    modalBackground.style.opacity = "50%";
    modalBackground.innerHTML = "<h1>Hello world</h1>"

    const modal = document.createElement("div");
    modalBackground.appendChild(modal)

    const merchDiv = document.querySelector('#merch-container');
    merchDiv.appendChild(modalBackground)

    console.log('test');
}
