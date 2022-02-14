
const Filter = ({filter, handleChange}) => {
    return (

        <div className="form-group">
            <label htmlFor="" className="form-group-label">Фильтр:</label>
            <input value={filter} name="filter" onChange={handleChange} type="text" className="form-group-input" placeholder="по имени 'жертвы'" />
        </div>
    )
}

export default Filter;