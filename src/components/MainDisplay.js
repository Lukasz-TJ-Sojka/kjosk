import React from 'react';
import { FoundationsForm } from './FoundationsForm';
import { CategoriesForm } from './CategoriesForm';

export const MainDisplay =(props)=> {
    const { type , payload } = props.displayedItem;

    switch (type) {
        case 'initial':
            return (
                <div class = 'main-display'></div>
            )

        case 'delete':
            return (
                <div class = 'main-display'>
                    <h3>TRWA USUWANIE</h3>
                </div>
            )

        case 'sending':
            return (
                <div class = 'main-display'>
                    <h3>TRWA WYSYŁANIE</h3>
                </div>
            )

        case 'success' :
            return (
                <div class = 'main-display'>
                    <h3>{payload}</h3>
                </div>
            )


        case 'foundation':

            return <div class = 'main-display'>
                
                <h3>FUNDACJA</h3>
                <h2>{payload.name}</h2>
                <p>Id: {payload.id}</p>
                <p>Nazwa: {payload.name}</p>
                <p>Krótki opis: {payload.shortDescription}</p>
                <p>Pełny opis: {payload.htmlDescription}</p>
                <p>Id kategorii: {payload.foundationCategoryId}</p>
                <p>Fundacja globalna: {payload.isGlobal ? <span>TAK</span> : <span>NIE</span>}</p>
                
                <button class = "secondary" data-item = { payload.id } data-type = { type } onClick = {(e) => props.editHandleClick(e)}>Edytuj wpis</button>
                <button class = "secondary" data-item = { payload.id } data-type = { type } onClick = {(e) => props.deleteHandleClick(e)}>Usuń wpis</button>
            </div>
            

        case 'editFoundation':
            return <div class = 'main-display'> 
                <h3>EDYTUJ WPIS:</h3>
                <h2>FUNDACJA {payload.name}</h2>
                <FoundationsForm displayedItem = {props.displayedItem} updateItem = {props.updateItem}/>
            </div>

        case 'addFoundation':
            return <div class = 'main-display'>
                <h3>DODAJ FUNDACJĘ:</h3>
                <FoundationsForm displayedItem = {props.displayedItem} updateItem = {props.updateItem}/>
            </div>


        case 'category':

            return <div class = 'main-display'>
                
                <h3>KATEGORIA FUNDACJI</h3>
                <h2>{payload.name}</h2>
                <p>Id: {payload.id}</p>
                <p>Nazwa: {payload.name}</p>
                <p>Opis: {payload.description}</p>
                <p>Fundacje:</p>
                
                <button class = "secondary" data-item = { payload.id } data-type = { type } onClick = {(e) => props.editHandleClick(e)}>Edytuj wpis</button>
                <button class = "secondary" data-item = { payload.id } data-type = { type } onClick = {(e) => props.deleteHandleClick(e)}>Usuń wpis</button>
            </div>

        case 'editCategory':
            return <div class = 'main-display'> 
                <h3>EDYTUJ WPIS:</h3>
                <h2>KATEGORIA FUNDACJI {payload.name}</h2>
                <CategoriesForm displayedItem = {props.displayedItem} updateItem = {props.updateItem}/>
            </div>

        case 'addCategory':
            return <div class = 'main-display'>
                <h3>DODAJ KATEGORIĘ FUNDACJI:</h3>
                <CategoriesForm displayedItem = {props.displayedItem} updateItem = {props.updateItem}/>
            </div>

            
    }
}