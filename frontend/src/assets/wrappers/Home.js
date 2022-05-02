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
        justify-content: center;
        text-align: center;
        margin: 2rem auto 0 auto;
        height: 125px;
        background: linear-gradient(90deg, rgb(165, 156, 255), rgba(118, 111, 255, 1) 100%);
    }

    .row:nth-child(3) {
        flex-direction: column;
    }

    .row:nth-child(3) h1{
        margin: 1.5rem auto;
    }

    .search-input {
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
    .invalid-input {
        color: #721c24 !important;
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
    }
    .main-btn:nth-child(2) {
        box-shadow: inset 0px 0px 0px 1px #6568f4;
        margin: auto 0;
        padding: 0.2rem 2rem;
        height: 50px;
    }

    .main-btn:hover {
        box-shadow: inset 0px 0px 0px 1px #6568f4;
        background-color: #fff;
        color: #6568f4;
        background-position: left;
    }

    .main-btn:nth-child(3) {
        text-decoration: none; 
        display: block;
        width: 15rem;
        padding: 1rem 1rem;
        margin: 3rem 0;
    }

    .alert {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .success {
        box-shadow: inset 0px 0px 0px 1px #c3e6cb;
        background-color: #d4edda;
        color: #155724;
    }

    .danger {
        color: #721c24;
        box-shadow: inset 0px 0px 0px 1px #fcabb3;
        background-color: #f8d7da;
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
        .main-btn:nth-child(3) {
            margin: 1.2rem auto;
        }
    }

    @media screen and (max-width: 680px) {
        .search-input {
            width: 200px;
            margin: auto;
        }

        .main-btn:nth-child(2) {
            margin: auto;
            padding: 0 8px;
        }
    }
`

export default Wrapper