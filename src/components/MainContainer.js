import React, { useState, useEffect } from 'react';

import { FoundationsList } from './FoundationsList';
import { FoundationsCategories } from './FoundationsCategories';
import { MainDisplay } from './MainDisplay';

import { getFoundations } from './getFoundations';
import { getCategories } from './getCategories';

import { deleteItem } from './deleteItem';

export const MainContainer =()=> {
    
    const [foundationsList, updateList] = useState([]);
    const [categoriesList, updateCategories] = useState([]);


    const [displayedItem, updateItem] = useState(
        {
            type: 'initial',
            payload: null
        }
    );

    

    useEffect(() => {
        getFoundations().then((foundations) => updateList(foundations))
        }, [displayedItem]);

    useEffect(() => {
        getCategories().then((categories) => updateCategories(categories))
        }, [displayedItem]);


    const addHandleClick =(e)=> {
        const itemType = e.target.dataset.type;

        if (itemType === 'foundation') {
        
            const displayedItem = {
                type: 'addFoundation',
                payload: {
                    name: null,
                    shortDescription: null,
                    htmlDescription: null,
                    foundationCategoryId: null,
                    isGlobal: false
                }
            }
            updateItem(displayedItem)

        } else if (itemType === 'category') {

            const displayedItem = {
                type: 'addCategory',
                payload: {
                    name: null,
                    description: null,
                    foundations: []
                }
            }
            updateItem(displayedItem)

        }
    }


    const deleteHandleClick =(e)=> {
        updateItem(
            {
                type: 'delete',
                payload: null
            }
        )
        
        deleteItem(e.target.dataset.item , e.target.dataset.type).then(()=>{
            const displayedItem = {
                type: 'initial',
                payload: null
            }
            updateItem(displayedItem)
        });
    }

    const editHandleClick  =(e)=> {
        const itemId = parseInt(e.target.dataset.item);
        const itemType = e.target.dataset.type;

        if (itemType === 'foundation') {
            const [ displayedFoundation ] = foundationsList.filter(el => el.id === itemId);
            const displayedItem = {
                type: 'editFoundation',
                payload: displayedFoundation 
            }
            updateItem(displayedItem)
        } else if (itemType === 'category') {
            const [ displayedCategory ] = categoriesList.filter(el => el.id === itemId);
            const displayedItem = {
                type: 'editCategory',
                payload: displayedCategory 
            }
            updateItem(displayedItem)
        }
    }

    return (
        <div className = 'main-container'>
            <FoundationsList foundationsList = { foundationsList } updateItem = { updateItem } addHandleClick = { addHandleClick } />
            <FoundationsCategories categoriesList = { categoriesList } updateItem = { updateItem } addHandleClick = { addHandleClick }/>
            <MainDisplay displayedItem = { displayedItem } updateItem = { updateItem } deleteHandleClick = { deleteHandleClick } editHandleClick = { editHandleClick } />
            
        </div>
    )
}