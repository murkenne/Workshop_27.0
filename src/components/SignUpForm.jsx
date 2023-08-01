import { useState } from 'react';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault();
     // You can perform asynchronous operations here using await if needed
     try { 
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "some-username",
            password: "super-secret-999"
        })
     })
        const result = await response.json();
        console.log(result);
     } catch (error) {
        setError(error.message);
     }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{""} <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:{""} <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;
