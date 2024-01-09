import React,{Component} from "react"
import ReactDOM from "react-dom"
import './App.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
    custData : [],
    ammountData : [],
      tempData : '',
      AtempData : '',
    totalPr :[],
    Psum:'',
    service: '',
    len :[]
    }
   
  }

  
handleClick = () => {

  this.setState({custData:[...this.state.custData,this.state.tempData+ '  IS OFFERING tips of  ' +  this.state.AtempData  * this.state.service +'Rs'], AtempData: '' , tempData: '' })
 

  this.setState({totalPr:[...this.state.totalPr , this.state.AtempData * this.state.service]})
  var sum = this.state.totalPr.reduce(function(a, b){
    return a + b;
}, this.state.AtempData*this.state.service);

this.setState({Psum:[sum]}) 

}


 
 
  render() {
    return (
      <div>


        <div className="App">
       <div class="card">
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  
      <header className="App-header">
      Tips Calculator 
      </header> 

      <div style={{
     border: '2px solid',
     
    }}
>


          <label for="amount"><b> Enter Your Bill Amount</b></label><br/>
      <input type="number" className="input"  value= {this.state.AtempData} onChange={(evt) => {this.setState({ AtempData: evt.target.value })}}  required /> <br/>
      
      

      <label>How was the  service ?</label> 

      <select value ={this.state.service} onChange={(evt) => {this.setState({ service: evt.target.value })}}>
        <option >Select</option>
        <option value="0.2"> Excellent-50%</option>
        <option value="0.1">Medium-10%</option>
        <option value="0.05">Not so good-5%</option>

      </select>
 

      </div>
      <input type="text" className="input" placeholder="Enter Customer Name" value= {this.state.tempData} onChange={(evt) => {this.setState({ tempData: evt.target.value })}}/><br/>

      <input type="button" style={{
      background : '#2a64d8'
      }}  value="Calculation" onClick={() => {this.handleClick() }}/><br/> 

 
<div style={{
     border: '1px solid',
     }}>
    <label>customer list</label>
    <ul> 
    
    {this.state.custData.map(item =>
    <li> {item} </li>)} 
    </ul>
</div>
 
<label type="button" style={{
      background : 'rgb(60, 207, 226)'
      }}  >Tips & customer</label><br/> 

<table class="table table-bordered">
    <thead>
    <tr class="warning">
        <td colSpan="2">Total Customer </td>
        <td  >Tips</td>
        
      </tr>
    </thead>
    <tbody>
      
      <tr class="success">
        <td colSpan="2"> {this.state.custData.length } </td>
    <td> {this.state.Psum} </td>
      
      </tr>
    </tbody>
  </table>
 

    <footer>
    @2022TIPSCALCULATOR
</footer>
    </div>
    </div>


      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

export default MyComponent;