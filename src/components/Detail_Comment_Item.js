import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea, Container,
        Segment, Comment} from 'semantic-ui-react';

import Detail_Comment_Item_Sub from './Detail_Comment_Item_Sub.js';
    

class Detail_Comment_Item extends React.Component{
    render(){
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                    <   div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>댓글 달기</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>

                <Comment.Group> ///Comment's Comment

                    <Detail_Comment_Item_Sub />

                </Comment.Group>
                
            </Comment>
        );
    }
}

export default Detail_Comment_Item