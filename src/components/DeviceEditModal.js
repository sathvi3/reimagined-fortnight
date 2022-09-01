import React, { useState } from 'react';
import axios from 'axios';

import '../css/GatewayModal.css';

function DeviceEditModal({ closeModal }) {
    const [devEui, setDevEui] = useState('');
    const [appKey, setAppKey] = useState('');

    function formSubmit() {
        axios.post(`http://3.110.220.190:8090/api/devices/${devEui}/keys`,{
                "deviceKeys": {
                  "appKey": appKey,
                  "nwkKey": appKey
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
                    Device EUI: <input name='Device EUI' type='text' value={devEui} onChange={(e) => {
                        setDevEui(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Application Key: <input name='Application Key' type='text' value={appKey} onChange={(e) => {
                        setAppKey(e.target.value);
                    }} />
                </div>

                <div className='btn'>
                <button className='btn-gateway' onClick={formSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default DeviceEditModal;