import React, { useState } from "react"

function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const response = await fetch(`/api/account/add?username=${username}&password=${password}`, { method: "POST" })

            if (!response.ok) {
                alert(`There is an account with username: ${username}`)
                return
            }

            alert('Successfully signed up!')
            window.location.href = "/login"
        } catch (err) {
            console.log(err)
            alert("Network error. Please try again.")
        }
    }

    return (
        <>
            <div className="vcon-cen-cen" style={{ height: "100vh" }}>
                <div className="vcon-fs-fs" style={{ width: '400px' }}>
                    <form onSubmit={handleSignUp} style={{ width: '100%' }}>
                        <h2>Please sign up</h2>
                        <p>
                            <label htmlFor="username" className="screenreader">Username</label>
                            <input type="text" id="username" name="username" placeholder="Username" required autoFocus value={username} onChange={e => setUsername(e.target.value)}/>
                        </p>
                        <p>
                            <label htmlFor="password" className="screenreader">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}/>
                        </p>
                        <button type="submit" className="primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp