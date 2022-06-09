import axios from 'axios';
// export const baseDomain = 'https://tribratanews-metrobekasi.metro.polri.go.id';
export const hostName = typeof window === 'object' ? `http://${window.location.hostname}`:"";
const baseDomainAPI = 'https://adm-metrobekasi.metro.polri.go.id/p2b-service';
// const baseDomainAPI = `https://${hostName}/service`; //PRODUCTION
// const baseDomainAPI = `http://${hostName}/service`;
// const baseDomainAPI = `https://metrobekasi.gnusa.id/p2b-service`;

export const customHeaders = {
    Accept: 'application/json',
};


export const baseUrl = `${baseDomainAPI}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const cborHeaders = {
    Accept: 'application/cbor',
};

export const cborUrl = axios.create({
    baseUrl,
    headers: cborHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
