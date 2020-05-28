import React from 'react';

export default function login () {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-10 col-lg-5">
            <div className="card">
              <div className="card-header">
                Sign In
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}