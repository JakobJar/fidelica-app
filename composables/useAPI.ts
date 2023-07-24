import {$fetch, FetchOptions, FetchResponse} from "ofetch";
import {UseFetchOptions} from "#app";

const getDefaultConfig = <T>(): FetchOptions & UseFetchOptions<T> => {
    const config = useRuntimeConfig();
    return {
        headers: {
            "Accept": "application/json",
        },
        credentials: "include",
        baseURL: config.public.apiBaseUrl
    };
}

export const useAPI = <T, O extends FetchOptions = any>(url: string, opts?: O): Promise<FetchResponse<T>> => {
    return $fetch.raw(url, {
        ...getDefaultConfig(),
        ...opts
    });
}

export const useReactiveAPI = <T>(url: string, opts?: UseFetchOptions<T>) => {
    return useFetch(url, {
        ...getDefaultConfig<T>(),
        ...opts
    });
}