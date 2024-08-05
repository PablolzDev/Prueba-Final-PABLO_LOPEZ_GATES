import { PostController } from "./post.controller";
import { createPostCard } from "./render.controller";

const url = 'https://api-posts.codificando.xyz'
const cardContainer = document.querySelector("#posts-container") as HTMLDivElement

async function showPosts() {
    const postController = new PostController(url)
    const posts = await postController.getPost("posts")
    const getFilter = sessionStorage.getItem('gmailToken')
    console.log(getFilter);
    
    if (getFilter) {
        posts.forEach(post => {
            const card = createPostCard(post);
            cardContainer.appendChild(card);

        });
        
    }
}
showPosts()