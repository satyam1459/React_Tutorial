// var React = require('react');
import React from 'react';
// var ReactDOM =require('react-dom');
import ReactDOM from 'react-dom';

import './index.css';

// ReactDOM.render(<h1>Satyam Jaiswal</h1>,
//              document.getElementById('root') );


// ReactDOM.render(React.createElement("h1",null,"SATYAM JAISWAL: WEB DEVELOPER"),document.getElementById("root"));

// var h1= document.createElement("h1");
// h1.innerHTML="Satyam Pandey";
// document.getElementById("root").appendChild(h1);

// const myElement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );

// const root = ReactDOM.createRoot(document.getElementById('root').appendChild(h1));
// root.render(myElement);

// const arr=['Vinod','Thanos','Bahadur'];
// In react v16 it's possible for render() to return an array of elements

// ReactDOM.render([ 
//                   <>
//                   <h1>Satyam Jaiswal</h1>
//                   <p>Please like and share</p>
//                   <h2>Please subscribe my channel</h2>
//                   </>
//                 ],
//                 document.getElementById('root') );


// ReactDOM.render(<>
//   <h1>Netflix movies</h1>
//   <p>List of 5 Best Series</p>
//   <ol>
//     <li>Dark</li>
//     <li>Extra curricular</li>
//     <li>My Holo Love</li>
//     <li>My First Love</li>
//     <li>Mr Robot</li>
//   </ol>
// </>,document.getElementById('root'));

// const fullName='Satyam Jaiswal';

// ReactDOM.render(
//   <>
//   <h1>My name is {fullName}</h1>
//   <p>My lucky number is {2+3}</p>
//   <p>My lucky number is {2+3*5/5}</p>
//   <p>My lucky number is {(Math.random())}</p>
//   </>
//     ,document.getElementById('root')
// );

//Template literals (` `)
// const fName = 'Satyam';
// const lName = 'Jaiswal';

// ReactDOM.render(
//   <>
//   <h1>My name is {fName+" "+lName}</h1>
//   <h1>{`My name is ${fName} ${lName}`}</h1>
//   <p>A WEB DEVELOPER</p>
//   </>
//     ,document.getElementById('root')
// );

//ReactJs challenge

// ReactDOM.render(
//   <>
//     <h1>Satyam Jaiswal</h1>
//     <p>{`Today date is ${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}</p>
//     <p>{`Today date is ${new Date().toLocaleDateString()}`}</p>
//     <p>{`Current time is ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}</p>
//     <p>{`Current time is ${new Date().toLocaleTimeString()}`}</p>
//   </>,document.getElementById('root')
// );

//JSX attribute
// const name = "XYZ";
// const img1="https://picsum.photos/200"
// const img2="https://picsum.photos/200"
// const img3="https://picsum.photos/200"
// const link="http://google.com"

// const heading={
//   backgroundColor:"blue",
//       textAlign:"center",
//       margin:"10px",
//       color:"white",
//       textTransform:"uppercase"
// }

// ReactDOM.render(
//   <>
//   <h1 style={
//     heading
//   }>My name is {name}</h1>
//   <div className='img_div'>
//   <img src={img1} alt='randomeImages'/>
//   <img src={img2} alt='randomeImages'/>
//   <a href={link} target='_satyam'>
//   <img src={img3} alt='randomeImages'/>
//   </a>
//   </div>
//   </>,
//   document.getElementById('root')
// );

//challenge ->3

let currDate = new Date(2022,2,12,20).getHours();
let greeting = '';

const cssStyle ={

};

if(currDate >= 1 && currDate < 12){
  greeting='Good morning........';
  cssStyle.color="green";
  cssStyle.backgroundColor="yellow";
}else if(currDate >= 12 && currDate <16){
  greeting='Good afternoon.......';
  cssStyle.color="orange";
  cssStyle.backgroundColor="red";
}else{
  greeting='Good night .......';
  cssStyle.color="black";
  cssStyle.backgroundColor="grey";
}



ReactDOM.render(
  <div>
  <h1 >Hello sir! <span style={cssStyle}>{ greeting }</span></h1>
  </div>
  ,document.getElementById('root')
);