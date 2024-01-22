const form = document.getElementById('form')

form. addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event)
    let query = event.target.input.value
    search (query)

})


  
