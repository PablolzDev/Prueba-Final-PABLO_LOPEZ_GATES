import { loginController } from "./controller/login.controller";

const url = 'https://api-posts.codificando.xyz'

const form = document.querySelector("#form-login") as HTMLFormElement
const email = document.querySelector("#email-login") as HTMLInputElement
const pss = document.querySelector("#password-login") as HTMLInputElement

form.addEventListener('submit', async(e:SubmitEvent) =>{
    e.preventDefault()

    const user = {
        email: email.value,
        password: pss.value
    }
    try {
        const LoginController = new loginController(url)
        const loginResponse = await LoginController.login(user, 'auth','login')
        sessionStorage.setItem('gmailToken',user.email)

        const getGmail = sessionStorage.getItem('gmailToken')
        if(getGmail){
            alert('Se inicia la sesion')
          window.location.href = '../src/view/home.html'
        }
        console.log(loginResponse);
        
        
    } catch (error) {
        console.log(error);
        
    }
})