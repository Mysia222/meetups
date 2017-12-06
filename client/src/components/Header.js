import React from "react";
import { Link as Linker } from 'react-router-dom';


export class Header extends React.Component {
    render() {
        return (
          <nav class="navbar navbar-default" role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
            <Linker class="navbar-brand" to='/'>MeetUps</Linker>
            </div>
           
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
              <li ><Linker to='/mymeetups'> My MeetUps</Linker></li>
              </ul>
          
              <ul class="nav navbar-nav navbar-right">
              <li ><Linker to='/login'>Log In</Linker></li>
                <li ><Linker to='/register'>Register</Linker></li>
              </ul>
            </div>
          </div>
        </nav>
        );
    }
}