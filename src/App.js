import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './features/Posts/Postlist';
import AddPost from './features/Posts/AddPost';
import EditPost from './features/Posts/Editpost';
import SinglePost from './features/Posts/Singlepost';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Posts}/>
                <Route path="/addpost" component={AddPost}/>
                <Route path="/editpost/:id" component={EditPost}/>
                <Route path="/singlepost/:id/:title/:comment" component={SinglePost}/>
            </Switch>
        </Router>
    );
}

export default App;
