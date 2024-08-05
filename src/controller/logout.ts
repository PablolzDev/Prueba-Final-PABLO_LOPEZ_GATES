const logout = document.querySelector("#log-out") as HTMLButtonElement

document.addEventListener("DOMContentLoaded", () => {
    if(!sessionStorage.getItem("gmailToken")){
        window.location.href = "/"
    }
})

logout?.addEventListener("click", () =>{
    
    sessionStorage.removeItem("gmailToken")
    window.location.href = "/index.html"
    
})