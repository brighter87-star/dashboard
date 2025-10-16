import { useState, useEffect } from 'react';
import { fetchMinerviniResults } from '../../../api/screeningApi';

export function useMinerviniResults() {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMinerviniResults()
            .then((data) => {
                setResult(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
                console.error('데이터를 불러오는데 실패했습니다.', error);
            });
    }, []);

    return { result, loading, error };
}
