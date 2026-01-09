import React from 'react'
import { Link } from 'react-router-dom'

function Settings() {
    return (
        <>
        <div>
            parametre
            <Link to="/sellerProfile">
                    <p className="text-blue-700 text-center text-xl cursor-pointer">
                      return
                    </p>
                 </Link>

        </div>
        </>
    )
}

export default Settings
