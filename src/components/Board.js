import React from 'react';
import {Table} from 'semantic-ui-react';

import MyData from './boardData.json';

class Board extends React.Component {
    constructor(props){
        super(props);
        
        let nowPage;
        let newData; 
    }
    render(){
        return (
            <Table.Body>
                {MyData.data.map((item, i)=> {
                    return (
                        <Table.Row>
                            <Table.Cell>{i+1}</Table.Cell>
                            <Table.Cell>{item.title}</Table.Cell>
                            <Table.Cell>{item.owner}</Table.Cell>
                            <Table.Cell>{item.date}</Table.Cell>
                            <Table.Cell>{item.view}</Table.Cell>
                        </Table.Row>
                    );
                })}
            </Table.Body> 
        );
    }
}

export default Board;