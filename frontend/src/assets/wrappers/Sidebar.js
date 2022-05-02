import styled from 'styled-components'

const Wrapper = styled.div`
    min-width: 300px;
    height: 100vh;
    position: fixed;
    z-index: 5;
    left: 0;
    top: 0;
    background-color: #fff;
    box-shadow: rgba(158, 167, 175, 0.22) 0px 7px 23px;
    
    .sidebar-logo {
        cursor: pointer;
        height: 160px;
        display: flex;
        font-size: 41px;
        align-items: center;
        justify-content: center;
    }

    .sidebar-item-container {
        padding: 0 18px;
    }

    .sidebar-item {
        border-radius: 14px;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        padding: 10px 25px;
        margin: 10px 0;
        display: flex;
        align-items: center;
        font-weight: 600;
        background: linear-gradient(
            to right,
            #fff 50%,
            rgb(110, 94, 254) 50%,
            rgba(73, 63, 252, 1) 80%
        ) left;
        background-size: 200%;
        transition: .2s ease-out;
        box-shadow: rgba(158, 167, 175, 0.22) 0px 7px 23px;
    }

    .item-icon-label {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sidebar-item:hover {
        color: rgba(73, 63, 252, 1);
    }

    .active {
        color: #fff;
        background-position: right;
    }

    .active:hover {
        color: #fff;
    }

    .item-svg {
        margin-right: 1rem;
    }

    .bottom-items {
        display: flex;
        flex: 3;
    }

    .top-items {
        flex: 9;
    }
    .items {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-content;
    }
    @media screen and (max-width: 1300px) {
        position: fixed;
        width: 100%;
        height: 60px;
        display: flex;
        left: auto;
        top: auto;
        bottom: 0;
        
        .sidebar-logo {
           display: none;
        }

        .items {
            display: flex;
            flex-direction: row;
        }
        
        .top-items {
            height: 100%;
            display: flex;
            margin: 0;
        }
        .bottom-items {
            display: flex;
            height: 100%;
            margin: 0;
        }


        .sidebar-item {
            width:  25vw;
            height: 100%;
            font-size: 12px;
            border-radius: 0;
            padding: 0;
            justify-content: center;
            align-items: center;
        }
        .item-svg {
            margin-right: 4px;
        }

        .sidebar-item-container {
            padding: 0;
            width: 100%;
            display: flex;
            align-items: center;
        }

    }


`

export default Wrapper