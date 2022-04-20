import styled from 'styled-components'

const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    background: linear-gradient(90deg, rgb(110, 94, 254), rgba(73, 63, 252, 1) 100%);
    height: 50px;
    color: white;

    .footer-btn {
        color: inherit;
        font-weight: 400;
        margin: 13px 6px;
        transition: all ease .3s;
    }

    .footer-btn:hover {
        transform: scale(1.01);
    }
`

export default Wrapper