import React, { useRef } from 'react';

function Dashboard() {
    const contentDivStyle = { width: '80%', maxWidth: '1248px',  height: '100%'} as React.CSSProperties;
    const depositDialogRef = useRef<HTMLInputElement>(null);
    const withdrawDialogRef = useRef<HTMLInputElement>(null);
    const transferDialogRef = useRef<HTMLInputElement>(null);
    const depositAmountTextInput = useRef<HTMLInputElement>(null);

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

            <dialog id="depositDialog" ref={depositDialogRef} open="">
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={() => depositDialogRef.current?.close()}></button>
                        <h3>Deposit</h3>
                    </header>
                    <p>
                        <input type="text" ref={depositAmountTextInput} placeholder="Enter the amount" required/>
                    </p>
                    <footer>
                        <button role="button" onClick={() => depositDialogRef.current?.close()}>Cancel</button><button autofocus="" role="button" onClick={() => depositDialogRef.current?.close()}>Confirm</button>
                    </footer>
                </article>
            </dialog>

            <dialog id="withdrawDialog" ref={withdrawDialogRef} open="">
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={() => withdrawDialogRef.current?.close()}></button>
                        <h3>Withdraw</h3>
                    </header>
                    <p>
                        Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue finibus
                        pellentesque. Nullam finibus risus non semper euismod.
                    </p>
                    <footer>
                        <button role="button" onClick={() => withdrawDialogRef.current?.close()}>Cancel</button><button autofocus="" role="button" onClick={() => withdrawDialogRef.current?.close()}>Confirm</button>
                    </footer>
                </article>
            </dialog>

            <dialog id="transferDialog" ref={transferDialogRef} open="">
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={() => transferDialogRef.current?.close()}></button>
                        <h3>Transfer</h3>
                    </header>
                    <p>
                        Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue finibus
                        pellentesque. Nullam finibus risus non semper euismod.
                    </p>
                    <footer>
                        <button role="button" onClick={() => transferDialogRef.current?.close()}>Cancel</button><button autofocus="" role="button" onClick={() => transferDialogRef.current?.close()}>Confirm</button>
                    </footer>
                </article>
            </dialog>
        </>
    )
}

export default Dashboard
