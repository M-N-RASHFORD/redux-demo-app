import React from 'react';
import { Add_post } from './PostSlice';
import { useDispatch } from 'react-redux';

const AddPost = ({ history }) => {
    const [state, setState] = React.useState({ title: '', comment: '' })
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        });
    }
    const { title, comment } = state;
    return (
        <form>
            <h2>Add post here</h2>
            <input type="text" name="title" placeholder="title" onChange={handleChange}/>
            <input type="text" name="comment" placeholder="comment" onChange={handleChange}/>
            <input type="button" placeholder="Add" onClick={(e) => {
                e.preventDefault();
                dispatch(Add_post(title, comment));
                history.push("/");
            }} value="Add"/>
        </form>
    );
}

export default AddPost;
