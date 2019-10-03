import React from 'react';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({ items, onDeleteTask }) =>
    items.length > 0 && (
        <ul className={styles.list}>
            {items.map(item => (
                <li key={item.id}>
                    <Task {...item} onDeleteTask={() => onDeleteTask(item.id)} />
                </li>
            ))}
        </ul>
    );




//   TaskList.propTypes = {
//     items: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//       }).isRequired,
//     ).isRequired,
//     onDeleteTask: PropTypes.func.isRequired,
//     onUpateCompleted: PropTypes.func.isRequired,
//     onUpdatePriority: PropTypes.func.isRequired,
//   };

export default TaskList;