
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const onClickToggle = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener ('click', () => {
onClickToggle.classList.toggle('open');
});

window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
    
const alternateStyle = document.querySelectorAll(".alternate-stlye");
    function setActiveStyle(color)
    {
        alternateStyle.forEach((style) => {
            if(color === style.getAttribute("title"))
            {
                style.removeAttribute("disabled");
            }
            else{
                style.setAttribute("disabled", "true");
            }
        })
    }


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.toggle('fa-sun')
    }
    else{
        dayNight.querySelector('i').classList.toggle('fa-moon')
    }
})