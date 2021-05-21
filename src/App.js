
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';


import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

import { getTasks } from './actions/tasks';
import { getUsers } from './actions/users';

const App = () => {
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState(null);
    const [screenContent, setScreenContent] = useState([])

    useEffect(() => {
        dispatch(getTasks());
        dispatch(getUsers());
    }, [dispatch])
    return (
        <div className="App">
            <Header currentUser={currentUser} setCurrentUser={setCurrentUser}
                    screenContent={screenContent} setScreenContent={setScreenContent} />
            <Body currentUser={currentUser} setCurrentUser={setCurrentUser}
                    screenContent={screenContent} setScreenContent={setScreenContent} />
            <Footer />
        </div>
    );
}

export default App;
