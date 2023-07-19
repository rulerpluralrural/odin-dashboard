const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
const closeBtn = document.getElementById('close-btn')


hamburger.addEventListener('click', openSidebar)
closeBtn.addEventListener('click', closeSidebar)

function openSidebar() {
    sidebar.classList.remove('close')
    sidebar.classList.add('open')
}

function closeSidebar() {

    sidebar.classList.remove('open')
    sidebar.classList.add('close')
}
