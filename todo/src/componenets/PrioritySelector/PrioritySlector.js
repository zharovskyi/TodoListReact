import React from 'react';
// import PropTypes from 'prop-types';

const PrioritySelector = ({ options, value, onChange }) => (
    <select name="priority" value={value} onChange={onChange}>
        {options.map(option => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>
);