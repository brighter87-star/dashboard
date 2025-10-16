import { apiClient } from "./apiClient";

export const fetchMinerviniResults = () => apiClient('screening/minervini', { body: { date: "2025-10-14" }});

