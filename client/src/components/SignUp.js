import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function SignUp() {
    const initialValue = {
        name: "",
        email: "",
        password: ""
    };
    const [user, setUser] = useState(initialValue);
    const navigate = useNavigate();

    const getSignUp = async (userDetail) => {
        const response = await axios.post("http://localhost:8080/api/user/auth/signup", userDetail);
        if (response.data.success) {
            navigate('/');
        }
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getSignUp(user);
        setUser(initialValue);
    }
  return (
    <div className="Box">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card card-body" style={{ marginTop: 150, backgroundColor: "crimson" }}>
                <h4 style={{color: "white", marginLeft: "30%"}}>Admin Dashboard</h4>
              <form
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="_csrf"
                  value="7635eb83-1f95-4b32-8788-abec2724a9a4"
                />
                <div className="form-group required">
                  <label
                    className="d-flex flex-row align-items-center"
                    htmlFor="Name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                    id="name"
                    name="name"
                    value={user.name}
                    placeholder="name"
                    onChange={((e)=> setUser({...user, name: e.target.value}))}
                  />
                </div>
                <div className="form-group required">
                  <label htmlFor="username">Username/Email</label>
                  <input
                    type="text"
                    className="form-control text-lowercase"
                    id="username"
                    required=""
                    name="username"
                    value={user.email}
                    placeholder="Username"
                    onChange={((e)=> setUser({...user, email: e.target.value}))}
                  />
                </div>
                <div className="form-group required">
                  <label
                    className="d-flex flex-row align-items-center"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    required=""
                    id="password"
                    name="password"
                    value={user.password}
                    placeholder="password"
                    onChange={((e)=> setUser({...user, password: e.target.value}))}
                  />
                </div>
                <div className="form-group pt-1">
                  <button className="btn btn-primary btn-block" type="submit">
                    Sign Up
                  </button>
                </div>
                <p className="small-xl pt-3 text-center">
                  <span className="text-muted">Already have an account</span>
                  <Link to="/">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default SignUp;
