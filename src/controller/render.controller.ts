import { IPost } from "../model/IPost";



export const createPostCard = (post: IPost): HTMLElement => {
    let {title,body,creationDate,status,platform,postUrl,multimediaUrl} = post
    const cardContainer = document.createElement('div');
    cardContainer.className = "container bg-white rounded-lg shadow-md flex justify-center content-center text-sm leading-normal mb-5";

    const cardContent = document.createElement('div');
    cardContent.className = "w-min lg:w-1/2 bg-white mb-4";
    
    const innerContainer = document.createElement('div');
    innerContainer.className = "container mx-auto flex flex-col lg:flex-col jus mt-3 text-sm leading-normal";

    

    // Text content section
    const textContainer = document.createElement('div');
    textContainer.className = "w-7/8 p-3 pl-0";

    const headerContainer = document.createElement('div');
    headerContainer.className = "flex justify-between";

    const title1 = document.createElement('span');
    title1.className = "font-bold";
    title1.innerText = title


    const platform1 = document.createElement('span');
    platform1.className = "text-grey-dark";
    platform1.innerText = platform;

   
    headerContainer.appendChild(title1);
    headerContainer.appendChild(platform1);

    // Post body section
    const bodyContainer = document.createElement('div');
    bodyContainer.className = "mb-4";

    const bodyText = document.createElement('p');
    bodyText.className = "mb-6";
    bodyText.textContent = body;


    const createDate = document.createElement('p');
    createDate.className = "mb-6";
    createDate.className = "text-sm"
    createDate.textContent = "Creation Date: " + creationDate;
   


    const postLink = document.createElement('p');
    postLink.className = "mb-4";

    const postLinkAnchor = document.createElement('a');
    postLinkAnchor.href = postUrl;
    postLinkAnchor.className = "text-teal";
    postLinkAnchor.textContent = postUrl;

    postLink.appendChild(postLinkAnchor);

    const multimediaLink = document.createElement('a');
    multimediaLink.href = "#";

    const multimediaImg = document.createElement('img');
    multimediaImg.src = multimediaUrl;
    multimediaImg.alt = "tweet image";
    multimediaImg.className = "border border-solid border-grey-light rounded-sm";

    multimediaLink.appendChild(multimediaImg);

    
    bodyContainer.appendChild(bodyText);
    bodyContainer.appendChild(postLink);
    bodyContainer.appendChild(multimediaLink);
    bodyContainer.appendChild(createDate)

    

    // Append all parts to the card
 
    textContainer.appendChild(headerContainer);
    textContainer.appendChild(bodyContainer);

 
    innerContainer.appendChild(textContainer);

    cardContent.appendChild(innerContainer);
    cardContainer.appendChild(cardContent);

    return cardContainer;
};



