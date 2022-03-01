import React, {useState} from "react";

export default function PostDetail({userId, name, company,}) {
    const [posts, setPosts] = useState([]);

    const nameClick = async (event) => {
        event.preventDefault();

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const postFound = await response.json();
        setPosts(postFound);
    };


    return (
        <div>
            <h1 onClick={nameClick}>{name === "Leanne Graham" ? name : null}</h1>
            <h3>{company.name === "Romaguera-Crona" ? company.name : null}</h3>
            <ol>
                {posts.map((post) => (<li key={post.id}><strong>{post.title}</strong> <p>{post.body}</p></li>))}
            </ol>
        </div>
    )
}