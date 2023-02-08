console.log('hello world')
let message = document.querySelector('#message')

const addMovie = evt => {
    evt.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie) 
    



    movieTitle.textContent = inputField.value 
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}
const deleteMovie = evt => {
    evt.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
}

const crossOffMovie = evt => {
    evt.target.classList.toggle('checked')
    if(evt.target.classList.contains('checked') === true){
    message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

document.querySelector('form').addEventListener('submit', addMovie)
console.log(addMovie)

