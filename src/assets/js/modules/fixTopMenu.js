

export const fixTopMenu = () => {
    let position = 0
    let header = document.querySelector('.header')
    window.addEventListener('scroll',e => {
        let current = document.documentElement.scrollTop

        if(current > position){
            header.classList.add('faded')
        }else{
            header.classList.remove('faded')
        }

        // position = current

    })
}

