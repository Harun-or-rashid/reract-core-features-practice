
import React ,{Component} from 'react';
import './profile'
import Index from './profile';
class App extends Component{
    state={
        name:"",
        age:""
      
    }
    handleChange=event=>{
    this.setState({
        [event.target.name]:event.target.value
    })
    }
    render(){
    return <div className="container">
        <input className="form-control col-md-4" type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
        <button className="btn btn-info mt-2" onClick={()=>console.log(this.state)}>Show</button>
    </div>
    }
}
export default App
