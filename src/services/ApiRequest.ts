const API_URL = process.env.API_URL || 'http://localhost:5000';

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  _limit?: number;
  rating_like?: string;
}

export const defaultOptions: RequestOptions = {
  page: 1,
  _limit: 10,
};

export function buildQueryString(param: ApiQueryParams) {
  const searchParams = new URLSearchParams();

  Object.entries(param).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}

export async function apiRequest(
  endpoint: string,
  query: ApiQueryParams = {},
  options: RequestOptions = {}
) {
  const mergedOptions: RequestOptions = {
    ...defaultOptions,
    ...options,
  };

  const queryString: string = buildQueryString({
    ...query,
    ...mergedOptions,
  });

  try {
    const response = await fetch(`${API_URL}/${endpoint}${queryString}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}
