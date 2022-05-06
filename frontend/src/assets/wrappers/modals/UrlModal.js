import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    border-radius: 4px;
    height: 90vh;
    margin-top: 1rem;
    text-align: center;

    .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60vh;
    }

    .buttons, .information {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .information {
        flex: 2;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
    }

    .row h2 {
        margin-right: 1rem;
    }

    .buttons {
        margin-right: 1rem;
        flex: 1;
        padding: 1rem;
        border-radius: 4px;
    }

    .edit-btn {
        display: flex;
        justify-content: center;
        align-items:center;
        width: 50%;
        outline: none;
        border: none;
        border-radius: 4px;
        font-size: 18px;
        color: white;
        padding: 0.7rem 5rem;
        background: linear-gradient(to left, #06c1d6 50%, #fafafa 50%) right;
        background-size: 200%;
        transition: .15s ease-out;
        cursor: pointer;
    }

    .delete-btn {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items:center;
        outline: none;
        border: none;
        border-radius: 4px;
        margin-top: 1.5rem;
        font-size: 18px;
        color: white;
        padding: 0.7rem 5rem;
        background: linear-gradient(to left, #ff584f 50%, #fafafa 50%) right;
        background-size: 200%;
        transition: .15s ease-out;
        cursor: pointer;
    }

    .cancel-btn {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items:center;
        outline: none;
        border: none;
        border-radius: 4px;
        margin-top: 1.5rem;
        font-size: 18px;
        color: white;
        padding: 0.7rem 5rem;
        background: linear-gradient(to left, rgb(255, 158, 79) 50%, #fafafa 50%) right;
        background-size: 200%;
        transition: .15s ease-out;
        cursor: pointer;
    }

    .cancel-btn:hover {
        box-shadow: inset 0px 0px 0px 1px rgb(255, 158, 79);
        background-color: #fff;
        color: #ff584f;
        background-position: left;
    }

    .edit-btn:hover {
        box-shadow: inset 0px 0px 0px 1px #06c1d6;
        background-color: #fff;
        color: #06c1d6;
        background-position: left;
    }

    .delete-btn:hover {
        box-shadow: inset 0px 0px 0px 1px #ff584f;
        background-color: #fff;
        color: #ff584f;
        background-position: left;
    }

    
    .save-btn {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items:center;
        outline: none;
        border: none;
        border-radius: 4px;
        margin-top: 1.5rem;
        font-size: 18px;
        color: white;
        padding: 0.7rem 5rem;
        background: linear-gradient(to left, #06d648 50%, #fafafa 50%) right;
        background-size: 200%;
        transition: .15s ease-out;
        cursor: pointer;
    }
    .invalid-input {
        color: #721c24 !important;
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
    }

    .save-btn:hover {
        box-shadow: inset 0px 0px 0px 1px #06d648;
        background-color: #fff;
        color: #06d648;
        background-position: left;
    }

    .editing-input {
        text-align: center;
        outline: none;
        border: none;
        font-size: 18px;
        background-color: #ebebeb;
        padding: 0.3rem 0.2rem;
        border-radius: 4px;
        box-shadow: rgba(158, 167, 175, 0.22) 0px 7px 23px;
    }
    .alert-area {
        display: flex;
        height: 20px !important;
        font-size: 12px;
        justify-content: center;
        align-items: center;
        width: 70%;
        margin: auto;
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
    @media screen and (max-width: 1300px) {
        height: 85vh;
        .flex-container {
            flex-direction: column;
            font-size: 85%;
        }

        .buttons {
            margin: -2rem 0 auto 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .edit-btn {
            font-size: 13px;
            margin: 3px;
            padding: 0.6rem 2.5rem;
        }

        .save-btn {
            font-size: 13px;
            margin: 3px;
            padding: 0.6rem 2.5rem;
        }

        .delete-btn {
            font-size: 13px;
            margin: 3px;
            padding: 0.6rem 2.5rem;
        }

        .cancel-btn {
            font-size: 13px;
            margin: 3px;
            padding: 0.6rem 2.5rem;
        }
        .row h2 {
            margin: 0 4px;
            font-size: 17px;
        }
        .information {
            max-height: 280px;
        }

    }

    @media screen and (max-height: 700px) {
        
        .information {
            
        }
        .row {
            margin: 5px;
        }
        .buttons {
            flex-direction: row;
        }
    }
`

export default Wrapper