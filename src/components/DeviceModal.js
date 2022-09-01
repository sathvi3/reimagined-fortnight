import React, { useState } from 'react';
import axios from 'axios';

import '../css/GatewayModal.css';

function DeviceProfileModal({ closeModal }) {
    const [deviceName, setDeviceName] = useState('');
    const [description, setDescription] = useState('');
    const [deviceEUI, setDeviceEUI] = useState('');
    const [deviceProfile, setDeviceProfile] = useState('');
    const [applicationId, setApplicationId] = useState('');

    function formSubmit() {
        axios.post('http://3.110.220.190:8090/api/devices',{
            "device": {
                  "applicationId": applicationId,
                  "description": description,
                  "devEui": deviceEUI,
                  "deviceProfileId": deviceProfile,
                  "isDisabled": false,
                  "name": deviceName,
                  "skipFcntCheck": true
                }
          },{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjaGlycHN0YWNrIiwiaXNzIjoiY2hpcnBzdGFjayIsInN1YiI6IjI2N2Q4NjAyLWM3NDAtNDVjNy05ZmNhLWNkOTJmZmMxMTkwZCIsInR5cCI6ImtleSJ9.-xA13eRYdNJew1A3BLli0d1xC1D332CXz1PhkVSMT10` 
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        closeModal(false);
    }

    return (
        <div className='modal-parent'>
            <div className='modal'>
                <div className='modal-input'>
                    Device Name: <input name='Device Name' type='text' value={deviceName} onChange={(e) => {
                        setDeviceName(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Device Description: <input name='Description' type='text' value={description} onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Device EUI: <input name='Description' type='text' value={deviceEUI} onChange={(e) => {
                        setDeviceEUI(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Device Profile: <input name='Description' type='text' value={deviceProfile} onChange={(e) => {
                        setDeviceProfile(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Application Id: <input name='Application Id' type='text' value={applicationId} onChange={(e) => {
                        setApplicationId(e.target.value);
                    }} />
                </div>

                <div className='btn'>
                <button className='btn-gateway' onClick={formSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default DeviceProfileModal;