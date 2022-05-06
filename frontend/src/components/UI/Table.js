import React from 'react'

import Wrapper from '../../assets/wrappers/Table';

// Table Row component.
const TableRow = props => {
    if (props.content) {
        return (
            <tr>
                {props.content ? props.content.map(info => <td>{info}</td>) : null}
            </tr>
        )
    } else {
        return <h3>No information to show</h3>
    }

}

// Table component.
const Table = ({ categories, information }) => {
    return (
        <Wrapper>
            <div className='table'>
                <table>
                    <tbody>
                        <tr>
                            {categories ? categories.map(category => <th key={'caegory_' + category}>{category}</th>) : null}
                        </tr>
                        {information ? information.map(content => <TableRow key={content[1]} content={content} />) : null}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
}

export default Table;