import React, { useState, useContext, useEffect } from 'react'
import { BoxContext } from '../BoxContext';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ProblemList = () => {
    //const {setBox} = useContext(BoxContext);
    const [problems, setProblems] = useState([]);
    //const [loading, setLoading] = useState(false);

    const size = 20;
    const location = useLocation();
    const path = location.pathname;
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;


    const getProblems = async () => {
        const url = `/problem/list.json?page=${page}&size=${size}`;
        setLoading(true);
        const res = await axios(url);
        console.log(res.data[0]);
        
    }

    useEffect(() => {
        getProblems();
    }, [page]);


    

    return (
        <div className='my-5'>
            <h1>문제 리스트</h1>
        </div>
    )
}

export default ProblemList