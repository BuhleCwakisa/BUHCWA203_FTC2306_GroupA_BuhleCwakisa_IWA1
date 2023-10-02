const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 5

const number = document.querySelector('[data-key="number"]') ;
const subtract = document.querySelector('[data-key="subtract"]') ;
const add = document.querySelector('[data-key="add"]') ;

const subtractHandler = () => {
    number.value = parseInt(number.value) - STEP_AMOUNT;

    if (add.disabled === true) {
        add.disabled = false
    }

    if ( parseInt(number.value) <= MIN_NUMBER ) {
        subtract.disabled = true
    }
}
const addHandler = () => {
    number.value = parseInt(number.value) + STEP_AMOUNT;

    if (subtract.disabled === true ) {
        subtract.disabled = false
    }

    if ( parseInt(number.value) >= MAX_NUMBER ) {
        add.disabled = true

}
}
subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler )