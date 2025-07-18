import React, {forwardRef, useRef} from "react"
import { useAppContext } from '../utilities/AppContext'

const TransferDialog = forwardRef<HTMLInputElement, {}>((props, ref) => {
    const ibanInputRef = useRef<HTMLInputElement>(null)
    const amountInputRef = useRef<HTMLInputElement>(null)
    const { balance, setBalance } = useAppContext()

    const transfer = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            const iban = 'TR' + ibanInputRef.current!.value
            console.log(iban)
            console.log(iban.length)
            if(iban.length!==20) {
                alert('Invalid IBAN')
                return
            }

            const amount = amountInputRef.current!.value
            const response = await fetch(`/api/account/transfer?iban=${iban}&amount=${amount}`, { method: "POST" })
            const data = await response.text()

            if(!response.ok) {
                alert(data)
                return
            }

            setBalance(data)
            alert('Transfer successful. New balance is: $' + data)
            closeDialog()
        } catch(err) {
            console.error(err)
            alert('Network error. Please try again.')
        }
    }

    const closeDialog = () => {
        ref.current?.close()
        ibanInputRef.current!.value = ""
        amountInputRef.current!.value = ""
    }

    return(
        <>
            <dialog id="transferDialog" ref={ref}>
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={closeDialog}></button>
                        <h3>Balance: ${balance}</h3>
                    </header>
                    <p>
                        <div className="hcon-cen-cen">
                            <label style={{ marginRight: '16px' }}>TR</label>
                            <input type="number" ref={ibanInputRef} placeholder="Enter target IBAN number" required={true}/>
                        </div>
                        <input type="number" ref={amountInputRef} placeholder="Enter amount to transfer" required={true}/>
                    </p>
                    <footer>
                        <button role="button" onClick={transfer}>Transfer</button>
                    </footer>
                </article>
            </dialog>
        </>
    )
})

export default TransferDialog