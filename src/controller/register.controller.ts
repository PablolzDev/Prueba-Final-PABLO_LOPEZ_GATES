import { IRegister } from "../model/IRegister"; // Import the Interface

//Register Class
export class RegisterController {
    url: string;

    constructor(url: string){
        this.url = url
    }

    //Method to create the user 
    async Register(dataRegister:IRegister, endPoint: string, endPoint2: string){
        const response = await fetch(`${this.url}/${endPoint}/${endPoint2}`,{ //URL and endpoints needed to use the method of the API
            method: 'POST',
            headers: {
                'Content-type' : 'Application/json'
            },
            body: JSON.stringify(dataRegister)
        })
        console.log(response.status);

        //Error handling
        const data = response.json();
        if (response.status != 201) {
            throw new Error("Can't create User");
        }

        return data
    }
    
}
