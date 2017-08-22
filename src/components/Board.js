import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea, Container,
        Segment, Comment} from 'semantic-ui-react';

import Board_Item from './Board_Item.js';

class Board extends React.Component {
    render(){
        return (
            <div>
                <Header as='h1'> </Header>
                <Header as='h1'>Free Board</Header>
                <Table celled textAlign='center'>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell width={1}>번호</Table.HeaderCell>
                        <Table.HeaderCell width={5}>제목</Table.HeaderCell>
                        <Table.HeaderCell width={1}>작성자</Table.HeaderCell>
                        <Table.HeaderCell width={1}>작성일</Table.HeaderCell>
                        <Table.HeaderCell width={1}>조회수</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Board_Item _SetMd = {this.props._SetMd}/>
                    
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell>
                                <Button icon onClick={()=>this.props._SetMd(1)}>
                                <Icon name='write' size='large' color='black' />
                                </Button>
                            </Table.HeaderCell>
                            <Table.HeaderCell colSpan='5'>
                                <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='left chevron' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='right chevron' />
                                </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        );
    }
}

export default Board;