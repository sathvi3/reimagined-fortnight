import React from 'react';
import DataTable from 'react-data-table-component';

function DeviceProfileList({ deviceProfileData }) {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Device Profile Name',
            selector: row => row.name,
        },
        {
            name: 'MAC Version',
            selector: row => row.macVersion,
        },
        {
            name: 'Region',
            selector: row => row.region,
        },
        {
            name: 'OTAA',
            selector: row => row.supprotsOtaa,
        },
        {
            name: 'Created At',
            selector: row => row.createdAt,
        },
    ];

    let arr = [];

    const data = deviceProfileData.map((devProf) => {
        arr.push({
            id: devProf.id,
            name: devProf.name,
            deviceProfileName: devProf.deviceProfileName,
            macVersion: devProf.macVersion,
            region: devProf.region,
            supprotsOtaa: devProf.supprotsOtaa,
            createdAt: devProf.createdAt,
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

export default DeviceProfileList;