import React from 'react';

export const FoundationsCategories =(props)=> {
    const categoriesList = props.categoriesList;
  
    const mainHandleClick =(e)=> {
            
        const categoryName = e.target.dataset.category;
        const [ displayedCategory ] = categoriesList.filter(el => el.name === categoryName);
        const displayedItem = {
            type: 'category',
            payload: displayedCategory
        }
        props.updateItem(displayedItem)

    }

    return (
        <div class = 'foundations-list'>
            <h2>LISTA KATEGORII:</h2>
            <button class = "main" data-type = "category" onClick = {(e) => props.addHandleClick(e)}>DODAJ KATEGORIĘ</button>
            <ul>
                {categoriesList.map(el => <li key={'fl' + el.id}>
                    <button class = "main" data-category = { el.name } onClick = {(e) => mainHandleClick(e)}>{el.name}</button>
                    
                    </li>)}
            </ul>

        </div>
    )
}