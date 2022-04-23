import styled from 'styled-components'

const Wrapper = styled.div`
 .table {
    color: #43545f;
    margin: 4.55rem auto auto 24.7rem;
    overflow-y: auto;
}

.table::-webkit-scrollbar {
    cursor: pointer;
    background-color: #fff;
}

.table::-webkit-scrollbar-thumb {
    background: rgba(211, 211, 211, 0.3);
    border-radius: 10px;
}

.table::-webkit-scrollbar-thumb:hover {
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
    background-color: #3298f8;
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


`

export default Wrapper