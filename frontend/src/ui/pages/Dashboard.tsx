import React, { useEffect, useRef } from 'react'
import TransferDialog from '../dialogs/TransferDialog'
import WithdrawDialog from '../dialogs/WithdrawDialog'
import DepositDialog from '../dialogs/DepositDialog'
import { useAppContext } from "../utilities/AppContext"

function Dashboard() {
    const contentDivStyle = { width: '80%', maxWidth: '1248px',  height: '100%'} as React.CSSProperties
    const depositDialogRef = useRef<HTMLInputElement>(null)
    const withdrawDialogRef = useRef<HTMLInputElement>(null)
    const transferDialogRef = useRef<HTMLInputElement>(null)
    const { iban, setIban, username, setUsername, balance, setBalance } = useAppContext()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/account/page-init`, {method: "GET"})
                const dto = await response.json()
                setIban(dto.iban)
                setUsername(dto.username)
                setBalance(dto.balance)
            } catch (err) {
                console.error(err)
                alert("Network Error occurred.")
            }
        }
        fetchData()
    }, [])

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
                        <p className="vcon-spce-fs">
                            <label>{username}</label>
                            <label>IBAN: {iban}</label>
                            <label>Balance: ${balance}</label>
                        </p>
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
