const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const apiClient = async (endpoint, { body, ...options } = {}) => {
    try {
        const fullUrl = new URL(endpoint, API_BASE_URL).href
        const config = {
            ...options,
            method: body? 'POST' : 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(body)
        };
        const response = await fetch(fullUrl, config)

        if(!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        if(response.status === 204) {
            return null
        }
        return await response.json();
    } catch (error) {
        console.error(`API call to ${endpoint} failed:`, error);
        throw error
    }
}
