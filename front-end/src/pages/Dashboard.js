import React from 'react';
import MinerviniScreeningResults from '../components/dashboard/MinerviniScreeningResults';
import PageTitle from '../components/common/PageTitle';

export default function Dashboard() {
    return (
        <div>
            <PageTitle title="미너비니 추세추종 트레이딩" />
            <MinerviniScreeningResults />
        </div>
    );
}
