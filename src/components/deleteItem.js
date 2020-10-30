export const deleteItem = async (itemId , type)=> {

    let fetchUrl = null;
    
    type === "foundation" ? fetchUrl = `https://kjosk-sample-api.azurewebsites.net/api/Foundation/${itemId}` : fetchUrl = `https://kjosk-sample-api.azurewebsites.net/api/FoundationCategory/${itemId}`
    
    const result = await fetch(fetchUrl , {
        method: "DELETE"
    });
    console.log(result.ok);

    //const fetchedData = await result.json();
    return result.ok;

}