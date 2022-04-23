import React from 'react'
import Wrapper from '../../assets/wrappers/Table';


const TableRow = props => {
    if (Array.isArray(props.content)) {
        return (
            <tr>
                {props.content ? props.content.map(item => <td>{item}</td>) : null}
            </tr>
        )
    } else if (typeof props.content === 'object') {
        const converted_content = []
        for (let key in props.content) {
            converted_content.push(props.content[key])
        }
        return (
            <tr>
                {converted_content.map(item => <td>{item}</td>)}
            </tr>
        )
    } else {
        return <h3>No information to show</h3>
    }

}

const Table = props => {
    return (
        <Wrapper>
            <table className='table'>
                <tr>
                    {props.categories ? props.categories.map(category => <th>{category}</th>) : null}
                </tr>
                {props.information ? props.information.map(content => <TableRow content={content} />) : null}
            </table>
        </Wrapper>
    );
}

export default Table;