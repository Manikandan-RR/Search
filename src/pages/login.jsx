import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import SimpleReactValidator from "simple-react-validator"

export const LoginPage = () => {

    
    const navigate = useNavigate();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [, forceUpdate] = useState(0)

    const validator = useRef(new SimpleReactValidator(
        {
            className: 'text-danger'
        }
    ))

    const userList = [
        {
            name: 'admin',
            email: 'admin@abc.com',
            password: '123'
        },

        {
            name: 'guest',
            email: 'guest@abc.com',
            password: 'guest@123'
        }
    ]

    useEffect(() => {
        const isLog = sessionStorage.getItem('isLogin')
        if (isLog) {
            navigate("/home")
        }

    }, [])

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();


        const isValid = validator.current.allValid();
        if (!isValid) {
            validator.current.showMessages();
            forceUpdate(1)
            return
        }

        const res = userList.find((user, i) => user.email === email && user.password === password)
        if (res) {
            sessionStorage.setItem('isLogin', true)
            navigate("/home")
        }
        else {
            alert('Login Failed')
        }
    }

    return (
        <>
            <div className="container vh-100">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">USER NAME</label>
                                        <input type="email" className="form-control" onChange={handleEmail} />
                                        {validator.current.message('Email', email, 'required|email')}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">PASSWORD</label>
                                        <input type="password" className="form-control" onChange={handlePassword} />
                                        {validator.current.message('Password', password, 'required')}
                                    </div>
                                    <button className="btn btn-success">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}