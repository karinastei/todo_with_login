import React, {useState} from 'react';
import "./ListItemForm.css"

const ListItemForm = (listItemFormData) => {

    const [enteredDescription, setEnteredDescription] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredPriority, setEnteredPriority] = useState('')

    const descriptionChangeHandler = (description) => {
        setEnteredDescription(description.target.value)
    }
    const dateChangeHandler = (date) => {
        setEnteredDate(date.target.value)
    }
    const priorityChangeHandler = (priority) => {
        setEnteredPriority(priority.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const listItemData = {
            description: enteredDescription,
            date: new Date(enteredDate),
            priority: enteredPriority
        }
        listItemFormData.onSaveListItemData(listItemData)
        setEnteredDescription('')
        setEnteredDate('')
        setEnteredPriority('')
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-listItem__controls">
                <div className="new-listItem__control">
                    <label>New Task</label>
                    <input type="text" value={enteredDescription} onChange={descriptionChangeHandler}/>
                </div>
                <div className="new-listItem__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-listItem__control">
                    <label>Priority</label>
                    <select value={enteredPriority} onChange={priorityChangeHandler}>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </div>
            </div>
            <div className="new-listItem__actions">
                <button type="submit">Add list item</button>
            </div>
        </form>)
}

export default ListItemForm
