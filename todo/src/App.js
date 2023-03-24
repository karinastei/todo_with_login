import './App.css';
import ListItems from "./components/ListItems/ListItems";
import NewListItem from "./components/ListItems/NewListItem";
import {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UserList";

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
    const [users, setUsers] = useState([]);
    const [listItems, setListItems] = useState(DUMMY_LIST_ITEMS);

    const addListItemHandler = (listItemData) => {
        setListItems((previousListItem) => {
            return [listItemData, ...previousListItem]
        })
    }
    const onAddUserHandler = (username, age) => {
        setUsers((prevUsers) => {
            return [
                ...prevUsers,
                {
                    id: Math.random().toString(),
                    name: username,
                    age: age
                }
            ]
        })
    }

    return (
        <div className="App">
            <AddUser onAddUser={onAddUserHandler}/>
            <UsersList users={users}/>
            <NewListItem onAddlistItem={addListItemHandler}></NewListItem>
            <ListItems listItemData={listItems}></ListItems>
        </div>
    );
}

export default App;
