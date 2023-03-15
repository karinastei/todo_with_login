import './ListItemDate.css'

const ListItemDate = (props) => {
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const month = props.date.toLocaleString('en-US', {month:'long'})
    const year = props.date.getFullYear()

    return(
        <div className='listItem-date'>
            <div className='listItem-date__month'>{month}</div>
            <div className='listItem-date__day'>{day}</div>
            <div className='listItem-date__year'>{year}</div>
        </div>
    )
}

export default ListItemDate
