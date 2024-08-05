import { ILogin } from "../model/ILogin";// We need import the model


export class loginController {
    url: string;

    constructor(url: string){
        this.url = url
    }

    //this method excute the login
    async login(data:ILogin, endPoint: string, endPoint2:string){
        const response = await fetch(`${this.url}/${endPoint}/${endPoint2}`,{
            method: 'POST',
            headers: {
                'Content-type' : 'Application/json'
            },
            body: JSON.stringify(data)
        })

       return response
    }

}