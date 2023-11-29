import React from 'react'
import { NavLink } from 'react-router-dom'


const AdminNavigation = () => {


 
  return (
    <div className='adminnaviigation-wrapper'>
    
    <ul>
        <NavLink to='.'><li>Dashboard</li></NavLink>
        <NavLink to='editdeals'><li>Add/Edit Deals</li></NavLink>
        <NavLink to='editmenu'><li>Add/Edit Menu</li></NavLink>
        <NavLink to='sellreports'><li>Sell Reports</li></NavLink>
        <NavLink to='statics'><li>Website Statics</li></NavLink>
    </ul>

    </div>
  )
}

export default AdminNavigation