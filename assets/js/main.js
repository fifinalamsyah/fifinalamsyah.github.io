window.addEventListener("DOMContentLoaded", () => {

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
    const nav = document.querySelector("nav");
    const toggle = document.getElementById("toggle");
    const section = document.querySelectorAll("section[id]")

    function scroll(selector) {
        const el = document.querySelector(selector)
        const rect = el.getBoundingClientRect()
        if (rect.top <= (window.innerHeight / 2) && rect.bottom >= (window.innerHeight / 2)) return true
        return false
    }

    menu.addEventListener("click", () => {
        nav.classList.toggle("opened");
    });
    toggle.addEventListener("click", () => {
        nav.classList.toggle("opened");
    });

    window.addEventListener("scroll", () => {
        section.forEach((current) => {
            const sectionId = current.getAttribute("id")

            if (scroll("#" + sectionId)) {
                document.querySelector(".menu-item a[href*=" + sectionId + "]").classList.add("active")
                return;
            }
            document.querySelector(".menu-item a[href*=" + sectionId + "]").classList.remove("active")
        })

    })

    const filterList = document.querySelector(".filter-list");
    const portfolioItem = document.querySelectorAll(".portfolio-item");

    filterList.addEventListener("click", (event) => {
        const target = event.target

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


// function scroll(selector) {
//     const el = document.querySelector(selector)
//     const rect = el.getBoundingClientRect()
//     console.log(window.innerHeight, rect.top, el.offsetHeight)
//     if (window.innerHeight >= rect.top + el.offsetHeight) return true
//     return false
// }

function scrollActive() {
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        console.log(sectionHeight);
        const sectionTop = current.offsetTop - 50

        sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".menu-item a[href*=" + sectionId + "]").classList.add("active")
        }
        else {
            const active = document.querySelector(".menu-item a[href*=" + sectionId + "]")
            console.log(active);
            active.classList.remove("active")
        }
    })
}

// const name = document.getElementById("name");
// let arrName = name.innerText.split("");
// let n = arrName.length;

// let i = 0;
// let str = [];
// let increment = true;
// setInterval(() => {
//     if (str.length == n) increment = false;
//     if (str.length == 0) increment = true;

//     if (increment) {
//         str.push(arrName[i]);
//         name.innerHTML = str.join("");
//         i++;
//     } else {
//         str.pop();
//         name.innerHTML = str.join("");
//         i--;
//     }
//     // console.log(str.length);
// }, 400);