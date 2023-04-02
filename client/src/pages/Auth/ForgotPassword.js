import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [question, setQuestion] = useState("");

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const res = await axios.post("/api/v1/auth/forgot-password", {
            email, newPassword, question
        });
        if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            navigate("/login");
        } else {
            toast.error(res.data.message);
        }
        }catch(error){
        console.log(error);
        toast.error("Something went wrong");
        }
    };
    return (
        <Layout title={"Forgot Password - Ecommerce APP"}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">RESET PASSWORD</h4>
                    <div className="mb-3">
                        <input 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" 
                            id="exampleInputEmail"
                            placeholder="Enter Your Email" 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="form-control" 
                            id="exampleInputQuestion"
                            placeholder="Enter Your Favourite Sport Name" 
                            required
                        />
                    </div>    
                    <div className="mb-3">
                        <input 
                            type="password" 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control" 
                            id="exampleInputNewPassword"
                            placeholder="Enter Password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        RESET
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default ForgotPassword;