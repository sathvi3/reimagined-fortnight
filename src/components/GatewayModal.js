import React, { useState } from 'react';
import axios from 'axios';

import '../css/GatewayModal.css';

function GatewayModal({ closeModal }) {
    const [gatewayName, setGatewayName] = useState('');
    const [description, setDescription] = useState('');
    const [gatewayID, setGatewayID] = useState('');

    function formSubmit() {
        axios.post('http://3.110.220.190:8090/api/gateways',{
            "gateway": {
              "description": description,
              "gatewayId": gatewayID,
              "name": gatewayName,
              "tenantId": "52f14cd4-c6f1-4fbd-8f87-4025e1d49242"
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
                    Gateway Name: <input name='Gateway Name' type='text' value={gatewayName} onChange={(e) => {
                        setGatewayName(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Gateway Description: <input name='Gateway Description' type='text' value={description} onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                </div>
                <div className='modal-input'>
                    Gateway ID: <input name='Gateway ID' type='text' value={gatewayID} onChange={(e) => {
                        setGatewayID(e.target.value);
                    }} />
                </div>

                <div className='btn'>
                <button className='btn-gateway' onClick={formSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default GatewayModal;