import React from 'react'

const Label = props => {
    if (props.show) {
        return (<div className='label'>{props.children}</div>)
    }
    else return null;
}

export default Label

Label.defaultProps ={
    show: true
}