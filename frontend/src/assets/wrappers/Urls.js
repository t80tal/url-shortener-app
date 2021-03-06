import styled from 'styled-components'

const Wrapper = styled.div`
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -4rem auto;
        height: 90px;
        background: linear-gradient(90deg, rgb(165, 156, 255), rgba(118, 111, 255, 1) 100%);
    }

    .link-input {
        box-shadow: inset 0px 0px 0px 1px #6568f4;
        color: #2e2e2e;
        height: 50px;
        width: 650px;
        padding: 0 2rem;
        font-size: 25px;
        outline: none;
        border: none;
        text-align: left;
        border-radius: 4px;
    }

    .add-button {
        width:200px;
        cursor: pointer;
        background: linear-gradient(to left, #3acbf7 50%, #fff 50%) right;
        background-size: 200%;
        transition: .2s ease-out;
        color: #fff;
        font-weight: bold;
        -webkit-box-shadow: inset 0px 0px 0px 1px #6568f4;
        -moz-box-shadow: inset 0px 0px 0px 1px #6568f4;
        box-shadow: inset 0px 0px 0px 1px #6568f4;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        border-radius: 4px;
        display: flex;
        height: 50px;
        margin: 0 1rem;
    }

    .invalid-input {
        color: #721c24 !important;
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
    }

    .alert-area {
        display: flex;
        height: 40px !important;
        justify-content: center;
        align-items: center;
        margin: 4rem 0 -4rem 0;
        
        width: 100%;
    }

    .success {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #155724;
        background-color: #d4edda;
        box-shadow: inset 0px 0px 0px 1px #c3e6cb;
    }

    .danger {
        box-shadow: inset 0px 0px 0px 1px #f5c6cb;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #721c24;
        background-color: #f8d7da;
    }
    
    .add-button:hover {
        box-shadow: inset 0px 0px 0px 1px #6568f4;
        background-color: #fff;
        color: #6568f4;
        background-position: left;
    }
    @media screen and (max-width: 1300px) {
        .link-input {
            width: 290px;
            margin: auto;
        }
        .add-button {
            font-size: 17px;
            padding: 2px;
            width: 110px;
            margin: auto;
        }
        .row {
            margin-top: 1rem;
        }

        .rows-table {
            margin-left: 6px;
        }

        @media screen and (max-width: 500px) {
            .link-input {
                width: 240px;
                margin: auto;
            }
            .add-button {
                font-size: 17px;
                padding: 2px;
                width: 100px;
                margin: auto;
            }
        }
    }
`

export default Wrapper