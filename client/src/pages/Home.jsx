import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

import { Link } from 'react-router-dom';

const HomePage = () => {
 
  return (
<>
<h1>hello</h1>
<Link to="/Register"> register</Link>

</>
  );
};

export default HomePage;