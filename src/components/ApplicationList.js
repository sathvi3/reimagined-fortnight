import React from 'react';
import DataTable from 'react-data-table-component';

function ApplicationList({ applicationData }) {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Application Name',
            selector: row => row.name,
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
            name: 'Updated At',
            selector: row => row.updatedAt,
        },
    ];

    let arr = [];

    const data = applicationData.map((app) => {
        arr.push({
            id: app.id,
            name: app.name,
            description: app.description,
            createdAt: app.createdAt,
            updatedAt: app.updatedAt, 
        });
    })

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

export default ApplicationList;