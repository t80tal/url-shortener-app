import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0.6rem 0 0.6rem 0;
    padding-left: 410px;
    display: flex;
    flex-direction: column;
    
    .cards {
        display: flex;
        width: 1470px;
    }

    .last-six-ips {
        flex-direction: column;
        width: 100%;
        list-style: none;
        padding-top: 2rem;
    }

    .last-six-ips li {
        display: flex; 
        margin: 0.5rem auto;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        font-size: 18px;
    }

    .ip-text {
        text-align: center;
        width: 100%;
    }

    .last-six-ips hr {
        border-top: 1px solid #fefefe;
        margin-bottom: 2rem;
    }

    .ip-item:hover {
        background-color: aquamarine;
    }
    @media screen and (max-width: 1300px) {
        padding: 0;

        .cards {
            flex-direction: column;
            width: auto;
        }
    }

`

export default Wrapper