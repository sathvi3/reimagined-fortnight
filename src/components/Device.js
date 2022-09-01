import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

import DeviceModal from "./DeviceModal";
import DeviceList from './DeviceList';
import DeviceEditModal from './DeviceEditModal';

import '../css/Gateway.css';

function Application() {
    const [openDeviceModal, setDeviceModal] = useState(false);
    const [openEditModal, setEditModal] = useState(false);
    const [deviceData, setDeviceData] = useState([]);

    useEffect(() => {
        axios.get('http://3.110.220.190:8090/api/devices?limit=20&applicationId=de3bac8a-efa5-4c19-bcd2-8db7e17c0159', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjaGlycHN0YWNrIiwiaXNzIjoiY2hpcnBzdGFjayIsInN1YiI6IjI2N2Q4NjAyLWM3NDAtNDVjNy05ZmNhLWNkOTJmZmMxMTkwZCIsInR5cCI6ImtleSJ9.-xA13eRYdNJew1A3BLli0d1xC1D332CXz1PhkVSMT10` 
            }
        })
        .then((res) => {
            // console.log(res.data.result);
            setDeviceData(res.data.result);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    console.log(deviceData);

    return (
        <>
            <button className='btn-add-gateway' onClick={() => {
                setDeviceModal(true);
            }}>Add Device</button>
            <button className='btn-add-gateway' onClick={() => {
                setEditModal(true);
            }}>Edit Device</button>
            <div className='list-div'>
            <DeviceList deviceData={deviceData} />
            </div>
            { openDeviceModal && <DeviceModal closeModal={setDeviceModal} /> }
            { openEditModal && <DeviceEditModal closeModal={setEditModal} /> }
        </>
    );
}

export default Application;