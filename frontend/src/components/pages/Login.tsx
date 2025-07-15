import { useSearchParams } from 'react-router-dom'

function Login() {
    const [searchParams] = useSearchParams();
    const isError = searchParams.get('error') != null;

    return (
        <>
            <div className="vcon-cen-cen" style={{ height: "100vh" }}>
                <div className="vcon-fs-fs" style={{ width: '400px' }}>
                    <form method="post" action="/api/authenticate" style={{ width: '100%' }}>
                        <h2>Please sign in</h2>
                        <p>
                            <label htmlFor="username" className="screenreader">Username</label>
                            <input type="text" id="username" name="username" placeholder="Username" required autoFocus/>
                        </p>
                        <p>
                            <label htmlFor="password" className="screenreader">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" required/>
                        </p>
                        { isError && error() }
                        <button type="submit" className="primary">Sign in</button>
                    </form>
                    <button className="primary" style={{ width: '100%' }}>Sign up</button>
                </div>
            </div>
        </>
    )
}

function error() {
    return (
        <>
            <div className="vcon-cen-cen" style={{ width: "100%" }}>
                <div style={{ color: 'red' }}>Invalid credentials!</div>
            </div>
        </>
    )
}

export default Login
