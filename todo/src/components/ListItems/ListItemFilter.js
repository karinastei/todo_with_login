import React, {useEffect, useState} from 'react';
import './ListItemFilter.css';

const ListItemFilter = (listItemFilterData) => {

    const [priority, setPriority] = useState('low');

    const priorityChangeHandler = (event) => {
        setPriority(event.target.value)
    };

    useEffect(() => {
        const filterData = {
            priority: priority
        }
        listItemFilterData.onSaveFilterData(filterData)
    }, [listItemFilterData, priority])

    return (
        <div className='listItem-filter'>
            <div className='listItem-filter__control'>
                <label>Filter by priority</label>
                <select onChange={priorityChangeHandler}>
                    <option value='low'>low</option>
                    <option value='medium'>medium</option>
                    <option value='high'>high</option>
                </select>
            </div>
        </div>
    );
};

export default ListItemFilter;
