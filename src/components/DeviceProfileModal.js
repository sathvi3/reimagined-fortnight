import React, { useState } from 'react';
import axios from 'axios';

import '../css/GatewayModal.css';

function DeviceProfileModal({ closeModal }) {
    const [id, setId] = useState('');
    const [deviceProfileName, setDeviceProfileName] = useState('');
    const [description, setDescription] = useState('');

    function formSubmit() {
        axios.post('http://3.110.220.190:8090/api/device-profiles',{
                "deviceProfile": {
                  "abpRx1Delay": 0,
                  "abpRx1DrOffset": 0,
                  "abpRx2Dr": 0,
                  "abpRx2Freq": 0,
                  "classBPingSlotDr": 0,
                  "classBPingSlotFreq": 0,
                  "classBPingSlotPeriod": 0,
                  "classBTimeout": 0,
                  "classCTimeout": 0,
                  "description": description,
                  "deviceStatusReqInterval": 0,
                  "flushQueueOnActivate": true,
                  "id": id,
                  "adrAlgorithmId": "default ADR algorithm (LoRa only)",
                  "macVersion": "LORAWAN_1_0_3",
                  "name": deviceProfileName,
                  "regParamsRevision": "A",
                  "region": "EU868",
                  "supportsClassB": false,
                  "supportsClassC": false,
                  "supportsOtaa": true,
                  "tenantId": "52f14cd4-c6f1-4fbd-8f87-4025e1d49242",
                  "uplinkInterval": 60
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
                    ID: <input name='Device Profile ID' type='text' value={id} onChange={(e) => {
                        setId(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Device Profile Name: <input name='Device Profile Name' type='text' value={deviceProfileName} onChange={(e) => {
                        setDeviceProfileName(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Device Profile Description: <input name='Description' type='text' value={description} onChange={(e) => {
                        setDescription(e.target.value);
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