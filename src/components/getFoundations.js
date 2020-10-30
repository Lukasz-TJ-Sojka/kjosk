export const getFoundations = async ()=> {

    const result = await fetch('https://kjosk-sample-api.azurewebsites.net/api/Foundation');
    const fetchedData = await result.json();
    return fetchedData;

}