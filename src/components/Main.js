import React from 'react';
import {Button, Icon, Label, Menu, Table, Rating, Grid, Header, Form, Input, TextArea, Container,
        Segment, Comment} from 'semantic-ui-react';

import Board from './Board.js';
import Writing from './Writing.js';
import Detail from './Detail.js';
import Login from './Login.js';


class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id : '',
            pw : '',
        }

        this._SetId = this._SetId.bind(this);
        this._SetPw = this._SetPw.bind(this);
        this._Login = this._Login.bind(this);
        this._Upload = this._Upload.bind(this);
        
    }
    _SetId(e,{value}){
        this.setState({ id : value });
        
    }
    _SetPw(e,{value}){
        this.setState({ pw : value });
    }
    _Login(){
        if(this.state.id=='tndk1323'&&this.state.pw=='132314'){
            alert('로그인 성공');
            this.props._SetUser(this.state.id, true);            
        }
    }
    _Upload(){

    }
    render(){
        if(this.props.isLogin){
            if(this.props.md==0){///////////////Board
                return (
                    <Board _SetMd = {this.props._SetMd}/>
                );
            }
            else if(this.props.md==1){///////////writing
                return(
                    <Writing id = {this.state.id}
                             _SetMd = {this.props._SetMd}/>
                )        
            }
            else{/////////////////////Detail
                return(
                    <Detail _SetMd = {this.props._SetMd}/>
                );
            }
        }
        else {//////////Login page
            return( 

                <Login _SetId = {this._SetId}
                       _SetPw = {this._SetPw}
                       _Login = {this._Login}/>
            );
        }
    }
}

export default Main;