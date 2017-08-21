import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea} from 'semantic-ui-react';

import Board from './Board.js'



class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin : true,
            md : 2, // 0 : main, 1 : write, 2 : board detail
            id : '',
            pw : '',
        }

        this._SetId = this._SetId.bind(this);
        this._SetPw = this._SetPw.bind(this);
        this._Login = this._Login.bind(this);
        this._Upload = this._Upload.bind(this);
        
    }
    _SetId(e,{value}){
        this.setState({id : value});
        
    }
    _SetPw(e,{value}){
        this.setState({pw:value});
    }
    _Login(){
        if(this.state.id=='tndk1323'&&this.state.pw=='132314'){
            alert('로그인 성공');
            this.setState({isLogin:true});
        }
    }
    _Upload(){

    }
    _NowDate(){
        let dt = new Date();
        
        let yy = dt.getFullYear();
        let mm = dt.getMonth()+1;
        let dd = dt.getDate();
        
        return yy+'.'+mm+'.'+dd;
    }
    render(){
        if(this.state.isLogin){
            if(this.state.md==0){///////////////main
                return (
                    <Grid centered>
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

                            <Board pageNum ={1}/>
                            
                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell>
                                        <Menu.Item as='a' icon>
                                            <Icon name='write' size='large' color='black' bordered/>
                                        </Menu.Item>
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
                    </Grid>
                );
            }
            else if(this.state.md==1){///////////writing
                return(
                    <Grid centered>
                        <Form size='large'>
                            <Form.Group widths='equal'>
                                <Form.Input label='작성자' value={this.state.id} disabled />
                                <Form.Input label='작성일' value={this._NowDate()} disabled />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input label='제 목'/>
                            </Form.Group>
                            <Form.TextArea label='내 용' />
                            <Form.Button onClick={this._Upload}>작성 완료</Form.Button>
                        </Form>
                    </Grid>
                )        
            }
            else{/////////////////////view
                return(
                    <Grid centered>
                        
                    </Grid>
                );
            }
        }
        else {
            return(
                <Grid centered>
                    <Grid.Row columns={1}>
                        <h1 display='block'>Log In Page</h1>     
                        </Grid.Row>   
                    <Grid.Row columns={1}>         
                        <Form size="massive">
                            <Form.Field>
                                <Label>I D</Label>
                                <Input placeholder='ID를 입력하세요' onChange={this._SetId}/>
                            </Form.Field>
                            <Form.Field>
                                <Label>P W</Label>
                                <Input type='password' placeholder='PW를 입력하세요' onChange={this._SetPw}/>
                            </Form.Field>
                            <Button size='huge' onClick={this._Login}>Log in</Button>
                        </Form>
                    </Grid.Row>
                </Grid>
            );
        }
    }
}

export default Main;