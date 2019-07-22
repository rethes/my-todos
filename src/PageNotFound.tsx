import React from 'react';
import {Link, Route} from "react-router-dom";
import {App} from "./App";

interface PageNotFoundProps {
  title: string
  body: string
}

const props = {
  title: "404",
  body: "Page Not Found"
};

const PageNotFound: React.FC<PageNotFoundProps> = () => {
    return (
      <p>
        {props.title}
        <code>
          {props.body}
        </code>.
        <Link to="/">
          Home
        </Link>
        <Route path="/" exact component={App}/>
      </p>
    )
  }
;
export default PageNotFound;