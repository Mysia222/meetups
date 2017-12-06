import React from "react";

export class Register extends React.Component {
    constructor() {
        super();
        this.state = {
          title: 'Register',
          users: []
        }
      } 


      addUser(event) {
        var that = this;
        event.preventDefault();
        let userData = {
          username : this.refs.username.value,
          password : this.refs.password.value,
          email: this.refs.email.value
        };
        var request = new Request('http://localhost:3030/signup', {
          method: 'POST',
          headers: new  Headers({'Content-Type':'application/json'}),
          body: JSON.stringify(userData)
        });
    
        fetch(request)
        .then(function(response){
          let users = that.state.users;
          users.push(userData);
          console.log(userData);
          that.setState({
                users: users
          })
          response.json()
            .then(function(data){
              console.log(users);
              })
            })
        .catch(function(err){
          console.log( 'Fetch Error add user :-S', err);
        })
    
      }    

    render() {
        let title = this.state.title;
        let users = this.state.users;
      console.log(users);
        return (
            <div>
            <h1 class="form-title"> {title} </h1>
            <div className="login-container">
            <form>
            <div class="form-group">
            <label> Username </label>
            <input ref="username" type="text" class="form-control" placeholder="Enter username"/>
          </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input ref="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input ref="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Repeat Password</label>
            <input ref="config_password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" onClick={this.addUser.bind(this)}  class="btn">Submit</button>
          </form>
          </div>
          <div class="list-group">
          {users.map(country => 
            <a href="#" key={country.id} class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{country.username}</h5>
              <small>{country.mail}</small>
            </div>
            <p class="mb-1"></p>
            <small></small>
          </a>
        )}
        </div>
          </div>
        );
    }
}