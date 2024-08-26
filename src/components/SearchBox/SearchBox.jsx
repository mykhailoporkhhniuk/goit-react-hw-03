import css from './SearchBox.module.css'

const SearchBox = ({ filterValue, handleFilter }) => {
    return (
        <div>
            <p>Find contact by name</p>
            <input className={css.input} type="text" value={filterValue} onInput={handleFilter} />
        </div>
    );
}

export default SearchBox