const scriptURL = 'https://script.google.com/macros/s/AKfycbyZGmYLhWsOetbocMXth42cnkKTWvp8j4ZHHuEYkm-VQdKDF9CJ/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("The entry has been posted! Have a great day!"))
                .catch(error => console.error('Error!', error.message))
            })
