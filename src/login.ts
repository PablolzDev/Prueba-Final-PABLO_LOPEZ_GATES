import { loginController } from "./controller/login.controller";

const url = 'https://api-posts.codificando.xyz'

const form = document.querySelector("#form-login") as HTMLFormElement
const email = document.querySelector("#email-login") as HTMLInputElement
const pss = document.querySelector("#password-login") as HTMLInputElement

//Event of the login
form.addEventListener('submit', async(e:SubmitEvent) =>{
    e.preventDefault()

    //I create the object of the new user
    const user = {
        email: email.value,
        password: pss.value
    }
    try {
        const LoginController = new loginController(url)
        const loginResponse = await LoginController.login(user, 'auth','login') // After initialize the class , I use its method with his params
        sessionStorage.setItem('gmailToken',user.email) //Then I create the "Token"

        const getGmail = sessionStorage.getItem('gmailToken')
        if(getGmail){ // Here I validate that the Item in the session storage exist and continue with the App
            alert('Se inicia la sesion')
          window.location.href = '../src/view/home.html'
        }
        console.log(loginResponse);
        
        
    } catch (error) {
        console.log(error);
        
    }
})