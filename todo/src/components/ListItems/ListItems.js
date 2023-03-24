import ListItem from "./ListItem";
import './ListItems.css'
import Card from "../UI/Card";
import ListItemFilter from "./ListItemFilter";
import {useState} from "react";

const ListItems = (props) => {

    const [selectedPriority, setSelectedPriority] = useState(null);

    const filterListItemDataHandler = (enteredFilterData) => {
        setSelectedPriority(enteredFilterData.priority);
    }

    let listItemElement = props.listItemData.filter(listItem => listItem.priority === selectedPriority)

    return (
        <Card className="listItems">
            <ListItemFilter onSaveFilterData={filterListItemDataHandler}/>
            {listItemElement.length === 0
                && <p className="errorHandler">No tasks found</p>}
            {listItemElement.length > 0 &&
                listItemElement.map(listItem => (
                    <ListItem key={listItem.id}
                              id={listItem.id}
                              description={listItem.description}
                              date={listItem.date}
                              priority={listItem.priority}
                    />
                ))}
        </Card>
    );
};

export default ListItems;
