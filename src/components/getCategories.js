export const getCategories = async ()=> {

    const result = await fetch('https://kjosk-sample-api.azurewebsites.net/api/FoundationCategory');
    const fetchedData = await result.json();
    return fetchedData;

}