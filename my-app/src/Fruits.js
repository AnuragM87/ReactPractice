// import RelatedData from './RelatedData';
// const fruits = [
//     { id: 1, name: "Apple", price: 200 },
//     { id: 2, name: "Orange", price: 54 },
//     { id: 3, name: "Grapes", price: 50 },
//     { id: 4, name: "Pineapple", price: 70 }
//   ];

// export default function Fruits(){
//     const fruits = [
//         { id: 1, name: "Apple", price: 200 },
//         { id: 2, name: "Orange", price: 54 },
//         { id: 3, name: "Grapes", price: 50 },
//         { id: 4, name: "Pineapple", price: 70 }
//       ];
// //  const  isRed=({price})=>price>60?"red":"black";
//     return(
//         <div>
//         <h1>Fruits</h1>
//             {fruits.map((fruit)=>(
//                 <li 
//                 key={fruit.id} 
//                 style={{ color: fruit.price < 50 ? "red" : "black"}}
//                 >
//                        {fruit.name}: INR {fruit.price}
//                 </li>
//             ))}
//         </div>
//     );
// }


// Fruits.js
import {useState} from 'react';
export default function Fruits() {
    const fruits = [
      { id: 1, name: "Apple", price: 200 },
      { id: 2, name: "Orange", price: 80 },
      { id: 3, name: "Grapes", price: 60 },
      { id: 4, name: "Pineapple", price: 70 }
    ];

    const [highLight , setHightlight]=useState(false);

    const handleClick=()=>{
        {setHightlight((highLight)=>
        {
            if(!highLight){true}
            else{false}
        }
            )}
    }
    return (
      <div>
        <h1>Fruits</h1>
        {
        fruits.map((fruit) =>(
          <li
                key={fruit.id}
                // style={{ color: fruit.price < 100 ? "red" : "black" }}
                style={{ color: highLight && fruit.price < 100 ? "red" : "black" }}
            >
                {fruit.name} : INR {fruit.price}
                </li>
        ))
}
         <button onClick={handleClick}>budgetPrice</button>
      </div>
    );
  }
