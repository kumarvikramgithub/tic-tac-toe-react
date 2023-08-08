import { useState } from 'react';
import './App.css';
import Square from './Components/Square'
function App() {
  const [field, setField] = useState([1,2,3,4,5,6,7,8,9]);
  const [isPlayX, setPlayX] = useState(true);


  const changeValue = (index) =>{
    let newField = [...field];
    if(newField[index] !=='x' && newField[index]!=='o') {
      newField[index] =  isPlayX ? 'x' : 'o';
      setField(newField);
      setPlayX(!isPlayX);
      checkGameWinner();
      
    }
  }

  const checkGameWinner =() => {
    let newField = [...field];
    let win = '';
    // console.log('Player', player, newField);
    if(newField[0]===newField[1]&&newField[1]===newField[2]){ // 123
      win = newField[0];
    }else if(newField[3]===newField[4]&&newField[4]===newField[5]){ // 456
      win = newField[3];
    }else if(newField[6]===newField[7]&&newField[7]===newField[8]){ // 789
      win = newField[0];
    } else if(newField[0]===newField[3]&&newField[3]===newField[6]){ // 147
      win = newField[0];
    } else if(newField[1]===newField[4]&&newField[4]===newField[7]){ // 258
      win = newField[1];
    }else if(newField[2]===newField[5]&&newField[5]===newField[8]){ // 369
      win = newField[2];
    } else if(newField[0]===newField[4]&&newField[4]===newField[8]){ // 159
      win = newField[0];
    } else if(newField[2]===newField[4]&&newField[4]===newField[6]){ // 357
      win = newField[2];
    }
    console.log('winner: ', win);
  }
  return (
    <div className="App">
        {field.map((value,index) => {
          return <Square 
          value={value}
          key={index}
          index={index}
          changeValue = {changeValue} />
        })
        }
    </div>
  );
}

export default App;
