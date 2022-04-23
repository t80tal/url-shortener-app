import styled from 'styled-components'

const Wrapper = styled.div`
    margin: -7rem auto;
    padding: 5rem 0;
    z-index: 2;
    display: flex;
    width: 1300px;
    -webkit-filter: drop-shadow(0 0 10px rgba(0, 0, 0, .3));
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, .3));
    height: 80vh;
    text-align: center;

    .content {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        flex: 1;
        display: flex;
        background: linear-gradient(90deg, rgba(73, 63, 252, 1), rgb(110, 94, 254) 100%);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all ease 1s;
    }
    
    .content h1 {
        color: #fff;
        font-size: 52px;
    }

    .content  p {
        color: #fff;
        font-size: 20px;
    }

    .form {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        width: 1200px;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
        background-color: #fff;
    }
    .form h1 {
        color: black;
        font-size: 52px;
    }

    .form p {
        color: rgba(0, 0, 0, .6);
        font-size: 18px;
    }
    .form input {
        text-align: center;
        display: block;
        outline: 0;
        background: #f2f2f2;
        width: 65%;
        border: 0;
        margin: 20px auto;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }

    .form input::placeholder {
        font-size: 16px;
    }

    .form button {
        cursor: pointer;
        color: white;
        font-size: 17px;
        padding: 0.65rem 2.7rem;
        border: none;
        outline: none;
        border-radius: 6px;
        background: linear-gradient(to left, rgb(110, 94, 254), rgba(73, 63, 252, 1) 50%, #fff 50%) right;
        background-size: 200%;
        transition: .2s ease-out;
        margin: 2rem 0;
    }

    .form button:hover {
        -webkit-box-shadow: inset 0px 0px 0px 1px rgb(110, 94, 254);
        -moz-box-shadow: inset 0px 0px 0px 1px rgb(110, 94, 254);
        box-shadow: inset 0px 0px 0px 1px rgb(110, 94, 254);
        background-color: #fff;
        color: rgb(110, 94, 254);
        background-position: left;
    }

    .subcontainer-form {
        width: 100%;
        text-align: center;
    }

    .subcontainer-form svg {
        margin:0 10px 25px 10px;
        cursor: pointer;
        transition: ease all .3s;
    }

    .subcontainer-form svg:hover {
        transform: scale(1.2);
    }

    .text-button {
        text-decoration: none;
        cursor: pointer;
        margin: auto;
        margin-top: 1.5rem;
        display: block;
        color: rgba(0,0,0,.6);
        font-size: 18px;
        width: 195px;
        transition: all ease 0.15s;
    }

    .text-button:hover {
        transform: scale(1.08);
        color: rgba(0, 0, 0, .7);
    }

    .invalid-input {
        color: #721c24 !important;
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
    }

    .alert-area {
        height: 50px !important;
        display: flex;
    }

    .success {
        padding: 0.4rem 2rem;
        margin: auto;
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
    }

    .danger {
        padding: 0.4rem 2rem;
        margin: auto;
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
`

export default Wrapper