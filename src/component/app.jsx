
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
    handleSubmit=event=>{
       event.preventDefault();
       console.log(this.state)
       this.setState({
                name:'',
                age:''
          })
       event.target.reset();
    }
    render(){
    return <div className="container">
   <form action="form-group" onSubmit={this.handleSubmit}>
       <h4 className="text-info">React-Form</h4>
   <input className="form-control col-md-4" type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
   <input className="form-control col-md-4" type="text" name="age" onChange={this.handleChange}  value={this.state.age} placeholder="Age:24"/>
        <button type="submit" className="btn btn-info mt-2" >Show</button>
   </form>
    </div>
    }
}
export default App
