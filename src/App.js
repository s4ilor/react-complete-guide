import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Pawel', age: 25 },
      { name: 'Julita', age: 20 },
      { name: 'Wojtek', age: 27 }
    ],
    otherState: 'some other value'
  });


  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DO NOT DO THIS: personsState.persons[0].name = 'Piotr';
  
    setPersonsState({
      persons: [
      { name: 'Pawelek', age: 25 },
      { name: 'Julita', age: 2000 },
      { name: 'Wojtek', age: 27 }
    ]})
  }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> moje hobby: jedzenie</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'));
  }

export default app;


