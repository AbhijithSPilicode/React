import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

// const Container = () => {
//   return (
//     <div>
//       <div>Hey Kalvians! Welcome to React Learning</div>
//       <div>Let's rock and roll</div>
//     </div>
//   );
// };
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}

export default Container;