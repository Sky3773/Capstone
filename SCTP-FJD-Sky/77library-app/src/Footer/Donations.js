import React, {useState} from 'react'


    function Donations(){

        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [amount, setAmount] = useState('')
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(name)
            console.log(email)
            console.log(amount)
            // reset the form
            setEmail('')
            setAmount('')
            setName('')


        }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='none'value={name} 
            onChange={(e) => setName(e.target.value)}/><br/>

            <label htmlFor='email'>Email</label>
            <input type='email' id='email'value={email}
            onChange={(e) => setEmail(e.target.value)}/><br/>
            
            <label htmlFor='msg'>Message</label>
            <textarea id='msg' value={message}
            onChange={(e) => setAmount(e.target.value)}>Amount</textarea>
            <br/>

            <button type='submit'>Submit</button>

        </form>
    )
}

export default Donations