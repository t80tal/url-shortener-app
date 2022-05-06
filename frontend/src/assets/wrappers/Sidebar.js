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


        
        .item-svg {
            margin-right: 4px;
        }
    }


`

export default Wrapper