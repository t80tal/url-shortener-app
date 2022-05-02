import styled from 'styled-components'

const Wrapper = styled.div`
    margin: auto;
    padding: 0.6rem 0 0.6rem 0;
    padding-left: 410px;

    input {
        padding: 0.3rem 1rem;
        font-size: 16px;
        width: 235px;
        border: 1px solid #e6e6e6;
        outline: none;
        background-color: #f0f0f0;
        border-radius: 4px;
        box-shadow: rgba(158, 167, 175, 0.22) 0px 7px 23px;
    }

    .dropdown {
        width: 235px;
        border: 1px solid #e6e6e6;
        background-color: #f0f0f0;
        margin-top: 1px;
        position: absolute;
        list-style: none;
        text-align: center;
    }

    .dropdown li {
        padding: 0.2rem 0;
        cursor: pointer;
    }

    .dropdown li:hover {
        background-color: #e1b0ff;
    }

    @media screen and (max-width: 1300px) {
        padding: 0;
        margin-bottom: -4rem;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export default Wrapper