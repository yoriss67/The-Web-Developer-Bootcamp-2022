const newH3 = document.createElement('h3')

newH3.innerText = "I am h3"

const root = document.getElementById('root')

root.appendChild(newH3)

root.append('root.append')


// WRITE YOUR CODE IN HERE:
const container = document.getElementById('container')



// container.appendChild(button)

const hundred = function () {
    for (let i = 0; i < 100; i++) {
        // 🤬🤬Chat GPT 100回createしなきゃだからfor loopの中！
        const button = document.createElement('button')
        button.innerText = "Hey!"

        container.appendChild(button)
    }

}

hundred()