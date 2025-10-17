import { getLastUpdated, makeDateyyyymmdd } from '../utils/date';
import { apiClient } from './apiClient';

export const fetchMinerviniResults = () =>
    apiClient('screening/minervini', {
        body: { date: makeDateyyyymmdd(getLastUpdated(2)) },
    });
