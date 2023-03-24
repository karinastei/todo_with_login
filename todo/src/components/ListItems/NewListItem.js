import React from 'react';
import "./NewListItem.css"

import ListItemForm from "./ListItemForm";

const NewListItem = (newListItemData) => {

    const saveListItemDataHandler = (enteredListItemData) => {
        const listItemData = {
            ...enteredListItemData,
            id: Math.random().toString()
        }
        newListItemData.onAddlistItem(listItemData)
    }
    return (
        <div className="new-listItem">
            <ListItemForm onSaveListItemData={saveListItemDataHandler}></ListItemForm>
        </div>
    )
}
export default NewListItem;
