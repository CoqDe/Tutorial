
function onAsideClick(element) {
    element.classList.toggle('hidden')
}

function mountAsides(asides) {
    Array.from(asides).map(
        element => element.addEventListener('click', (event) => onAsideClick(element))
    )
}

let count = 1.1

function onPageLoaded() {
    console.log('Page loaded')

    const asides = document.querySelectorAll('.pmain aside')
    mountAsides(asides)

    const obj = {
        pole1: 'data1',
        pole2: 'data2',
        pole3: {
            pole4: 'data4'
        }
    }

    const pmain = document.querySelector('.pmain .centr')
    pmain.addEventListener('click', (event) => {
        count = count * 1.1
        pmain.setAttribute('style', `transform: scale(${count})`)
    })


    const color = {
        blue: 'blue', // 0
        red: 'red', // 1
        green: 'green' // 2
    }

    let index = 0

    function onHeaderClick(element, event) {
        const keys = Object.keys(color) // ['blue', 'red', ...]
        const key = keys[index % keys.length] // 'blue'
        const new_color = color[key]
        index++
        element.setAttribute('style', `background-color: ${new_color}`)
    }


    const header = document.querySelector('header')
    header.addEventListener('click', event => onHeaderClick(header, event))


}

document.addEventListener('DOMContentLoaded', onPageLoaded)