import React from 'react';
import'./Newsletter.css';

export default function Newsletter() {
  return (
    <div className="newsletter wrapper">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-content text-center">
          <h2>Hurry up! Subscribe our newsletter
            and <br></br> get 25% off
          </h2>
          <p>Limited offer for this month. No credit card required.</p>
        </div>
        <form className="newsletter">
          <div className="row mt-4 mb-5">
            <div className="col-md-8">
              <input className="form-control" type="email" name="email" placeholder="Enter your email"/>
            </div>
            <div className="col-md-4">
              <button className="mainBtn" type="submit">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
