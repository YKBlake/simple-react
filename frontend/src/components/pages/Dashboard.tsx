import React, { useRef } from 'react'
import TransferDialog from '../dialogs/TransferDialog'
import WithdrawDialog from '../dialogs/WithdrawDialog'
import DepositDialog from '../dialogs/DepositDialog'

function Dashboard() {
    const contentDivStyle = { width: '80%', maxWidth: '1248px',  height: '100%'} as React.CSSProperties
    const depositDialogRef = useRef<HTMLInputElement>(null)
    const withdrawDialogRef = useRef<HTMLInputElement>(null)
    const transferDialogRef = useRef<HTMLInputElement>(null)

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
                        <button className="primary" onClick={() => depositDialogRef.current?.showModal()}>Deposit</button>
                        <br/>
                        <button className="primary" onClick={() => withdrawDialogRef.current?.showModal()}>Withdraw</button>
                        <br/>
                        <button className="primary" onClick={() => transferDialogRef.current?.showModal()}>Transfer</button>
                    </div>
                </div>
            </div>
            <DepositDialog ref={depositDialogRef} />
            <TransferDialog ref={transferDialogRef} />
            <WithdrawDialog ref={withdrawDialogRef} />
        </>
    )
}

export default Dashboard
