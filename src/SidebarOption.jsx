import React from 'react'
import './SidebarOption.css'

function SidebarOption({title, Icon}) {
return (
        <div className='SidebarOptions'>
            {Icon && <Icon className='SidebarOption_icon'/>}
            {title ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption