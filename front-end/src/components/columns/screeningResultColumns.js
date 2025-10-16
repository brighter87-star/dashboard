// components/columns/screeningResultColumns.js
import * as React from 'react';
import { numberFormatter, pctFormatter } from '../../utils/formatter';

const ChipPct = ({ value }) => (
    <span
        style={{
            padding: '2px 6px',
            borderRadius: 6,
            fontWeight: 700,
            background: value >= 0 ? '#ecfdf5' : '#fef2f2',
            color: value >= 0 ? '#047857' : '#b91c1c',
        }}
    >
        {pctFormatter(value, 2, true)}
    </span>
);

export const screeningResultColumns = [
    { field: 'T', headerName: '티커', flex: 1, minWidth: 90 },
    {
        field: 'c',
        headerName: '종가',
        type: 'number',
        flex: 1,
        minWidth: 90,
        valueFormatter: (value) => numberFormatter(value, 2),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'v',
        headerName: '거래량',
        type: 'number',
        flex: 1,
        minWidth: 110,
        valueFormatter: (value) => numberFormatter(value, 0),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'high_52w',
        headerName: '52주 고가',
        type: 'number',
        flex: 1,
        minWidth: 110,
        valueFormatter: (value) => numberFormatter(value, 2),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'low_52w',
        headerName: '52주 저가',
        type: 'number',
        flex: 1,
        minWidth: 110,
        valueFormatter: (value) => numberFormatter(value, 2),
        align: 'right',
        headerAlign: 'right',
    },
    // RS_xx (지표 값: 숫자)
    {
        field: 'RS_50',
        headerName: 'RS 50',
        type: 'number',
        flex: 1,
        minWidth: 90,
        valueFormatter: ({ value }) => numberFormatter(value, 0),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'RS_150',
        headerName: 'RS 150',
        type: 'number',
        flex: 1,
        minWidth: 100,
        valueFormatter: ({ value }) => numberFormatter(value, 0),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'RS_200',
        headerName: 'RS 200',
        type: 'number',
        flex: 1,
        minWidth: 100,
        valueFormatter: (value) => numberFormatter(value, 2),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'stock_ret_50',
        headerName: '50일 상승률',
        flex: 1,
        minWidth: 110,
        renderCell: ({ value }) => <ChipPct value={value} />,
        sortComparator: (a, b) => (a ?? -Infinity) - (b ?? -Infinity),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'stock_ret_150',
        headerName: '150일 상승률',
        flex: 1,
        minWidth: 120,
        renderCell: ({ value }) => <ChipPct value={value} />,
        sortComparator: (a, b) => (a ?? -Infinity) - (b ?? -Infinity),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'stock_ret_200',
        headerName: '200일 상승률',
        flex: 1,
        minWidth: 120,
        renderCell: ({ value }) => <ChipPct value={value} />,
        sortComparator: (a, b) => (a ?? -Infinity) - (b ?? -Infinity),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'RS_50_pct',
        headerName: 'RS 50',
        flex: 1,
        minWidth: 110,
        sortComparator: (a, b) => (a ?? -Infinity) - (b ?? -Infinity),
        valueFormatter: (value) => pctFormatter(value, 2, false),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'RS_150_pct',
        headerName: 'RS 150',
        flex: 1,
        minWidth: 120,
        sortComparator: (a, b) => (a ?? -Infinity) - (b ?? -Infinity),
        valueFormatter: (value) => pctFormatter(value, 2, false),
        align: 'right',
        headerAlign: 'right',
    },
    {
        field: 'RS_200_pct',
        headerName: 'RS 200',
        flex: 1,
        minWidth: 120,
        sortComparator: (a, b) => (a ?? -Infinity) - (b ?? -Infinity),
        valueFormatter: (value) => pctFormatter(value, 2, false),
        align: 'right',
        headerAlign: 'right',
    },

    // RS_pct_mean
    {
        field: 'RS_pct_mean',
        headerName: 'RS 종합',
        flex: 1,
        minWidth: 130,
        sortComparator: (a, b) => (a ?? -Infinity) - (b ?? -Infinity),
        valueFormatter: (value) => pctFormatter(value, 2, false),
        align: 'right',
        headerAlign: 'right',
    },
];
