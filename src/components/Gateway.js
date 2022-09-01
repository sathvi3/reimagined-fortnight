import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

import GatewayList from './GatewayList';
import GatewayModal from './GatewayModal';

import '../css/Gateway.css';

function Gateway() {
    const [openGatewayModal, setGatewayModal] = useState(false);
    const [gatewayData, setGatewayData] = useState([]);

    useEffect(() => {
        axios.get('http://3.110.220.190:8090/api/gateways?tenantId=52f14cd4-c6f1-4fbd-8f87-4025e1d49242&limit=20', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjaGlycHN0YWNrIiwiaXNzIjoiY2hpcnBzdGFjayIsInN1YiI6IjI2N2Q4NjAyLWM3NDAtNDVjNy05ZmNhLWNkOTJmZmMxMTkwZCIsInR5cCI6ImtleSJ9.-xA13eRYdNJew1A3BLli0d1xC1D332CXz1PhkVSMT10` 
            }
        })
        .then((res) => {
            // console.log(res.data.result);
            setGatewayData(res.data.result);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    console.log(gatewayData);
    return (
        <>
            <button className='btn-add-gateway' onClick={() => {
                setGatewayModal(true);
            }}>Add Gateway</button>
            <div className='list-div'>
            <GatewayList gatewayData={gatewayData} />
            </div>
            { openGatewayModal && <GatewayModal closeModal={setGatewayModal} /> }
        </>
    );
}

export default Gateway;