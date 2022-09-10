const para = document.querySelector('p')
const input = document.querySelector('input')
const btn = document.querySelector('button')



async function getFact() {
    const cron = 'https://cors-anywhere.herokuapp.com/'
    const endpoint = 'http://numbersapi.com/'
    const number = input.value
    const response = await fetch(`${cron}${endpoint}${number}`)
    const responseData = await response.text()
    para.textContent = responseData
}

btn.addEventListener('click', function() {
    if (input.value) getFact()
})