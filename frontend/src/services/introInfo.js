import backendURL from './backendURL';

export const getIntroInfo = async () => {
    //const res = await axiosAPI.get('/eduInfo/cardInfo');
    const res = await fetch(backendURL + '/introInfo', {});
    return res.json();
}

export const getSocialLinks = async () => {
    //const res = await axiosAPI.get('/eduInfo/cardInfo');
    const res = await fetch(backendURL + '/introInfo/socialLinks', {});
    return res.json();
}