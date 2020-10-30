import React , { useState } from 'react';
import { sendJson } from './sendJson';

export const FoundationsForm =(props)=> {
    const { type , payload } = props.displayedItem;
    const [ formValues , changeValues ] = useState({
        ...payload    
    });

    const handleChange =(e)=> {
            changeValues({
                ...formValues,
                [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
            })
            console.log( formValues )
    } 

    const handleSubmit =(e)=> {
        props.updateItem(
            {
                type: 'sending',
                payload: null
            }
        )
        e.preventDefault();
        sendJson( type , formValues ).then((res)=>{
            const displayedItem = {
                type: 'success',
                payload: res
            }
            props.updateItem(displayedItem)
        });

    }

    

    return (
        <form id="editForm" >
            
            <label for = "name">Nazwa:</label>
            <input  id = "name" type="text" onChange = {(e)=>handleChange(e)} value = {formValues.name} />
            
            <label for = "shortDescription">Skrócony opis:</label>
            <input  id = "shortDescription" type = "textarea" onChange = {(e)=>handleChange(e)} value = {formValues.shortDescription}/>
            
            <label for = "htmlDescription">Pełny opis:</label>
            <input  id = "htmlDescription" type = "textarea" onChange = {(e)=>handleChange(e)} value = {formValues.htmlDescription}/>
            
            <label for = "foundationCategoryId">Identyfikator Kategorii:</label>
            <input  id = "foundationCategoryId" type = "number" onChange = {(e)=>handleChange(e)} value = {formValues.foundationCategoryId}/>
            
            <label for = "isGlobal">Fundacja globalna:</label> 
            <input  id = "isGlobal" type = "checkbox" onChange = {(e)=>handleChange(e)} defaultChecked = {formValues.isGlobal}/>

            <button type="submit" onClick = { e => handleSubmit(e)}>Wyślij</button>
            
        </form>
    )
}