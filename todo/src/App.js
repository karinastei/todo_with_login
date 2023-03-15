import './App.css';
import ListItems from "./components/ListItems/ListItems";
import NewListItem from "./components/ListItems/NewListItem";
import {useState} from "react";

const DUMMY_LIST_ITEMS = [
    {
        id: 1,
        date: new Date(2023, 1, 31),
        description: 'Study JS',
        priority: 'high'
    },
    {
        id: 2,
        date: new Date(2023, 2, 11),
        description: 'Study React',
        priority: 'high'
    },
    {
        id: 2,
        date: new Date(2023, 3, 9),
        description: 'Study Astrology',
        priority: 'low'
    }
]

const App = () => {
    const [listItem, setListItem] = useState(DUMMY_LIST_ITEMS)

    const addListItemHandler = (listItemData) => {
        setListItem((previousListItem) => {
            return [listItemData, ...previousListItem]
        })
    }

    return (
        <div className="App">
            <NewListItem onAddlistItem={addListItemHandler}></NewListItem>
            <ListItems listItemData={listItem}></ListItems>
        </div>
    );
}

export default App;
