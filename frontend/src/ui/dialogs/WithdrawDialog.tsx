import React, {forwardRef, useRef} from "react"
import { useAppContext } from '../utilities/AppContext'

const WithdrawDialog = forwardRef<HTMLInputElement, {}>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { balance, setBalance } = useAppContext()

    const withdraw = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            const amount = inputRef.current!.value
            const response = await fetch(`/api/account/withdraw?amount=${amount}`, { method: "POST" })
            const data = await response.text()

            if(!response.ok) {
                alert(data)
                return
            }

            setBalance(data)
            alert('Withdraw successful. New balance is: $' + data)
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
            <dialog id="withdrawDialog" ref={ref}>
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={closeDialog}></button>
                        <h3>Balance: ${balance}</h3>
                    </header>
                    <p>
                        <input type="number" ref={inputRef} placeholder="Enter amount to withdraw" required={true}/>
                    </p>
                    <footer>
                        <button role="button" onClick={withdraw}>Withdraw</button>
                    </footer>
                </article>
            </dialog>
        </>
    )
})

export default WithdrawDialog