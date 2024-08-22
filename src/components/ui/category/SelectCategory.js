import React from 'react'
import { useState } from 'react';
import './category.css'
import ButtonUI from '../ButtonUI';
const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }
  const handleSubmit = () => {
    console.log('yo');
  }
  return (
    <div className="selection">
      <div className="filter-container">
        <div>Selectionner une Categorie:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">Aucune</option>
            <option value="Cyber Sécurité">Cyber Sécurité</option>
            <option value="Coding">Coding</option>
            <option value="Questions">Questions</option>
          </select>
        </div>
      </div>
      <ButtonUI lesClass={'btn bg-success text-white'} props='Crée le Post' handleState={handleSubmit} />
    </div>
  )
}

export default SelectCategory
