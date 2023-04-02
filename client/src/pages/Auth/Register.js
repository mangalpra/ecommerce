import React, { useState } from 'react';
import Layout from "../../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate(); 

    const [user, setUser] = useState({
        name: "", email: "", password: "", phone: "", address: "", question: "",
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    };

    // form function
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("/api/v1/auth/register",user)
                .then((res) => {
                    setUser({ name: "", email: "", password: "", phone: "", address: "", question: "" });
                    if(res && res.data.success){
                        toast.success(res.data && res.data.message);
                        navigate("/login");
                    }else{
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Something went wrong");
                })
    };

    return (
        <Layout title="Register - Ecommerce App">
            <div className="form-container" style={{ minHeight: "90vh" }}>
                <form onSubmit={handleSubmit}>
                    <h4 className="title">REGISTER FORM</h4>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="name"
                            value={user.name}
                            onChange={handleInputs}
                            className="form-control" 
                            id="exampleInputName"
                            placeholder="Enter Your Name" 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text"
                            name="email" 
                            value={user.email}
                            onChange={handleInputs}
                            className="form-control" 
                            id="exampleInputEmail"
                            placeholder="Enter Your Email" 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            name="password"
                            value={user.password}
                            onChange={handleInputs}
                            className="form-control" 
                            id="exampleInputPassword"
                            placeholder="Enter Password"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="phone"
                            value={user.phone}
                            onChange={handleInputs}
                            className="form-control" 
                            id="exampleInputPhone" 
                            placeholder="Enter Phone No."
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="address"
                            value={user.address}
                            onChange={handleInputs}
                            className="form-control" 
                            id="exampleInputAddress" 
                            placeholder="Enter Your Address"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="question"
                            value={user.question}
                            onChange={handleInputs}
                            className="form-control" 
                            id="exampleInputQuestion" 
                            placeholder="What is Your Favourite Sports?"
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                    >
                        REGISTER
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;