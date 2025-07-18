import React, {forwardRef, useRef} from "react"
import { useAppContext } from '../utilities/AppContext'

const DepositDialog = forwardRef<HTMLInputElement, {}>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { balance, setBalance } = useAppContext()

    const deposit = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            const amount = inputRef.current!.value
            const response = await fetch(`/api/account/deposit?amount=${amount}`, { method: "POST" })
            const data = await response.text()

            if(!response.ok) {
                alert(data)
                return
            }

            setBalance(data)
            alert('Deposit successful. New balance is: $' + data)
            closeDialog()
        } catch(err) {
            console.error(err)
            alert("Network error. Please try again.")
        }
    }

    const closeDialog = () => {
        ref.current?.close()
        inputRef.current!.value = ""
    }

    return(
        <>
            <dialog id="depositDialog" ref={ref}>
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={closeDialog}></button>
                        <h3>Balance: ${balance}</h3>
                    </header>
                    <p>
                        <input type="number" ref={inputRef} placeholder="Enter amount to deposit" required={true}/>
                    </p>
                    <footer>
                        <button role="button" onClick={deposit}>Deposit</button>
                    </footer>
                </article>
            </dialog>
        </>
    )

})

export default DepositDialog