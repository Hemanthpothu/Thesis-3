import React from 'react'
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";
import he from "../assets/images/logo.png";
function Nmrsub(props) {
  return (
      <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={props.icon1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{props.title1}</h5>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={props.icon2} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{props.title2}</h5>
     </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={props.icon3} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{props.title3}</h5>
    </div>
  </div>
</div>
  )
}

export default Nmrsub;