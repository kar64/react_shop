import React from 'react';
import ReactDom from 'react-dom';
import {Header}from'./components/Header'
import{Footer}from'./components/Footer'
import{Shop}from'./components/Shop'

// const App=()=><h1>Zdorova !!!</h1>;


function App(){
    return(
       <>
            <Header/>
            {/* <i class="Tiny material-icons">directions_railway</i> */}
            <Shop/>
            <Footer/>
       </>
    )
        
}

// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   componentDidMount() {}
//   componentDidUpdate() {}
//   componentWillUnmount() {}
//   render() {
//     return (
//       <div className="App">
//         <h1>Zdorova class</h1>
//       </div>
//     );
//   }
// }

ReactDom.render(<App />,document.querySelector('#root'));