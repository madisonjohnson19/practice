import React, { useState, useEffect } from "react";
import Axios from 'axios';

// const [lastID, setLastID] = useState('');
const useGetMaxIdReqAssistance = () => {
    // let lastID ="";
    const [lastID, setLastID] = useState('');

    useEffect(() => {
        const Getcategory1 = async () => {
      Axios('http://localhost:3001/api/delete/cancelRequest/maxID')
        .then(res => setLastID(1+parseInt(res.data, 10)))
        .catch(err => console.log(err))
        };
        Getcategory1();
    }, []);
    if(isNaN(lastID)){
        setLastID("1");
        console.log("GETMAXXID CHECK: "+lastID)
    }
    console.log("GETMAXXID HOOK: "+ (lastID) )

    return lastID;
};

export default useGetMaxIdReqAssistance;