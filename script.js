let step = document.querySelectorAll('li .num');
let sections = document.querySelectorAll(".get-data");
let goNext = document.querySelector('.go-next');
let goBack = document.querySelector('.go-back');
let buttons = document.querySelector('.buttons')
let allInputs = document.querySelectorAll("form input");
let warning = document.querySelectorAll(".input .error");
var red = "hsl(354, 84%, 57%)";

let toggle = document.querySelector("i");
let month = document.querySelectorAll(".month");
let year = document.querySelectorAll(".year");
let toggleYear = document.querySelector(".howlong span:nth-child(1)");
let toggleMonth = document.querySelector(".howlong span:nth-child(3)");
let plan = document.querySelectorAll(".card");

toggle.addEventListener("click", _ => {
    toggle.classList.toggle("rotate");
    month.forEach(ele => {
        ele.classList.toggle("month");
    });
    year.forEach(ele => {
        ele.classList.toggle("year-toggle");
    });
    toggleYear.classList.toggle("time");
    toggleMonth.classList.toggle("time");
});

plan.forEach(ele => {
    ele.addEventListener("click", e => {
        plan.forEach(ele => {
            ele.classList.remove("active-card");
        });
        e.currentTarget.classList.add("active-card");
    });
});

let pickAddOns = document.querySelectorAll(".card2");
pickAddOns.forEach(ele => {
    ele.addEventListener("click", e => {
        e.currentTarget.classList.toggle("active-card");
        if (e.currentTarget.classList.contains("active-card")) {
            document.querySelector(e.currentTarget.dataset.num).style.display = "block";
        }else {
            document.querySelector(e.currentTarget.dataset.num).style.display = "none";
        }
    });
});

let x = 0;

    goNext.addEventListener("click", _ => {
        if (allInputs[0].value ==! /^[a-zA-Z\-]+$/ || allInputs[0].value == "") {
            warning[0].style.display = "block";
            allInputs[0].style.border = `1px solid ${red}`;
        } else if (allInputs[1].value ==! /^[^\s@]+@[^\s@]+\.[^\s@]+$/ || allInputs[1].value == "") {
            warning[1].style.display = "block";
            allInputs[1].style.border = `1px solid ${red}`;
        } else if (allInputs[2].value ==! /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/ || allInputs[2].value == "") {
            warning[2].style.display = "block";
            allInputs[2].style.border = `1px solid ${red}`;
        } else if (x <= 3) {
                x++;
                if (x > 0) {
                    goBack.style.display = "block";
                } else {
                    goBack.style.display = "none";
                }
                sections.forEach(section => {
                    section.style.display = "none";
                    sections[x].style.display = "block";
                });
                step.forEach(num => {
                    if (x < 4) {
                        num.classList.remove("active");
                        step[x].classList.add("active");
                    }
                });
                if (x == 4) {
                    buttons.style.display = "none";
                } else if (x == 3) {
                    goNext.innerHTML = "Confirm";
                    document.querySelector(".finishing .one .left h3").innerHTML = `${document.querySelector(".three-cards .active-card h1").innerHTML} (${document.querySelector(".howlong .time").innerHTML})`;
                    if (toggleYear.classList.contains("time")) {
                        document.querySelector(".finishing .one .right h3").innerHTML = `${document.querySelector(".three-cards .active-card .hill p").innerHTML}`;
                    } else if (toggleMonth.classList.contains("time")) {
                        document.querySelector(".finishing .one .right h3").innerHTML = `${document.querySelector(".three-cards .active-card .year p").innerHTML}`;
                    }
                    // document.querySelector(".finishing .total p").innerHTML = `Total (${document.querySelector(".howlong .time").innerHTML})`;
                    // document.querySelector(".finishing .total h2").innerHTML = `+$${parseInt(document.querySelector(".finishing .one .right h3").innerHTML.slice(1))}/${document.querySelector(".howlong .time").innerHTML}`;
                }
            }
            let changeChoicing = document.querySelector(".finishing .card3 .one p");
            changeChoicing.addEventListener("click", _ => {
                    sections.forEach(section => {
                        section.style.display = "none";
                        sections[0].style.display = "block";
                    });
                    goBack.style.display = "none";
                    goNext.innerHTML = "Next Step";
                    step.forEach(num => {
                            num.classList.remove("active");
                            step[0].classList.add("active");
                    });
                    x = 0;
            });
    });

    goBack.addEventListener("click", _ => {
        x--;
        sections.forEach(section => {
            section.style.display = "none";
            sections[x].style.display = "block";
        });
        step.forEach(num => {
                num.classList.remove("active");
                step[x].classList.add("active");
        });

        if (x == 0) {
            goBack.style.display = "none";
        } else {
            goBack.style.display = 'block';
        }
        if (x < 3) {
            goNext.innerHTML = "Next Step";
        } else if (x == 3) {
            goNext.innerHTML = "Confirm";
        } else if (x > 3) {
            buttons.style.display = "none";
        }
    });