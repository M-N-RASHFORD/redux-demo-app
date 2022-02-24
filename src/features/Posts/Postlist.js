import React from 'react';
import { useSelector } from 'react-redux';

const Posts = ({ history }) => {
    const posts = useSelector(state => state.posts);
    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.comment}</p>
                            <button type="button" onClick={() => {
                                history.push(`/singlepost/${post.id}/${post.title}/${post.comment}`);
                            }}>View comment</button>
                        </li>
                    );
                })}
            </ul>
            <button type="button" onClick={() => {
                history.push("/addpost");
            }}>Add post</button>
        </div>
    );
}

export default Posts;
