import React, { useEffect, useState } from 'react';
import DataTable from '../common/DataTable';
import { useMinerviniResults } from '../../features/screening/hooks/useMinerviniResults';
import { screeningResultColumns } from '../columns/screeningResultColumns';
import { getLastUpdated, parseDate } from '../../utils/date';
import { useSearchParams } from 'react-router-dom';

export default function MinerviniScreeningResults() {
    const { result, loading, error } = useMinerviniResults();
    const [searchParams, setSearchParams] = useSearchParams();
    const initPage = Math.max(0, parseInt(searchParams.get('page') ?? '0', 10));
    const initPageSize = Math.max(
        5,
        parseInt(searchParams.get('pageSize') ?? '15', 10)
    );
    const initSort = (() => {
        const s = searchParams.get('sort'); // e.g. "ticker,asc"
        if (!s) return [];
        const [field, sort] = s.split(',');
        return field ? [{ field, sort }] : [];
    })();

    const [paginationModel, setPaginationModel] = useState({
        page: initPage,
        pageSize: initPageSize,
    });
    const [sortModel, setSortModel] = React.useState(initSort);

    useEffect(() => {
        const next = new URLSearchParams(searchParams);
        next.set('page', String(paginationModel.page));
        next.set('pageSize', String(paginationModel.pageSize));
        if (sortModel?.[0]) {
            next.set('sort', `${sortModel[0].field},${sortModel[0].sort}`);
        } else {
            next.delete('sort');
        }
        setSearchParams(next, { replace: true }); // 히스토리 오염 방지
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginationModel, sortModel]);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p> 테이블을 불러오지 못했습니다. {error.message}</p>;

    const { year, month, day } = parseDate(getLastUpdated());

    const rows = result.map((r) => ({
        ...r,
    }));

    return (
        <div>
            <DataTable
                title="미너비니 스크리닝 통과 종목(beta)"
                caption={`last updated: ${year}년 ${month}월 ${day}일 오전 7시 30분`}
                rows={rows}
                columns={screeningResultColumns}
                initialSort={[{ field: 'RS_50', sort: 'desc' }]}
                // 자주 안 보는 컬럼은 기본 비가시화(원하시면 조정)
                columnVisibilityModel={{
                    high_52w: false,
                    low_52w: false,
                    RS_50: false,
                    RS_150: false,
                    RS_200: false,
                }}
            />
        </div>
    );
}
