import styled from 'styled-components'

const Wrapper = styled.div`
    border-radius: 2px;
    margin: 1.2rem auto;
    display: flex;
    justify-content: center;
    text-align: center;
    border: 1px solid #a1a2ff;
    box-shadow: -1px 2px 10px 0 rgb(0 0 0 / 15%);
    height: 250px;
    width: 400px;

    div {
        display:flex;
        flex: 1;
        padding-right: 2rem;
        font-size: 23px;
        align-items: center;
        justify-content: center;
    }
    div:first-child {
        flex-direction: column;
        padding: 0;
        margin: auto;
    }

    .stars {
        margin: auto;
        align-items: center;
        display:flex;
        margin-right: 1rem;
        justify-content: center;
    }
    img {
        border-radius: 50%;
    }
    div img {
        width: 130px;
    }
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        margin: 0.42rem auto;
        height: 300px;
        width: 90vw;
        div {
            padding: 1rem 0;
            font-size: 24px;
        }
        .stars {
            margin: auto;
        }
        img {
            margin-top: 1.3rem;
        }
        div {
            margin: auto;
        }
        div img {
            width: 100px;
        }
    }
`

export default Wrapper