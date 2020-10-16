import React from 'react'


export default function Masthead() {
    return (
        <div className="masthead">
            <img src={require('./logo.png')} alt="" style={{width: '25%', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
            <h4 style={{textAlign: 'center'}}>Search below from a huge database of recipes</h4>
        </div>
    )
}
