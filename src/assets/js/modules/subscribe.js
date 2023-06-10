
let form = document.querySelector('.footer__form')
let formInput = document.querySelector('.footer__form-input')
let errorBox = document.querySelector('.email-error')

const test = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/

const isValidEmail = (value) => {
    return test.test(value)
}

export const validateEmail = () => {
    form.addEventListener('submit',(e)=> {
        e.preventDefault()
        let value = formInput.value

        if(!isValidEmail(value)){
            errorBox.textContent = 'Не корректный email адрес'
        }
        
    })

    formInput.addEventListener('input',() => {
        errorBox.textContent = ''
    })

    formInput.addEventListener('blur',(e) => {
        if(!isValidEmail(e.target.value)){
            errorBox.textContent = 'Не корректный email адрес'
        }
        if(!e.target.value){
            errorBox.textContent = ''
        }
    })
}