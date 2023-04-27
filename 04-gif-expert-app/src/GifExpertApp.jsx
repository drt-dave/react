import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const  [categories, setCategories] = useState([ 'One Punch','Dragon Ball'] );

    const onAddCategory = (newCategory) => {
        //setCategories(categories.concat('Valorant'));
        setCategories([newCategory,...categories]);

        //categories.push(newCategory);


    }
    
    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory 
                //setCategories= {setCategories}
                onNewCategory = {(value)=>onAddCategory(value)}

            />

            {/*Listado de Gif*/}
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category}>{category}</li>
                    })
                }
                {/* <li>ABC</li> */}
            </ol>
                {/*Gif item*/}
        </>
    )
};

