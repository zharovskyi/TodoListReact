import React from 'react';
import styles from './TaskFilter.module.css';

const TaskFilter = ({ value, onChangeFilter }) => (
    <input
        type="text"
        className={styles.input}
        placeholder="Type to filter tasks..."
        value={value}
        onChange={onChangeFilter}
    />
);

// TaskFilter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChangeFilter: PropTypes.func.isRequired,
// };

export default TaskFilter;