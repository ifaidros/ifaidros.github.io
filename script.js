//console.log('script file loaded')


const btnOne = document.querySelector('#btnOne')
const btnTwo = document.querySelector('#btnTwo')


btnOne.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Button One clicked')
})

btnTwo.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Button Two clicked')
})

