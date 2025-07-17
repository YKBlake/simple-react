import React, {forwardRef, useRef} from "react"

const TransferDialog = forwardRef<HTMLInputElement, {}>((props, ref) => {
    const ibanInputRef = useRef<HTMLInputElement>(null)
    const amountInputRef = useRef<HTMLInputElement>(null)

    const transfer = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            const iban = 'TR' + ibanInputRef.current?.value
            if(iban.length!==34) {
                alert('Invalid IBAN')
                return
            }

            const amount = amountInputRef.current?.value
            const response = await fetch(`/api/account/transfer?iban=${iban}&amount=${amount}`, { method: "POST" })

            if(!response.ok) {
                alert('Error occurred at transfer. Please try again.')
                return
            }

            alert('Transfer successful')
            ref.current?.close()
        } catch(err) {
            console.error(err)
            alert('Network error. Please try again.')
        }
    }

    return(
        <>
            <dialog id="transferDialog" ref={ref}>
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={() => ref.current?.close()}></button>
                        <h3>Transfer</h3>
                    </header>
                    <p>
                        <div className="hcon-cen-cen">
                            <label style={{ marginRight: '16px' }}>TR</label>
                            <input type="number" ref={ibanInputRef} placeholder="Enter target IBAN number" required={true}/>
                        </div>
                        <input type="number" ref={amountInputRef} placeholder="Enter amount to transfer" required={true}/>
                    </p>
                    <footer>
                        <button role="button" onClick={() => ref.current?.close()}>Cancel</button>
                        <button role="button" onClick={transfer}>Confirm</button>
                    </footer>
                </article>
            </dialog>
        </>
    )
})

export default TransferDialog