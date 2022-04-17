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
    width: 800px;

    div {
        margin: auto;
        flex: 1;
        font-size: 27px;
    }

    div img {
        width: 130px;
    }

    @media screen and (max-width: 1140px) {
        flex-direction: column;
        width: 600px;

        div {
            padding: 1rem 0;
            font-size: 24px;
        }

        div img {
            width: 100px;
        }
    }

    @media screen and (max-width: 675px) {
        width: 500px;
    }
`

export default Wrapper