import React from 'react';

const SinglePost = ({ match, history }) => {
    return (
        <div>
            <h3>{match.params.title}</h3>
            <p>{match.params.comment}</p>
            <button tyep="button" onClick={() => {
                history.push(`/editpost/${match.params.id}`);
            }}>Edit post</button>
        </div>
    );
}

export default SinglePost;
