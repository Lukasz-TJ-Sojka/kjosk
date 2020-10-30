import React , { useState } from 'react';
import { sendJson } from './sendJson';

export const CategoriesForm =(props)=> {
    const { type , payload } = props.displayedItem;
    const [ formValues , changeValues ] = useState({
        ...payload    
    });

    const handleChange =(e)=> {
            changeValues({
                ...formValues,
                [e.target.id]: e.target.value
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
            
            <label for = "description">Skrócony opis:</label>
            <input  id = "description" type = "textarea" onChange = {(e)=>handleChange(e)} value = {formValues.description}/>

            <button type="submit" onClick = { e => handleSubmit(e)}>Wyślij</button>
            
        </form>
    )
}