import React, { useState, useEffect } from 'react';
import { fetchMinerviniResults } from '../../api/screeningApi';

function MinerviniScreeningResults() {
    const [text, setText] = useState('Loading...');

    useEffect(() => {
        fetchMinerviniResults()
            .then((data) => {
                setText(data);
            })
            .catch((error) => {
                console.error('데이터를 불러오는데 실패했습니다.', error);
            });
    }, []);

    console.log(text);

    return (
        <div>
            <h1> 미너비니 스크리닝 통과 종목 </h1>
            <div>{text}</div>
        </div>
    );
}

export default MinerviniScreeningResults;
