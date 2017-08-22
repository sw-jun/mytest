import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea, Container,
        Segment, Comment} from 'semantic-ui-react';


class Login extends React.Component{
    render(){
        return(
            <Grid centered>
                <Grid.Row columns={1}>
                    <h1 display='block'>Enterance</h1>     
                    </Grid.Row>   
                <Grid.Row columns={1}>         
                    <Form size="massive">
                        <Form.Field>
                            <Label size='huge'>I D</Label>
                            <Input placeholder='ID를 입력하세요' onChange={this.props._SetId}/>
                        </Form.Field>
                        <Form.Field>
                            <Label size='huge'>P W</Label>
                            <Input type='password' placeholder='PW를 입력하세요' onChange={this.props._SetPw}/>
                        </Form.Field>
                        <Button size='huge' onClick={this.props._Login}>Log in</Button>
                    </Form>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Login