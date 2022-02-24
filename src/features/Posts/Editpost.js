import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Edit_post } from './PostSlice';
import { useHistory } from 'react-router-dom';

const EditPost = ({ match }) => {
    const [state, setState] = useState({ title: '', comment: '' });
    const history = useHistory();
    const { id } = match.params;
    const on_Change = (event) => {
        setState({
            ...state, [event.target.name]: event.target.value
        });
    }
    const dispatch = useDispatch();
    const { title, comment } = state;
    return (
        <div>
            <h2>Edit the comment from here</h2>
            <form>
                <input type="text" name="title" placeholder="title" onChange={on_Change}/>
                <input type="text" name="comment" placeholder="comment" onChange={on_Change}/>
                <input type="button" value="Change post" onClick={() => {
                    dispatch(Edit_post({id: id, title, comment}));
                    history.push("/");
                }}/>
            </form>
        </div>
    );
}

export default EditPost;
