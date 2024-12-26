import React from 'react'

function Stats({ item }) {
  if(!item.length)
  return (
    <footer className='stats'>
      <p>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    </footer>
    )
  const totalItem = item.length;
  const packedItem = item.filter(item => item.packed).length;
  const percentItem = Math.round((packedItem / totalItem) * 100);
  return (
    <footer className='stats'>
      {
        percentItem === 100 ? (
          <p>
            <em>You already packed your item. Ready to go ✈</em>
          </p>
        ) : (
            <p>
              <em>You have {totalItem} amount of items, out of you already packed {packedItem} ({percentItem}%)</em>
            </p>
        )
      }
    </footer>
  )
}

export default Stats;
