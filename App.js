 import './App.css';

function App() {
  return (
    <div className="App">
       <div class="card">
      <header className="App-header">
      Tips Calculetor 
      </header>
      <label for="amount"><b> Enter Your Bill Amount</b></label><br/>
      <input type="number" id="total_amount" name="amount" required /> <br/>
 

      <label>How was the service ?</label> 

      <select id="service">
        <option value="20"> Excellent-20%</option>
        <option value="10">Medium-10%</option>
        <option value="5">Not so good-5%</option>

      </select>

      <input type="text" id="customer_name"></input><br/>

      <button id="add" />
    <label>customer list</label>
    <footer>
    @2020TIPSCALCULATOR
</footer>
    </div>
    </div>
  );
}

export default App;
