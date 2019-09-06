function getOrder(){
    return 'Pizza and cake'
}

function* logGenerator(){
    
    alert('Hello, how can i help you')
    yield 'Step 1 Completed'

    alert(`your order wa ${getOrder()}`)
    yield 'Step 2 Completed'

    alert('Thanks for eating here')
    yield 'Step 3 Completed'

    return 'Finished'
}

let gen = logGenerator();