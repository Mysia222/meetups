import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
            <div class="container">

          <div class="row">
            <div class="col-md-4">
            <h4> Lorem Ipsum </h4>
            <ul class="footer-menu">
                <li > <a href="#"> Lorem Ipsum </a> </li>
                <li> <a href="#"> Lorem Ipsum </a> </li>
                <li> <a href="#"> Lorem Ipsum </a> </li>
            </ul>
            </div>
            <div class="col-md-4">
            <h4> Lorem Ipsum </h4>
            <ul class="footer-menu">
                <li > <a href="#"> Lorem Ipsum </a> </li>
                <li> <a href="#"> Lorem Ipsum </a> </li>
                <li> <a href="#"> Lorem Ipsum </a> </li>
            </ul>
            </div>
            <div class="col-md-4">
            <h4> Social </h4>
            <ul class="social">
            <li> <a href="#"> <i class=" fa fa-facebook">   </i> </a> </li>
            <li> <a href="#"> <i class="fa fa-twitter">   </i> </a> </li>
            <li> <a href="#"> <i class="fa fa-google-plus">   </i> </a> </li>
            </ul>
            <ul class="social">
            <li> <a href="#"> <i class="fa fa-pinterest">   </i> </a> </li>
            <li> <a href="#"> <i class="fa fa-youtube">   </i> </a> </li>
            </ul>
            </div>
          </div>
            </div>
          </footer>
        );
    }
}