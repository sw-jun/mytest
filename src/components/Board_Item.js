import React from 'react';
import {Table} from 'semantic-ui-react';

import MyData from './boardData.json';

class Board_Item extends React.Component {
    constructor(props){
        super(props);
      
    }
    render(){
        return (
            <Table.Body>
                {MyData.data.map((item, i)=> {
                    return (
                        <Table.Row>
                            <Table.Cell>{i+1}</Table.Cell>
                            <Table.Cell selectable>
                                <a href="#" onClick={()=> this.props._SetMd(2)}>{item.title}</a>
                            </Table.Cell>
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

export default Board_Item;