import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    border-radius: 4px;

    div {
        border-radius: 4px;
        padding: 1rem 0;
        text-align: center;
    }

    .options {
        background-color: #f2f2f2;
        flex: 1;
        box-shadow: rgba(158, 167, 175, 0.3) 0px 7px 23px;
    }

    .options ul {
        padding: 2rem 0;
        list-style: none;
    }

    .cluster {
        flex: 3;
    }

    .cluster p {
        color: lightgray;
    }

    .cluster-form {
        margin-top: -1rem;
    }

    .form-row input {
        outline: none;
        font-size: 18px;
        padding: 0 1rem;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #d8d8d8;
        box-shadow: rgba(158, 167, 175, 0.25) 0px 7px 23px;
        padding: 0.1rem 1rem;
    }

    .form-row button {
        cursor: pointer;
        margin: 7px 2rem;
        padding: 0.6rem 1rem;
        outline: none;
        border: 4px;
        box-shadow: rgba(158, 167, 175, 0.7) 0px 7px 23px;
        font-weight: bold;
        transition: all ease .3s;
    }

    .form-row button:hover {
        transform: scale(1.05);
    }

    .form-row label {
        font-size: 20px;
        font-weight: 600;
        margin-right: 1rem;
    }

    .options-item:hover {
        background-color: #d8d8d8;
    }

    .options-item div {
        width: 100px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .active {
        background-color: #e2e2e2;
    }

    .invalid-input {
        color: #721c24 !important;
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
    }

    .navbar {
        width: 100%;
        height: 80px;
    }

    .menu {
        display: flex;
        width: 500px;
        height: 25px;
        margin: auto;
        align-items: center;
        justify-content: center;
        background-color: #ededed;
    }

    .option {
        flex: 1;
        cursor: pointer;
        font-weight: bold;
        height: 25px;
        border-radius: 0;
    }

    .option:hover {
        background-color: #e0e0e0;
    }

    .option-active {
        background-color: #d3d3d3;
    }

    @media screen and (max-width: 1300px) {
        flex-direction: column;

        .menu {
            width: 100% !important;
        }

        .form-row {
            display:flex;
            width: 90%;
            margin: auto;
            flex-direction: column;
        }
    }

`
export default Wrapper
