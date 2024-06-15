import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // const [isLoggedin, setIsLoggedin] = useState(false);

    // const loggedUser = useSelector(state => state.auth.loggedUser);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!loggedUser) {
    //         navigate('/login');
    //     } else {
    //         setIsLoggedin(true);
    //     }
    // }, [loggedUser, navigate]);

    useEffect(() => {
        if(!localStorage.getItem('token')){
          navigate('/login');
        }
      }, []);

    return (
        // <>
        //     {isLoggedin && (
        //         <>
        //             <AddTask />
        //             <TaskList />
        //         </>
        //     )}
        // </>
        <>
        <AddTask />
        <TaskList />
        </>
    );
}

export default Home;
