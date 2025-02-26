import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
    const [posts, setPosts] = useState([]);

    function fetchPosts() {
        axios.get("http://localhost:3000/api/posts")
            .then((res) => setPosts(res.data))
    }

    useEffect(fetchPosts, []);
    return (
        <>
            <ul>
            {
                posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <span>{post.title}</span>
                            <figure>
                                <img height={100} width={100} src={post.url} alt="" />
                            </figure>
                            <p>{post.content}</p>
                        </li>
                    )
                })
            }
            </ul>
            
        </>
    )
};
export default Card;