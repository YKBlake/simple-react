function Dashboard() {
    const contentDivStyle = { width: '80%', maxWidth: '1248px',  height: '100%'} as React.CSSProperties;

    return (
        <>
            <div className="vcon-fs-cen" style={{ width: '100vw', height: '100vh'}}>
                <div className="vcon-fs-fs" style={contentDivStyle}>
                    <br/>
                    <div className="hcon-fe-cen" style={{ width: '100%' }}>
                        <form method="post" action="/api/logout">
                            <button type="submit" className="primary">Logout</button>
                        </form>
                    </div>
                    <div className="vcon-cen-cen" style={{ width: '100%', flexGrow: '1' }}>
                        <button className="primary">Deposit</button>
                        <br/>
                        <button className="primary">Withdraw</button>
                        <br/>
                        <button className="primary">Transfer</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
