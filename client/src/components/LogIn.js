import React from "react";

export class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
          title: 'Log In'
        }
      } 
    render() {
        let title = this.state.title;
        return (
          <div>
          <h1 class="form-title"> {title} </h1>
            <div className="login-container">
            <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" class="btn">Submit</button>
          </form>
          </div>
          </div>
        );
    }
}