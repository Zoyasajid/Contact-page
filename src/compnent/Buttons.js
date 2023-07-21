import React from 'react'

function Buttons() {
  return (
    <div className='btn-container'>
        <div className='sec-btn'>
            <button className='btn'>VIA SUPPORT CHAT</button>
            <button className='btn'>VIA CALL</button>
        </div>
        <button className='btn btn2'>VIA EMAIL FORM</button>
        <form className='inputs'>
        NAME: <input type='text' className='input' /><br/>
            MAIL: <input type='text'className='input' /><br/>
            TEXT: <input type='text'className='input inputText'/>
            {/* TEXT: <input type='text'className='input'placeholder="Your fav number"/> */}
            </form>    
            <button className='btn btn3'>SUBMIT </button>
            </div>
  )
}

export default Buttons