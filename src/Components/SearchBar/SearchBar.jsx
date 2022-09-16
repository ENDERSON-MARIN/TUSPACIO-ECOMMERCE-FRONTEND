import React, { useState } from 'react' // useEffect lo borre por que no se usaba
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';
// import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux'
import { getDetail, getName } from '../../actions/index' // getAllProducts lo borre por que no se usaba
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder, data }) => {

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const handleFilter = (event) => {
    navigate('/home')
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  
  const handleSearch = () => {
    dispatch(getName(wordEntered))
    setFilteredData([])
    setWordEntered('')
    
    
  }

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(getName(wordEntered))
      setFilteredData([])
      setWordEntered('')
    }
  }

  

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} onKeyDown={(e) => _handleKeyDown(e)}/>
        <div className='searchIcon'>
          
              <SearchIcon id='searchBtn' onClick={handleSearch}/> 
              
          
        </div>
      </div>

      { filteredData.length !== 0 
          ? (
              <div className='dataResult'>
                { filteredData.slice(0, 6).map((value, key) => {
                  return (
                    <a 
                      
                      className='dataItem' onClick={ () => {
                      dispatch(getDetail(value.id))
                      navigate(`/${value.id}`)
                      clearInput() } } 
                    >
                      <p>{value.name}</p>
                    </a>
                  )
                })}
              </div>
            )
          : <div className='dataResult'>
              {
                wordEntered && <p id='noProduct'> No products found </p>
              }
            </div>
      }
      
    </div>
  )
}

export default SearchBar