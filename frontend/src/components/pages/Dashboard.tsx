function Dashboard() {
    return (
        <>
            <div className="vcon-cen-cen" style={{ width: '100vw', height: '100vh' }}>
                <form method="post" action="/api/logout">
                    <button type="submit" className="primary">Logout</button>
                </form>
            </div>
        </>
    )
}

export default Dashboard
