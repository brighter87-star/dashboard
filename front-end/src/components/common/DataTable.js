// components/common/DataTable.jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ComponentTitle from './ComponentTitle';

export default function DataTable({
    title,
    subTitle,
    caption,
    rows,
    columns,
    height = 640,
    initialSort = [],
    checkboxSelection = false,
    pageSizeOptions = [15, 30, 50, 100],
    columnVisibilityModel, // { colField: true/false }
    onColumnVisibilityModelChange, // optional
}) {
    return (
        <div style={{ height, width: '100%', margin: '0 auto'}}>
            <ComponentTitle title={title} caption={caption} />
            <DataGrid
                rows={rows}
                columns={columns}
                density="compact"
                disableRowSelectionOnClick
                checkboxSelection={checkboxSelection}
                pageSizeOptions={pageSizeOptions}
                initialState={{
                    sorting: { sortModel: initialSort },
                    pagination: { paginationModel: { pageSize: 15 } },
                }}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={onColumnVisibilityModelChange}
            />
        </div>
    );
}
