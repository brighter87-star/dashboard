import * as React from 'react';
import DataTable from '../common/DataTable';
import { useMinerviniResults } from '../../features/screening/hooks/useMinerviniResults';
import { screeningResultColumns } from '../columns/screeningResultColumns';
import { getLastUpdated } from '../../utils/date';

export default function MinerviniScreeningResults() {
    const { result, loading, error } = useMinerviniResults();

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    const { year, month, day } = getLastUpdated();

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
