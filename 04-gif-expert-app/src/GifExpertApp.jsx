import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const  [categories, setCategories] = useState([ 'One Punch'] );

    const onAddCategory = (newCategory) => {
        
        //esta condición evalua si la categoria ya aparece en la lista
        if (categories.includes(newCategory)) return;

        //setCategories(categories.concat('Valorant'));
        setCategories([newCategory,...categories]);

        //categories.push(newCategory);


    }
    
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories= {setCategories}
                onNewCategory = {(value)=>onAddCategory(value)}

            />

                { 
                    categories.map( ( category) => ( 

                        <GifGrid key = { category } category={category}/>

                    ))
                }
        </>
    )
};

