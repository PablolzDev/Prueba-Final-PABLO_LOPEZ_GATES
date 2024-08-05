import { IRegister } from "../model/IRegister";

export class RegisterController {
    url: string;

    constructor(url: string){
        this.url = url
    }

    async Register(dataRegister:IRegister, endPoint: string, endPoint2: string){
        const response = await fetch(`${this.url}/${endPoint}/${endPoint2}`,{
            method: 'POST',
            headers: {
                'Content-type' : 'Application/json'
            },
            body: JSON.stringify(dataRegister)
        })
        console.log(response.status);

        const data = response.json();
        if (response.status != 201) {
            throw new Error("Can't create User");
        }

        return data
    }
    
}
