import React from 'react'

export const Spinner = ({ sinAltura }) => {
    return (
        <div className="lds-roller" style={sinAltura ? {marginTop:'0'} : null}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    )
}
