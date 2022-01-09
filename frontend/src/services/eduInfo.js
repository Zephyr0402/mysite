import backendURL from './backendURL';

export const getEducationInfo_Card = async () => {
    const res = await fetch(backendURL + '/eduInfo/cardInfo', {
        mode: 'no-cors'
    });
    return res.json();
}