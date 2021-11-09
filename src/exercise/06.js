// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import {red} from 'chalk';
import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  const usernameInputRef = React.useRef();
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const thisName = usernameInputRef.current.value;
    onSubmitUsername(thisName);
    console.log(usernameInputRef);
  };

  const handleChange = event => {
    // const isValid = event.target.value === event.target.value.toLowerCase();
    // setError(!isValid ? 'Username must be lower case!' : null);
    setUsername(event.target.value.toLowerCase());
  };

  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <p style={{color: 'red', fontStyle: 'italic'}}>{error}</p>
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
