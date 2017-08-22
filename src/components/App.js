import React from 'react';
import {Grid, Header, Button} from 'semantic-ui-react';

import Main from  './Main.js'

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            md : 0,  // 0 : Board, 1 : writing, 2 : board detail
            user : '',
            isLogin : false
        }
        this._SetUser = this._SetUser.bind(this);
        this._SetMd = this._SetMd.bind(this);
        this._UserBar = this._UserBar.bind(this);
        this._Logout = this._Logout.bind(this);
    }
    _SetUser(newUser, flag){
        this.setState({user : newUser,
                       isLogin : flag})
    }
    _SetMd(num){
        this.setState({ md : num });
    }
    _UserBar(){
        if(this.state.user){
            return (
                <div>
                    <p>{this.state.user}님 사용 중</p>
                    <Button size='medium'color='teal' onClick={this._Logout}>Log Out</Button>
                </div>
            );
        }
        else return ;
    }
    _Logout(){
        this.setState({ user : '', 
                        isLogin : false});
        this._SetMd(0);
                    
        alert('로그아웃 성공');
    }
    render(){
         return (
            <Grid centered >
                <Grid.Row columns={3} color='blue' centered >
                    <Grid.Column width='3'></Grid.Column>
                    <Grid.Column width='10' textAlign='center'>
                     <h1>React & Seamntic UI Test</h1>
                    </Grid.Column>
                    <Grid.Column width='3' textAlign='center'>
                        {this._UserBar()}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Header as='h1'> </Header>
                </Grid.Row>
                <Grid.Row columns={3} centered>
                    <Grid.Column width='3'></Grid.Column>
                    <Grid.Column width='10'>
                        <Main md = {this.state.md}
                              _SetUser = {this._SetUser}
                              _SetMd = {this._SetMd}
                              isLogin = {this.state.isLogin}/>
                    </Grid.Column>
                    <Grid.Column width='3'></Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;