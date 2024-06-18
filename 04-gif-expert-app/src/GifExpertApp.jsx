import { useState } from 'react';
import { AddCategory, GifGrid} from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState (['One Piece']);
  const onAddCategory = (newCategory) => {
	if (categories.includes(newCategory)) return;
	// categories.push(newCategory);
	// console.log(newCategory);
	setCategories([newCategory, ...categories]);
  }

  return (
	<>
	  <h1>GifExpertApp</h1>
	  <AddCategory
		// setCategories = {setCategories}
		onNewCategory= {onAddCategory}// onNewCategory= { (value) => onAddCategory( value ) } 
	  />
	  {
		categories.map(category => 
		< GifGrid 
			key={ category } 
	  		category={ category }
	  	/> 
		)
	  }

	</>
  )
}

