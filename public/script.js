 console.log("Sever Running")

 


async function editArt(id){
    await fetch('/main/update/' + id, {method: "PATCH"});
    window.location.href = "/"
}

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
    await fetch('/main/delete/' + id, {method: "DELETE"});
    window.location.href = "/"
}

async function deleteArt(e, id){
   e.preventDefault();

   const formData = new FormData(e.target);
   const formObject = Object.fromEntries(formData.entries())

   await fetch('/delete/' + id, {
    method: 'DELETE',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(formObject)
   });

   
    window.location.href = '/'
}


async function artPieces(e, id){
   e.preventDefault();

   const formData = new FormData(e.target);
   const formObject = Object.fromEntries(formData.entries())

   await fetch('/post/' + id, {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(formObject)
   });

   
    window.location.href = '/'
}
