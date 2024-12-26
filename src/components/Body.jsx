import React, { useState } from 'react'
import Logo from './Logo';
import Form from './Form';
import PackagingList from './PackagingList';
import Stats from './Stats';

function Body() {
  const [items, setItems] = useState([]);

  function handleAddedItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearItem() {
    let clearItem = window.confirm("Are you sure to delete all items?")
    if (clearItem) setItems([]); 
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddedItem={handleAddedItems} />
      <PackagingList item={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItem={handleClearItem} />
      <Stats item={items} />
    </div>
  )
}

export default Body;
