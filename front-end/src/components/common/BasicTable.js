import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ComponentTitle from './ComponentTitle';

export default function BasicTable({ title, data }) {
    const columns = [
        {
            field: 'close_date',
            headerName: '날짜',
            flex: 1,
            valueFormatter: (params) =>
                new Date(params.value).toLocaleDateString('ko-KR'),
        },
        { field: 'ticker', headerName: '티커', flex: 1 },
        { field: 'close', headerName: '종가', flex: 1, type: 'number' },
        {
            field: 'chg',
            headerName: '등락률',
            flex: 1,
            renderCell: (params) => (
                <span
                    style={{
                        color: params.value >= 0 ? 'green' : 'red',
                        fontWeight: 600,
                    }}
                >
                    {(params.value * 100).toFixed(2)}%
                </span>
            ),
        },
    ];
    const rows = data.map((row, index) => ({
        id: index,
        ...row,
    }));
    return (
        <div style={{ height: 600, width: '50%', margin: '0 auto' }}>
            <ComponentTitle title="미너비니 스크리닝 통과 종목" />
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[10, 25, 50]}
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'close_date', sort: 'desc' }],
                    },
                }}
                disableRowSelectionOnClick
                density="compact"
            />
        </div>
    );
}
