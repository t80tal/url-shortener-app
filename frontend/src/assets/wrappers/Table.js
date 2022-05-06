import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 95vw !important;
    overflow-y: auto;
 .table {
    color: #43545f;
    margin: 4.55rem auto auto 24.7rem;
}

::-webkit-scrollbar {
    cursor: pointer;
    background-color: #fff;
}

::-webkit-scrollbar-thumb {
    background: rgba(211, 211, 211, 0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(211, 211, 211, 0.7);
}

.table table {
    border-spacing: 0;
}

.table tr {
    text-align: right;
}

.table th, td {
    text-align: center;
    width: 210px;
    padding: 15px 0;
}

.table th:last-child, td:last-child {
    border-top-right-radius: 6px 6px;
    border-bottom-right-radius: 6px 6px;
}

.table th:first-child, td:first-child {
    border-top-left-radius: 6px 6px;
    border-bottom-left-radius: 6px 6px;
    
}

.table tr:hover {
    background-color: rgba(118, 111, 255, 1);
    color: #fff;
}

.table tr:first-child {
    background-color: #f2f2f2;
    font-weight: bold;
}

.table tr:hover:first-child {
    color: #43545f;
    background-color: rgba(212, 212, 212, 0.5)
}

@media screen and (max-width: 1300px) { 
    .table {
        width: 100%;
        margin: 3rem auto 2rem 0;
    }
    .table th, td {
        padding: 0.4rem;
        font-size: 14px;
    }
}


`

export default Wrapper