const share = () => {
        // abrir
        let pop = document.querySelector('#ET')
        if (pop) {
            pop.classList.add('show')
        } else {}
    }
    // fechar
const dissapear = () => {

    console.log(pop)
    if (pop != null) {
        console.log('fechou')

    }
}
document.addEventListener('click', dissapear)

console.log(document)