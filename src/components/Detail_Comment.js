import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea, Container,
        Segment, Comment} from 'semantic-ui-react';

import Detail_Comment_Item from './Detail_Comment_Item.js';

class Detail_Comment extends React.Component{
    render(){
        return(
            <Comment.Group>
                <Header as='h3' dividing>댓글</Header>

                <Detail_Comment_Item />

                <Form reply>
                    <Form.TextArea />
                    <Button content='댓글 달기' labelPosition='left' icon='edit' primary />
                    <Button content='목록' labelPosition='left' icon='list' primary
                            onClick = {() => this.props._SetMd(0)} />
                </Form>
            </Comment.Group>
        );
    }
}
export default Detail_Comment