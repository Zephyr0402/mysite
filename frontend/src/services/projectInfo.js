import backendURL from './backendURL';

export const getProjectInfo_Card = async () => {
    const res = await fetch(backendURL + '/projectInfo/cardInfo', {});
    return res.json();
}