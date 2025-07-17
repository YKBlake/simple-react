import React, {forwardRef, useRef} from "react"

const WithdrawDialog = forwardRef<HTMLInputElement, {}>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const deposit = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            const amount = inputRef.current?.value
            const response = await fetch(`/api/account/withdraw?amount=${amount}`, { method: "POST" })

            if(!response.ok) {
                alert('Error occurred on withdraw. Please try again.')
                return
            }

            alert('Withdraw successful')
            ref.current?.close()
        } catch(err) {
            console.error(err)
            alert("Network error. Please try again.")
        }
    }

    return(
        <>
            <dialog id="withdrawDialog" ref={ref}>
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={() => ref.current?.close()}></button>
                        <h3>Withdraw</h3>
                    </header>
                    <p>
                        <input type="number" ref={inputRef} placeholder="Enter amount to withdraw" required={true}/>
                    </p>
                    <footer>
                        <button role="button" onClick={() => ref.current?.close()}>Cancel</button>
                        <button role="button" onClick={deposit}>Confirm</button>
                    </footer>
                </article>
            </dialog>
        </>
    )
})

export default WithdrawDialog