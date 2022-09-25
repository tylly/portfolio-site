const home = document.getElementById('home')
const aboutMe = document.getElementById('aboutMe')
const aboutMeText = document.getElementById('aboutMeText')
const projects = document.getElementById('projects')
const globeTrotters = document.getElementById('globeTrotters')
const skiResort = document.getElementById('skiResort')
const pokeDex = document.getElementById('pokeDex')
const education = document.getElementById('education')
const resume = document.getElementById('resume')
const headShot = document.getElementById('headshot')
const cardCont = Array.from(document.getElementsByClassName('nameCont'))

home.onclick = () => {
    cardCont.forEach((i) => {
        i.style.display = "flex"
    })
    headShot.style.display = "flex"
    aboutMeText.style.display = "none"
    globeTrotters.style.display = "none"
    skiResort.style.display = "none"
    pokeDex.style.display = "none"
}

aboutMe.onclick = () => {
    cardCont.forEach((i) => {
        i.style.display = "none"
    })
    
    aboutMeText.style.display = "flex"
    globeTrotters.style.display = "none"
    skiResort.style.display = "none"
    pokeDex.style.display = "none"
}
projects.onclick = () => {
    cardCont.forEach((i) => {
        i.style.display = "none"
    })
    headShot.style.display = "none"
    aboutMeText.style.display = "none"
    globeTrotters.style.display = "flex"
    skiResort.style.display = "flex"
    pokeDex.style.display = "flex"
}
education.onclick = () => {
    cardCont.forEach((i) => {
        i.style.display = "none"
    })
}
resume.onclick = () => {
    cardCont.forEach((i) => {
        i.style.display = "none"
    })
}