addEventListener("DOMContentLoaded", () => {
    // create svg rectangular inside circle    
    function svgCircle(svg) {
        const svgNS = "http://www.w3.org/2000/svg";
        // for loop 8 x 8
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let x = j * 15 + 5;
                let y = i * 15 + 5;
                const circle = document.createElementNS(svgNS, "circle");
                circle.setAttribute("r", "4");
                circle.setAttribute("cx", x);
                circle.setAttribute("cy", y);
                svg.appendChild(circle);
            }
        }
    }
    const svg = document.querySelector(".svg_circle");
    svgCircle(svg);


    // Nav Menu
    const menu = document.getElementById("menu");
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const toggle = document.getElementById("toggle");

    menu.addEventListener("click", () => {
        nav.classList.toggle("opened");
    });
    toggle.addEventListener("click", () => {
        nav.classList.toggle("opened");
    });


    function boundingScroll(selector) {
        const el = document.querySelector(selector)
        const rect = el.getBoundingClientRect()
        if (rect.top <= (window.innerHeight / 2) && rect.bottom >= (window.innerHeight / 2)) return true
        return false
    }

    const section = document.querySelectorAll("section[id]")
    window.addEventListener("scroll", () => {
        if (scrollY > 50) header.classList.add("sticky")
        else header.classList.remove("sticky")

        section.forEach((current) => {
            const sectionId = current.getAttribute("id")
            console.log(current);
            if (boundingScroll(`#${sectionId}`)) {
                document.querySelector(`.menu-item a[href*="${sectionId}"]`).classList.add("active")
                return;
            }
            document.querySelector(`.menu-item a[href*="${sectionId}"]`).classList.remove("active")
        })

    })

    const filterList = document.querySelector(".filter-list");
    const portfolioItem = document.querySelectorAll(".portfolio-item");

    filterList.addEventListener("click", ({ target }) => {

        if (!target.classList.contains("filter-item")) return

        filterList.querySelector(".active").classList.remove("active")
        target.classList.add("active")

        portfolioItem.forEach((data) => {
            data.classList.add("hidden");
            if (target.id == data.dataset.kategory || target.id == "all")
                data.classList.remove("hidden");
        })

    })

})


