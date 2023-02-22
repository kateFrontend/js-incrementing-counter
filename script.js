const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')  // + to change the type from string to number console.log(typeof target, target)

        const c = +counter.innerText

        const increment = target / 300  // console.log(increment) set up the number to make the counter faster or slower

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }else {
            counter.innerText = target
        }
    }

    updateCounter()
})