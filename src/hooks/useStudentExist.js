import React, { useState, useEffect } from "react";
import Axios from 'axios';

const useStudentExist = () => {
    const [lastID, setLastID] = useState('');


    // await Axios.get(`http://localhost:3001/api/get/checkStudExists/${c}`)
    // .then(res => setExists(res.data))
    //   .catch(err => console.log("FDS " +err))
    //   // {setSetExists(exists)}let string_=(r[0]["exists"])  
    // console.log("EXISTS???: " + arguments[0])


    useEffect(() => {
        const Getcategory1 = async () => {
            let c = "12345";
      Axios(`http://localhost:3001/api/get/checkStudExists/${c}`)
        .then(res => setLastID(res.data["exists"]))
        .catch(err => console.log(err))
        };
        Getcategory1();
    }, []);
    // if(isNaN(lastID)){
    //     setLastID("1");
    //     console.log("GETMAXXID CHECK: "+lastID)
    // }
    console.log("GETMAXXID HOOK: "+ (lastID) )

    return lastID;
};

export default useStudentExist;