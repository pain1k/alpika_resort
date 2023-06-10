export const Signup = () => {
    const btn = $('.btn-signup')
    const signup = $('.program-signup')
    const closeBtn = $('.program-signup__close')
    btn.on('click',(e) => {
        e.preventDefault()
        let paddingOffset = window.innerWidth - document.body.offsetWidth
        console.log(paddingOffset);
        $('body').css({'overflow':'hidden','paddingRight':paddingOffset + 'px'})
        signup.fadeIn(50)
    })
    closeBtn.on('click',()=>{
        $('body').removeAttr('style')
        signup.fadeOut(50)
    })

    
}