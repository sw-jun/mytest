import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea, Container,
        Segment, Comment} from 'semantic-ui-react';

class Writing extends React.Component{
    _NowDate(){
        let dt = new Date();
        
        let yy = dt.getFullYear();
        let mm = dt.getMonth()+1;
        let dd = dt.getDate();
        
        return yy+'.'+mm+'.'+dd;
    }
    render(){
        return(
            <div>
                <Header as='h1'>Writing</Header>
                <Segment.Group>
                    <Segment.Group horizontal>
                        <Segment textAlign='center'>
                            <Label attached='top'>제목</Label>
                            <Input fluid></Input>
                        </Segment >
                        <Segment padded textAlign='center'>
                            <Label attached='top'>작성자</Label>
                            <p>{this.props.id}</p>
                        </Segment>
                        <Segment padded textAlign='center'>
                            <Label attached='top'>작성일</Label>
                            <p>{this._NowDate()}</p>
                        </Segment>
                    </Segment.Group>
                    <Segment textAlign='center'>
                        <Label attached='top'>내용</Label>
                        <TextArea  style={{width:'80%',height:'200px'}}></TextArea>
                    </Segment>
                </Segment.Group>

                <Button content='글 올리기' labelPosition='left' icon='edit' primary />
                <Button content='목록' labelPosition='left' icon='list' primary 
                        onClick ={() => this.props._SetMd(0)}/>
            </div>
        );       
    }
}

export default Writing