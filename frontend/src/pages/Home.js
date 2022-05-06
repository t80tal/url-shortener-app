import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import { useDispatch } from 'react-redux'

import 'react-multi-carousel/lib/styles.css'
import Wrapper from '../assets/wrappers/Home'
import BasePage from './BasePage'
import mainImage from '../assets/images/main.svg'
import { CustomerCard } from '../components'
import { urlValidator } from '../validators'
import useInput from '../hooks/useInput'
import { setErrorModal } from '../store/ui-store/ui-actions'
import AlertArea from '../components/UI/AlertArea'

// Customer review card sizes.
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
    // Navigate after submitting the shortening input.
    const navigate = useNavigate()

    // Create a short url input with validations and current class.
    const { value: urlValue, setValue: setUrlValue, inputClass: urlClass, result: urlResult } = useInput(urlValidator, 'Enter a valid url.')

    // On shortening handler, we redirect you to register / login page and then you will see the temporary url you've entered.
    const shortenHandler = () => {
        if (urlValue && urlValidator(urlValue)) {
            localStorage.setItem('tmp-given-url', urlValue)
            navigate('/register')
        } else {
            dispatch(setErrorModal(urlResult.message || 'Please give a valid url'))
        }
    }

    return (
        <BasePage name='Home'>
            <Wrapper>
                <div className='row'>
                    <div className='main-content'>
                        <h1>Short links in a second</h1>
                        <p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
                        <Link to='register' className='main-btn'>Get started for free</Link>
                    </div>
                    <div className='main-image'>
                        <img src={mainImage} alt='Main image of a person that pointing on the url bar in browser (by unDraw.co).' />
                    </div>
                </div>
                <div className='row'>
                    <input className={`search-input ${urlClass}`} placeholder='Shorten your link' value={urlValue} onChange={setUrlValue} />
                    <button className='main-btn' onClick={shortenHandler}>Shorten</button>
                </div>
                <div className='row'>
                    <div className='alert'>
                        <AlertArea type='home' inputResult={urlResult} />
                    </div>
                    <h1>What our customers are saying</h1>
                    {/* Reviews */}
                    <Carousel responsive={responsive}>
                        <CustomerCard />
                        <CustomerCard />
                        <CustomerCard />
                        <CustomerCard />
                        <CustomerCard />
                        <CustomerCard />
                    </Carousel>
                </div>
            </Wrapper>
        </BasePage>
    )
}

export default Home