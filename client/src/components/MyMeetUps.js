
import React from "react";

export class MyMeetUps extends React.Component {
     
  constructor() {
    super();
    this.state = {
      title: 'Your meetups',
      meetups: []
    }
  }
  componentDidMount () {
    var that = this;

    var request = new Request('http://localhost:3030/mymeetups', {
      method: 'GET',
      headers: new  Headers({'Content-Type':'application/json'})
    });

    fetch(request)
      .then(response => response.json())
      .then( json => {
        that.setState({
          meetups: json
        })
      })
      .catch( error => console.log('Error Fetch : ' + error ))
  }

  addMeetups(event) {
    var that = this;
    event.preventDefault();
    let meetup_data = {
      meetup_name : this.refs.meetup_name.value,
      date : this.refs.date.value,
      id : Math.random().toFixed(3)
    };
    var request = new Request('http://localhost:3030/meetups/new-meetup', {
      method: 'POST',
      headers: new  Headers({'Content-Type':'application/json'}),
      body: JSON.stringify(meetup_data)
    });

    fetch(request)
    .then(function(response){
      let meetups = that.state.meetups;

      meetups.push(meetup_data);
      console.log(meetup_data);
      that.setState({
            meetups: meetups
      })
      response.json()
        .then(function(data){
          })
        })
    .catch(function(err){
      console.log( 'Fetch Error addmeetup :-S', err);
    })

  }

  render() {
    let title = this.state.title;
    let meetups = this.state.meetups;
    console.log(meetups);
    return (
      <div className="main">
      <div className="meethead">
      <h1 class="text-uppercase"> {title} </h1>
      </div>
        <div class="your-meetups-container">
        <button class="btn add-my-meetup">Add new meetup</button>
      <form ref="meetupForm" />
      <div class="form-group"/>
        <label for="exampleInputEmail1">Meetup</label>
        <input type="text" ref="meetup_name" class="form-control" placeholder="Enter meetup"/>
      <div/>
      <div class="form-group"/>
        <label for="exampleInputPassword1">Date</label>
        <input type="text" ref="date" class="form-control" placeholder="Date"/>
      <div/>
      <button type="submit" onClick={this.addMeetups.bind(this)} class="btn">Submit</button>
      <form/>
    <div class="list-group">
      {meetups.map(meetup => 
        <a href="#" key={meetup.id} class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{meetup.name}</h5>
          <small>{meetup.data}</small>
        </div>
        <p class="mb-1"></p>
        <small></small>
      </a>
    )}
    </div>
   
    </div>
    </div>
);
  }
}
