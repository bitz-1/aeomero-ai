import React from 'react'

const Navabar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> Aeomero-Ai</span>
      <ul className="list">
        <li className="listItem">
          <img src="https://images.pexels.com/photos/5665104/pexels-photo-5665104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="" className="avatar" />
        </li>
        <li className="listItem">BitzTech</li>
        <li className="listItem">Logout</li>
      </ul>

    </div>
  )
}

export default Navabar