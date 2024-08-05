import { PostController } from "./post.controller";
import { createPostCard } from "./render.controller";

const url = 'https://api-posts.codificando.xyz'
const cardContainer = document.querySelector("#posts-container") as HTMLDivElement

//With this method I tried to show the posts by user, but i couldn't achieve it , I tried a lot of ways , but i couldn't
async function showPosts() {
    const postController = new PostController(url)
    const posts = await postController.getPost("posts") //Bring the method to show the posts
    const getFilter = sessionStorage.getItem('gmailToken') // Bring the session storage
    console.log(getFilter);
    
    //But here i couln't did the filter 
    if (getFilter) {
        posts.forEach(post => {
            const card = createPostCard(post);
            cardContainer.appendChild(card);

        });
        
    } 

    
}
showPosts()