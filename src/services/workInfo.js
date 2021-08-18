import backendURL from './backendURL';

export const getWorkInfo_Card = async () => {
    const res = await fetch(backendURL + '/workInfo/cardInfo', {});
    return res.json();
}