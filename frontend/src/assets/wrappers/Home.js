import styled from 'styled-components'

const Wrapper = styled.div`
    .row {
        margin: auto; 
        display: flex;
    }

    .row:first-child {
        max-width: 1300px;
    }

    .row:nth-child(2) {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 2rem auto;
        height: 125px;
        background: linear-gradient(90deg, rgb(165, 156, 255), rgba(118, 111, 255, 1) 100%);
    }

    .row:nth-child(3) {
        flex-direction: column;
    }

    .row:nth-child(3) h1{
        margin: 1rem auto;
    }

    .search-input {
        -webkit-box-shadow: inset 0px 0px 0px 1px #6568f4;
        -moz-box-shadow: inset 0px 0px 0px 1px #6568f4;
        box-shadow: inset 0px 0px 0px 1px #6568f4;
        color: #2e2e2e;
        height: 50px;
        width: 650px;
        padding: 0 2rem;
        font-size: 25px;
        margin: auto 1rem;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 4px;
    }
    
    .main-content {
        text-align: left;
        flex: 1;
    }

    .main-content h1 {
        color: #2e2e2e;
        font-size: 60px;
    }

    .main-content p {
        color: #2e2e2e;
        font-size: 30px;
    }

    .main-image {
        flex: 1;
    }

    .main-image img {
        width: 500px;
    }

    .main-btn {
        cursor: pointer;
        background: linear-gradient(to left, #3acbf7 50%, #fff 50%) right;
        background-size: 200%;
        transition: .2s ease-out;
        color: #fff;
        font-weight: bold;
        outline: none;
        border: none;
        border-radius: 4px;
        padding: 1rem 3rem;
        font-size: 25px;
        margin: 3rem 0;
    }

    .main-btn:nth-child(2) {
        -webkit-box-shadow: inset 0px 0px 0px 1px #6568f4;
        -moz-box-shadow: inset 0px 0px 0px 1px #6568f4;
        box-shadow: inset 0px 0px 0px 1px #6568f4;
        margin: auto 0;
        padding: 0.2rem 2rem;
        height: 50px;
    }

    .main-btn:hover {
        -webkit-box-shadow: inset 0px 0px 0px 1px #6568f4;
        -moz-box-shadow: inset 0px 0px 0px 1px #6568f4;
        box-shadow: inset 0px 0px 0px 1px #6568f4;
        background-color: #fff;
        color: #6568f4;
        background-position: left;
        transition: all 0.25s ease-out;
    }

    .main-btn:nth-child(3) {
        text-decoration: none; 
        display: block;
        width: 15rem;
        padding: 1rem 1rem;
        margin: 3rem 0;
    }

    @media screen and (max-width: 1300px) {

        .main-content {
            text-align: center;
        }

        .main-image {
            display: none;
        }

        .search-input {
            width: 400px;
        }
    }

    @media screen and (max-width: 680px) {
        .search-input {
            width: 350px;
            margin: auto;
        }

        .main-btn:nth-child(2) {
            padding: 0 0.7rem;
        }
    }
`

export default Wrapper