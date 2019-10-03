import React, { Component } from 'react';
import styles from './TaskEditor.module.css';


class TaskEditor extends Component {

    state = {
        text: '',
        priority: 'low',
    }
    handleChange = (e) => {
        // const { name, value } = e.target;
        this.setState({
            // [name]: value,
            [e.target.name]: e.target.value,
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddTask({ ...this.state })
        this.setState = ({
            text: '',
            priority: 'low',
        })
    }



    render() {
        const { text, priority } = this.state
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    name="text"
                    placeholder="Enter task content..."
                    value={text}
                    onChange={this.handleChange}

                />
                <label className={styles.label}>
                    Select task priority:
                    <select name="priority" value={priority} onChange={this.handleChange}>
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
                </label>

                <button type="submit">Create</button>
            </form>
        );
    }
}

export default TaskEditor;