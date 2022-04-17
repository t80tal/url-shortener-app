import React from 'react'
import Wrapper from '../assets/wrappers/Home'
import BasePage from './BasePage'
import mainImage from '../assets/images/main.svg'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Home = () => {
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
                    <input className='search-input' placeholder='Shorten your link' />
                    <button className='main-btn'>Shorten</button>
                </div>
                <div className='row'>
                    <h1>What our customers are saying</h1>
                    {/* Reviews */}
                    <Card />
                    <Card />
                    <Card />
                </div>
            </Wrapper>
        </BasePage>
    )
}

export default Home