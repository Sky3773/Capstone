import React, {useState} from 'react'

// ContactUs = () => {
    function ContactUs(){

        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(name)
            console.log(email)
            console.log(message)
            // reset the form
            setEmail('')
            setMessage('')
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
            onChange={(e) => setMessage(e.target.value)}>Message</textarea>
            <br/>

            <button type='submit'>Submit</button>

        </form>
    )
}

export default ContactUs