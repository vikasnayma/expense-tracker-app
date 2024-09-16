import React from 'react'
// import { getAuth } from "firebase/auth";
import Signin from './Signin';

// const SignupUser = (auth, email, password) => {
//   createUserWithEmailAndPassword(
//     auth,
//     "vikas@gmail.com",
//     "vikas@123"
//   ).then((value) => console.log(value));
// }

// const email = "vikas1234@gmail.com";
// const password = "vikas12345";

// const SignupUser = async () => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     console.log(res);
//   } catch (err) {
//     console.log("Some error", err);
//   }
// }

function Home() {
  return (
    <div>
      {/* <Signup/> */}
      <Signin/>
    </div>
  )
}
export default Home
