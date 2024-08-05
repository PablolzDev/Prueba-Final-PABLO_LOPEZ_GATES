import { IPost } from "../model/IPost";

export class PostController {
    url: string;

    constructor(url:string) {
        this.url = url
    }

    async getPost(endPoint: string): Promise<IPost[]> {
        const response = await fetch(`${this.url}/${endPoint}`);
        const data = await response.json();
        console.log(response.status);

        return data
    }

    
}