import React from 'react';
import {Grid, Header, Button} from 'semantic-ui-react';

import Main from  './Main.js'

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            user : ''
        }
        this._SetUser = this._SetUser.bind(this);
    }
    _SetUser(newUser){
        this.setState({user : newUser})
    }
    render(){
        return (
            <Grid centered>
                <Grid.Row columns={2} color='blue' centered>
                    <Grid.Column width='11'>
                     <h1>React & Seamntic UI Test</h1>
                    </Grid.Column>
                    <Grid.Column width='5'>
                        <Grid.Row columns={1}>
                            
                            {/* {this.state.user}님 사용 중   
                            <Button floated='right' size='medium'color='teal'>Log Out</Button> */}
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} centered>
                    <Main />
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;