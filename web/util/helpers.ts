import fetch from 'isomorphic-unfetch'

export const callApi = async (url: string, data: object): Promise<any> => {    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    
    return await response.json()
}

export const getBaseUrl = (req: any): string => {
    const protocol = (req && req.headers.referer) ? req.headers.referer.split('://')[0] : "http" // default https, for deployed scenarios
    return req ? `${protocol}://${req.headers.host}` : "" // empty string as fallback base url
}

export const getRandomElement = (arr: Array<any>) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

export function isEmpty(obj: Object) {
    return Object.keys(obj).length === 0;
}