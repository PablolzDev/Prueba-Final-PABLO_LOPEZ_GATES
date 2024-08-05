import { IPost } from "../model/IPost";


//This class isn't completed, it just have the get method 
export class PostController {
    url: string;

    constructor(url:string) {
        this.url = url
    }

    //Get Method
    async getPost(endPoint: string): Promise<IPost[]> {
        const response = await fetch(`${this.url}/${endPoint}`);
        const data = await response.json();
        console.log(response.status);

        return data
    }

    
}