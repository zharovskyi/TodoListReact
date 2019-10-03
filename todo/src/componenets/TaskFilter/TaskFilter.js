import React from 'react';
import styles from './TaskFilter.module.css';

const TaskFilter = () => (
    <input
        type="text"
        className={styles.input}
        placeholder="Type to filter tasks..."
    />
);

// TaskFilter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChangeFilter: PropTypes.func.isRequired,
// };

export default TaskFilter;