import React from 'react';

export const FoundationsList =(props)=> {
    const foundationsList = props.foundationsList;
  
    const mainHandleClick =(e)=> {
            
        const foundationName = e.target.dataset.foundation;
        const [ displayedFoundation ] = foundationsList.filter(el => el.name === foundationName);
        const displayedItem = {
            type: 'foundation',
            payload: displayedFoundation
        }
        props.updateItem(displayedItem)

    }

    return (
        <div class = 'foundations-list'>
            <h2>LISTA FUNDACJI</h2>
            <button class = "main" data-type = 'foundation' onClick = {(e) => props.addHandleClick(e)}>DODAJ FUNDACJĘ</button>
            <ul>
                {props.foundationsList.map(el => <li key={'fl' + el.id}>
                    <button class = "main" data-foundation = { el.name } onClick = {(e) => mainHandleClick(e)}>{el.name}</button>
                    
                    </li>)}
            </ul>

        </div>
    )
}