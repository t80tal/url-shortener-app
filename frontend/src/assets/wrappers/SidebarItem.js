import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 18px;

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

    @media screen and (max-width: 1300px) {
        padding: 0;
        width: 100%;
        display: flex;
        align-items: center;

        .sidebar-item {
            width:  25vw;
            height: 100%;
            font-size: 12px;
            border-radius: 0;
            padding: 0;
            justify-content: center;
            align-items: center;
        }
    }
`

export default Wrapper