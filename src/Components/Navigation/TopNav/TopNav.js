import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from '../../../Assets/Images/ExportImages';
import { SearchIcon, FilterIcon, MenuIcon } from '../../../Assets/Icons/ExportIcons';
import EmailSearchForm from '../../Forms/FilterForm';
import useEmailSearch from '../../../Utils/Hooks/Search';

const TopNav = ({ onClick }) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [lastClickedItem, setLastClickedItem] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const allEmails = useSelector((state) => state.emails);
  const { searchParams, setSearchParams } = useEmailSearch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSuggestions(getFilteredSuggestions(value));
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setLastClickedItem(null);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleFilterClick = () => {
    setLastClickedItem('filter');
  };

  const getFilteredSuggestions = (value) => {
    return ['Suggestion1', 'Suggestion2', 'Suggestion3', 'Suggestion4', 'Suggestion5', 'Suggestion6', 'Suggestion7', 'Suggestion8', 'Suggestion9']
      .filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase()));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length < 1){
      return dispatch({ type: 'SEARCH_EMAILS', payload: allEmails });
    }

    const filteredEmails = allEmails.filter((email) => {
      return Object.values(email).some((value) =>
        String(value).toLowerCase().includes(inputValue.toLowerCase())
      );
    });

    dispatch({ type: 'SEARCH_EMAILS', payload: filteredEmails });
  };

  return (
    <div className="top-nav">
      <div className='navigation-logo'>
        <MenuIcon className='icon' onClick={onClick}/>
        <img src={logo} alt='Gmail logo' className='gmail-logo'/>
      </div>
      <div className={`navigation-search ${isInputFocused && 'on-focus'}`}>
        <form onSubmit={handleSearchSubmit}>
          <div className='search-input'>
            <SearchIcon className='icon'/>
            <input
              type='text'
              placeholder='Search mail'
              className='search-input'
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <FilterIcon className='icon' onClick={handleFilterClick}/>
          </div>
        </form>
        {lastClickedItem === 'filter' ? (
          <EmailSearchForm />
        ) : (
          isInputFocused && (
            <div className='suggestion-list'>
              {suggestions.map((suggestion, index) => (
                <div key={index} className='suggestion-item'>{suggestion}</div>
              ))}
              {suggestions.length > 7 && <button className='show-all-button'>Show All</button>}
            </div>
          )
        )}
      </div>
      <div className='navigation-buttons'></div>
    </div>
  );
};

export default TopNav;
