import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Frames() {
    const [framesData, setFramesData] = useState([]);

    useEffect(() => {
        axios.get('http://ec2-3-110-220-190.ap-south-1.compute.amazonaws.com:3000/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjaGlycHN0YWNrIiwiaXNzIjoiY2hpcnBzdGFjayIsInN1YiI6IjI2N2Q4NjAyLWM3NDAtNDVjNy05ZmNhLWNkOTJmZmMxMTkwZCIsInR5cCI6ImtleSJ9.-xA13eRYdNJew1A3BLli0d1xC1D332CXz1PhkVSMT10` 
            }
        })
        .then((res) => {
            console.log(res.data);
            setFramesData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <div>
            { JSON.stringify(framesData) }
        </div>
    );
}

export default Frames;