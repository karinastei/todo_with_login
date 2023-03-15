import './ListItem.css'
import ListItemDate from "./ListItemDate";
import Card from "../UI/Card";
import React from 'react';

const ListItem = (listItemData) => {

    return (
        <Card className="listItem">
            <ListItemDate date={listItemData.date}></ListItemDate>
            <div className="listItem__description">
                <h2 className="listItem__description">{listItemData.description}</h2>
                <div className="listItem__priority">{listItemData.priority}</div>
            </div>
        </Card>
    )
}

export default ListItem
