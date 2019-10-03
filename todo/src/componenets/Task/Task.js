import React from 'react';
import PropTypes from 'prop-types';
// import PrioritySelector from '../PrioritySelector/PrioritySelector';
import styles from './Task.module.css';
import Priority from '../../utils/Priority';

const options = Object.values(Priority);

const Task = ({ text, priority, completed, onDeleteTask }) => (
    <div className={`${styles.task} y
    ${styles[`${priority}Priority`]}`}>
        <p className={styles.text}>{text}</p>

        <hr />
        <div className={styles.actions}>
            <button type="button" onClick={onDeleteTask}>
                Delete
      </button>
            <select name="priority" value=''>
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                {/* {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))} */}
            </select>
            {/* <PrioritySelector
       
      /> */}

            <label>
                Completed:
        <input
                    type="checkbox"

                />
            </label>
        </div>
    </div>
);

// Task.propTypes = {
//   id: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   priority: PropTypes.string.isRequired,
//   completed: PropTypes.bool.isRequired,
//   onDeleteTask: PropTypes.func.isRequired,
//   onUpateCompleted: PropTypes.func.isRequired,
//   onUpdatePriority: PropTypes.func.isRequired,
// };

export default Task;