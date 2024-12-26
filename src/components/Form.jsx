import React, { useState } from 'react'

function Form({onAddedItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddedItem(newItem);
    
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h2>What do you need for your 😍 trip?</h2>
      <select value={quantity} onChange={(e) => {
        setQuantity(Number(e.target.value))
      }}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder='Items...'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  )
}

export default Form;
