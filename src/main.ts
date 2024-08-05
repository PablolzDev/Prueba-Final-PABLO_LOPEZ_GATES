import { RegisterController } from "./controller/register.controller";
import { IRegister } from "./model/IRegister";

const url = 'https://api-posts.codificando.xyz'

const form = document.querySelector("#form-register") as HTMLFormElement
const email = document.querySelector("#email-input") as HTMLInputElement
const pss = document.querySelector("#pss-input") as HTMLInputElement

const registerController = new RegisterController(url)

form.addEventListener('submit', async(e:SubmitEvent) =>{
    e.preventDefault()

    const newUser: IRegister = {
        email:email.value,
        password: pss.value
    }

    try {
        const userADD = await registerController.Register(newUser, "users","register")
        Swal.fire({
            title: "You have succesfully registered",
            icon: "success"
          });

        form.reset()
        window.location.href = "/index.html"
        console.log(userADD);
        
    } catch (error) {
        console.log(error);
        
    }
    
})