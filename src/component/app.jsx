
import React ,{Component} from 'react';
import './profile'
import Index from './profile';
class App extends Component{
    state={
        person:[
            {
        name:'ringku',
        age:23
            }
        ]
    }
    render(){
    return <h5>Hi {this.state.person[0].name} Your age {this.state.person[0].age}</h5>
    }
}
export default App
