import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

function GatewayList({ gatewayData }) {
    const columns = [
        {
            name: 'Gateway Name',
            selector: row => row.name,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Gateway ID',
            selector: row => row.gatewayId,
        },
        {
            name: 'Created At',
            selector: row => row.createdAt,
        },
        {
            name: 'Last Seen',
            selector: row => row.lastSeenAt,
        },
    ];

    const arr = [];

    const data = gatewayData.map((gateway) => {
        arr.push({
            name: gateway.name,
            description: gateway.description,
            gatewayId: gateway.gatewayId,
            createdAt: gateway.createdAt,
            lastSeenAt: gateway.lastSeenAt, 
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

export default GatewayList;