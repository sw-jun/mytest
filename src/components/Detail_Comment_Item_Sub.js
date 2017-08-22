import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea, Container,
        Segment, Comment} from 'semantic-ui-react';

class Detail_Comment_Item_Sub extends React.Component{
    render(){
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as='a'>Jenny Hess</Comment.Author>
                    <Comment.Metadata>
                        <div>방금 작성</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        Elliot you are always so right :)
                    </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>댓글 달기</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        );
    }
}

export default Detail_Comment_Item_Sub