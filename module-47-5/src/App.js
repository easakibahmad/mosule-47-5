import './App.css';
import Sakib from './components/Sakib/Sakib';
import addNum from './components/Sani.js/Sani';
import { one,two } from './components/TwoFunction/TwoFunction';
// import Apply from './components/ArrayObjApply/Apply';
import ArrayObj from './components/ArraObj/ArrayObj';

function App() {
  const sum = addNum(23,25)
  const sumOne= one(12,45)
  const multiply = two(34,67)
  return (
    <div className="App">
      <Sakib></Sakib>
      <h2>Sum: {sum}</h2>
      <h3>Sumone: {sumOne}</h3>
      <h3>Multiply: {multiply}</h3>
      {/* <Apply></Apply> */}
      <ArrayObj></ArrayObj>
    </div>
  );
}

export default App;
