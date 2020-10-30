export const sendJson = async (type , payload)=> {
    console.log(type)

    let method = null;
    let fetchingUrl = null;
    let endMessage = null;

    switch (type) {
        case 'editFoundation' :
            method = 'PUT';
            fetchingUrl = `https://kjosk-sample-api.azurewebsites.net/api/Foundation/`;
            endMessage = 'zapisano zmiany';
        break;

        case 'addFoundation' :
            method = 'POST';
            fetchingUrl = `https://kjosk-sample-api.azurewebsites.net/api/Foundation/`;
            endMessage = 'Fundacja dodana';
        break;

        case 'editCategory' :
            method = 'PUT';
            fetchingUrl = `https://kjosk-sample-api.azurewebsites.net/api/FoundationCategory/`;
            endMessage = 'zapisano zmiany';
        break;

        case 'addCategory' :
            method = 'POST';
            fetchingUrl = `https://kjosk-sample-api.azurewebsites.net/api/FoundationCategory/`;
            endMessage = 'Kategoria fundacji dodana';
        break;
    }

    const result = await fetch(fetchingUrl , {
        
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    
    return endMessage

}