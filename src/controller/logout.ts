const logout = document.querySelector("#log-out") as HTMLButtonElement //I catch the log out button


document.addEventListener("DOMContentLoaded", () => {
    if(!sessionStorage.getItem("gmailToken")){
        window.location.href = "/"
    }
})

//This is the event to remove the session storage and close the login
logout?.addEventListener("click", () =>{
    
    sessionStorage.removeItem("gmailToken")
    window.location.href = "/index.html"
    
})