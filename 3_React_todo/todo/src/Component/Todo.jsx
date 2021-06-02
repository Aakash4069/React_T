//es7
//rcc

import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        taskList: ["Task-1", "Task-2", "Task-3","Task-4"],
        // count: 0
    }


    deleteTask(cTask) {
        let filteredtasks = this.state.taskList.filter(function (task) {
            return task !== cTask;
        })
        this.setState({
            taskList: filteredtasks
        })
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <input type="text" />
                    <button>submit</button>

                </div>
                <div className="task-list">
                    <ul>
                        {this.state.taskList.map((task) => {
                            return(
                                <li className="tasklist" >
                                    <p>{task}</p>
                                    <button onClick={() => {
                                        this.deleteTask(task)
                                    }}>

                                  Delete  </button>

                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        )
    }
}
