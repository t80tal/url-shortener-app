import styled from 'styled-components'

const Wrapper = styled.div`
    min-width: 300px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    box-shadow: rgba(158, 167, 175, 0.22) 0px 7px 23px;
    
    .sidebar-logo {
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


`

export default Wrapper