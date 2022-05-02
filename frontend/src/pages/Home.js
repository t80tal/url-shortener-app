import React from 'react'
import Wrapper from '../assets/wrappers/Home'
import BasePage from './BasePage'
import mainImage from '../assets/images/main.svg'
import Card from '../components/Card'
import { Link, useNavigate } from 'react-router-dom'
import { urlValidator } from '../validators'
import useInput from '../hooks/useInput'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useDispatch } from 'react-redux'
import { setErrorModal } from '../store/ui-store/ui-actions'

// Card
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Home = () => {
    const dispatch = useDispatch()
    const { value: urlValue, setValue: setUrlValue, inputClass: urlClass, result: urlResult } = useInput(urlValidator, 'Enter a valid url.')
    const navigate = useNavigate()

    const shortenHandler = () => {
        if (urlValue && urlValidator(urlValue)) {
            localStorage.setItem('tmp-given-url', urlValue)
            navigate('/register')
        } else {
            dispatch(setErrorModal(urlResult.message || "Please give a valid url"))
        }
    }

    return (
        <BasePage name="Home">
            <Wrapper>
                <div className='row'>
                    <div className='main-content'>
                        <h1>Short links in a second</h1>
                        <p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
                        <Link to='register' className='main-btn'>Get started for free</Link>
                    </div>
                    <div className='main-image'>
                        <img src={mainImage} alt='Main image of a person that pointing on the url bar in browser.' />
                    </div>
                </div>
                <div className='row'>
                    <input className={`search-input ${urlClass}`} placeholder='Shorten your link' value={urlValue} onChange={setUrlValue} />
                    <button className='main-btn' onClick={shortenHandler}>Shorten</button>
                </div>
                {/* <ErrorModal>asd</ErrorModal> */}
                <div className='row'>
                    <div className={`alert ${urlResult.type}`}>
                        {urlResult.message}
                    </div>
                    <h1>What our customers are saying</h1>
                    {/* Reviews */}
                    <Carousel responsive={responsive}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Carousel>
                </div>
            </Wrapper>
        </BasePage>
    )
}

export default Home