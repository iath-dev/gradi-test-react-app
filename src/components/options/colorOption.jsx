import React from 'react';
import classnames from 'classnames'

import './option.css';

const ColorOption = ({ color = '#fff', selected = false, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={classnames('option', {
                'selected': selected
            })}
            style={{ backgroundColor: color.toLowerCase() }}
        >

        </div>
    );
}
 
export default ColorOption;
