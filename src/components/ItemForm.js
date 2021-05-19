import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce', 
  })
  
  function handleInputChanges(event){

    let key = event.target.name;
    let formValue = event.target.value; 
    setFormData({...formData, [key] : formValue});
  }
  
  function handleFormSubmit(event){
    event.preventDefault()

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formData.name,
      category: formData.category,
    };

    onItemFormSubmit(newItem)
    setFormData({
      name: '',
      category: 'Produce', 
    });
  }

  
  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Add Item
        <input type="text" name="name" value={formData.name} onChange={handleInputChanges}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleInputChanges}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
