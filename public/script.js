 console.log("Sever Running")


async function editArt(e, id){
   e.preventDefault();

   const formData = new FormData(e.target);
   const formObject = Object.fromEntries(formData.entries())

   await fetch('/patch/' + id, {
    method: 'PATCH',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(formObject)
   });

   
    window.location.href = '/'
}


async function deleteArt(id){
    await fetch('/delete/' + id, {method: "DELETE"});
    window.location.href = "/"
}

const createForm = document.querySelector("form")


createForm.addEventListener("submit", async(e) =>{
   e.preventDefault();

   const bookData = new FormData(createForm);
   const reqBody = Object.fromEntries(bookData)
    
   const response = await fetch('/love/', {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(reqBody)
   })
})
// window.location.href = '/'