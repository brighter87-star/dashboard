import React from 'react';
import MinerviniScreeningResults from '../components/dashboard/MinerviniScreeningResults';
import PageTitle from '../components/common/PageTitle';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Tabs from '../components/router/Tabs';

export default function Dashboard() {
    return (
        <div>
            <HashRouter>
                <PageTitle title="미너비니 추세추종 트레이딩" />
                <Tabs />
                <Routes>
                    <Route
                        path="/screening"
                        element={<MinerviniScreeningResults />}
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}
