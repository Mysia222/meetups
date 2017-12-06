import React from "react";
import { Link as Linker } from 'react-router-dom';

export class Home extends React.Component {
    render() {
        return (
                    <div className="masthead">
                        <div class="col-lg-10 mx-auto">
                         <h1 class="text-uppercase">
                          <strong>Information Technology Meetups</strong>
                         </h1>
                          <br/>
                          <Linker class="btn btn-primary btn-xl" to='/login'>Sign up</Linker>
                        </div>
                    </div> 
        );
    }
}