
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';


import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTasks } from './actions/tasks';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
