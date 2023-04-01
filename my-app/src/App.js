import './App.css';
import Sum from './Sum';
import Fruits from './Fruits';
import Employees from './Employees';
import MyCart from './MyCart';
import Counter from './Counter';
// import RelatedData from './RelatedData';
function App() {
  // const list=[1,2,3];
  const number1=5;
  const number2=4;
  const sum=number1+number2

  return (
    <div className="App">
 <h1>React APP</h1>
 <Sum/>
 <Fruits/>
 <Employees/>
 <MyCart/>
 <Counter/>
 <h5>React@neoG</h5>
    </div>
  );
}

export default App;
