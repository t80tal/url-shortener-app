import React, { useId } from 'react'
import Wrapper from '../../assets/wrappers/SearchBar'
import { Link, useNavigate } from 'react-router-dom'
import { uiActions } from '../../store/ui-store/ui'
import { useDispatch, useSelector } from 'react-redux'

const SearchBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchBar = useSelector(state => state.ui.searchBar)
    const onSearching = event => {
        dispatch(uiActions.onSearching(event.target.value))
    }

    return (
        <Wrapper>
            <input value={searchBar.value} onChange={onSearching} type='search' placeholder='Search...' />
            {searchBar.isOpen &&
                (<ul className='dropdown'>
                    {searchBar.results.map(result => {
                        return (
                            <li onClick={() => {
                                dispatch(uiActions.onSearching(''))
                                switch (result.type) {
                                    case 'link':
                                        navigate(result.link)
                                        break
                                    case 'action':
                                        dispatch(result.action())
                                        break
                                    default:
                                        break
                                }

                            }}>
                                {result.title}
                            </li>
                        )
                    })}
                </ul>)}
        </Wrapper>
    )
}

export default SearchBar