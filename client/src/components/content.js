import React from 'react'

export default function Content () {
  return (
    <div className='container'>
      <h2>Add a store</h2>
      <form id='stores'>
        <div className='form-element'>
          <label>Add a store name:</label>
          <input type='text' name='name' id='name' />
        </div>

        <div className='form-element'>
          <label>Add the address:</label>
          <input type='text' name='address' id='address' />
        </div>

        <div className='form-element'>
          <label>Add the phone:</label>
          <input type='text' name='phone' id='phone' />
        </div>

        <div className='form-element'>
          <button type='submit'>Add Store</button>
        </div>
      </form>
    </div>
  )
}
