import tokenService from './tokenService';

const BASE_URL = 'http://localhost:8000/routes/userRoutes/';

async function signup(user) {
  console.log("user", user)
    await fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  // Parameter destructuring! .then(({token}) => 
  
  .then((token) => token.token)
 

  
}
async function getUser1() { 
  return await fetch('http://localhost:8000/routes/athleteRoutes/6327d0c3327a564e97e5c280', {
    method: 'GET',
    headers:{'Content-Type': 'application/json'},
    
  })
  .then(res => {
    if (res.ok) return res.json();

  })
}
function getUser() {
  return tokenService.getUserFromToken();

}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

export default {
  signup, 
  getUser,
  getUser1,
  logout,
  login
};