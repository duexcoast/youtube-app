import React, {useState} from 'react'

const SearchBar = ({onSearchSubmit}) => {
  const [term, setTerm] = useState("")

  const onFormSubmit = (e) => {
    e.preventDefault()
    onSearchSubmit(term)
  }

  return (
    <div style={{ marginTop: 16 }} className="search-bar ui segment">
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="field">
        <label>Video Search</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </div>
    </form>
  </div>
  )
}

export default SearchBar