import React, {useState} from 'react'


    function SignUpForm(){

        const [FirstName, setFirstName] = useState('')
        const [LastName, setLastName] = useState('')
        const [Birthday, setBirthday] = useState('')
        const [Address, setAddress] = useState('')
        const [ContactNumber, setContactNumber] = useState('')
        const [Email, setEmail] = useState('')
        const [message, setMessage] = useState('')
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(FirstName)
            console.log(LastName)
            console.log(Birthday)
            console.log(Address)
            console.log(ContactNumber)
            console.log(Email)
            console.log(message)
            // reset the form
            setFirstName('')
            setLastName('')
            setBirthday('')
            setAddress('')
            setContactNumber('')
            setEmail('')
            setMessage('')


        }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>FirstName</label>
            <input type='text' id='none'value={name} 
            onChange={(e) => setFirstName(e.target.value)}/><br/>

            <label htmlFor='name'>LastNameName</label>
            <input type='text' id='none'value={name} 
            onChange={(e) => setLastName(e.target.value)}/><br/>

            <label htmlFor='name'>Birthday</label>
            <input type='text' id='none'value={name} 
            onChange={(e) => setBirthday(e.target.value)}/><br/>

            <label htmlFor='name'>Address</label>
            <input type='text' id='none'value={name} 
            onChange={(e) => setAddress(e.target.value)}/><br/>

            <label htmlFor='name'>ContactNumber</label>
            <input type='text' id='none'value={name} 
            onChange={(e) => setContactNumber(e.target.value)}/><br/>

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

export default SignUpForm