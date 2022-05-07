// Add your code here
function submitData(userName,userEmail){
     return   fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: `${userName}`,
                email: `${userEmail}`,
            }),
        })
        .then((resp) => resp.json())
        .then((data) => {
            const idApp = document.querySelector('body');
            idApp.innerHTML = `
            <p>${data.id}</p>
            `
        })
        .catch((error) => {
            alert("We have an error");
            const errApp = document.querySelector('body');
            errApp.innerHTML = `
            <p>${error.message}</p>
            `
        })
}