const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchMinerviniResults = async () => {
    try {
        console.log(API_BASE_URL);
        return API_BASE_URL;
    } catch (error) {
        console.error('Error Fetching MinerviniScreeningResults', error);
    }
};
