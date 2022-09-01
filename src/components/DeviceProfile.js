import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

import DeviceProfileModal from './DeviceProfileModal';
import DeviceProfileList from './DeviceProfileList';

import '../css/Gateway.css';

function DeviceProfile() {
    const [openDeviceProfileModal, setDeviceProfileModal] = useState(false);
    const [deviceProfileData, setDeviceProfileData] = useState([]);

    useEffect(() => {
        axios.get('http://3.110.220.190:8090/api/device-profiles?tenantId=52f14cd4-c6f1-4fbd-8f87-4025e1d49242&limit=20', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjaGlycHN0YWNrIiwiaXNzIjoiY2hpcnBzdGFjayIsInN1YiI6IjI2N2Q4NjAyLWM3NDAtNDVjNy05ZmNhLWNkOTJmZmMxMTkwZCIsInR5cCI6ImtleSJ9.-xA13eRYdNJew1A3BLli0d1xC1D332CXz1PhkVSMT10` 
            }
        })
        .then((res) => {
            // console.log(res.data.result);
            setDeviceProfileData(res.data.result);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    console.log(deviceProfileData);
    return (
        <>
            <button className='btn-add-gateway' onClick={() => {
                setDeviceProfileModal(true);
            }}>Add Device Profile</button>
            <div className='list-div'>
            <DeviceProfileList deviceProfileData={deviceProfileData} />
            </div>
            { openDeviceProfileModal && <DeviceProfileModal closeModal={setDeviceProfileModal} /> }
        </>
    );
}

export default DeviceProfile;