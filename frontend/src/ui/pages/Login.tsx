import { useNavigate, useSearchParams } from 'react-router-dom'

function Login() {
    const [searchParams] = useSearchParams()
    const isError = searchParams.get('error') != null

    const navigate = useNavigate()
    const navigateToSignUp = () => {
        navigate("/register")
    }

    return (
        <>
            <div className="vcon-cen-cen" style={{ height: "100vh" }}>
                <div className="vcon-fs-fs" style={{ width: '400px' }}>
                    <form method="post" action="/api/authenticate" style={{ width: '100%' }}>
                        <h2>Please sign in</h2>
                        { isError && error() }
                        <p>
                            <input type="text" id="username" name="username" placeholder="Username" required autoFocus/>
                            <input type="password" id="password" name="password" placeholder="Password" required/>
                        </p>
                        <button type="submit" className="primary" style={{ maxWidth: '' }}>Sign in</button>
                    </form>
                    <button className="primary" style={{ width: '100%' }} onClick={navigateToSignUp}>Sign up</button>
                </div>
            </div>
        </>
    )
}

function error() {
    return (
        <>
            <div className="vcon-cen-cen" style={{ width: "100%" }}>
                <label style={{ color: 'red' }}>Invalid credentials!</label>
            </div>
        </>
    )
}

export default Login
