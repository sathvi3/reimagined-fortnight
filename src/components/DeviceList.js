/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import DataTable from 'react-data-table-component';

function DeviceList({ deviceData }) {
    const columns = [
        {
            name: 'Device Name',
            selector: row => row.name,
        },
        {
            name: 'Device Profile Name',
            selector: row => row.deviceProfileName,
        },
        {
            name: 'Device EUI',
            selector: row => row.devEui,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Created At',
            selector: row => row.createdAt,
        },
        {
            name: 'Last Seen At',
            selector: row => row.lastSeenAt,
        },
        {
            name: 'Updated At',
            selector: row => row.updatedAt,
        },
    ];

    let arr = [];

    const data = deviceData.map((dev) => {
        arr.push({
            name: dev.name,
            deviceProfileName: dev.deviceProfileName,
            devEui: dev.devEui,
            description: dev.description,
            createdAt: dev.createdAt,
            lastSeenAt: dev.lastSeenAt,
            updatedAt: dev.updatedAt, 
        });
    });

    return (
        <>
            <div>
            <DataTable
                columns={columns}
                data={arr}
            />
            </div>
        </>
    );
}

export default DeviceList;