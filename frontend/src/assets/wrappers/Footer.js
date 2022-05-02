import styled from 'styled-components'

const Wrapper = styled.footer`
    .footer-bar {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 50px;
        color: white;
        overflow-x: hidden;
    }
    .logged-out-footer {
        background: linear-gradient(90deg, rgb(110, 94, 254), rgba(73, 63, 252, 1) 100%);
    }

    .logged-in-footer {
        color: rgb(110, 94, 254);
        padding-left: 300px;
        width: auto;
    }

    .footer-btn {
        color: inherit;
        font-weight: 400;
        margin: 13px 6px;
        transition: all ease .3s;
    }

    .footer-btn:hover {
        transform: scale(1.01);
    }

    .logged-in-footer {

    }
    @media screen and (max-width: 1300px) {
        .logged-in-footer {
            padding: 0;
            margin-bottom: 60px;
        }
    }
`

export default Wrapper