import {React, useState} from 'react';
import { useNavigate } from 'react-router';


const SignUp = () => {
    let [message, setMessage] = useState('Create a new user')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let user = {
            name: e.target.userName.value,
            password: e.target.userPass.value
        }
        let url = `http://localhost:8080/user/add`

        await fetch(url, {
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },          
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then(resp => {
            return resp.text()
        }).then(resp => {
            e.target.userName.value = ''
            e.target.userPass.value = ''
            setMessage(resp)
            alert('User saved')
            if (resp === "Saved") navigate('/sign-in')
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div>
            <div className='flex flex-col place-items-center'>
            <h1 className='text-3xl font-bold'>{message}</h1>
            <form onSubmit={handleSubmit} name='signInForm' className='flex flex-col w-1/2'>
                <label className='flex justify-between'>Name: <input name='userName' type='text' className='border border-black m-1 w-1/2'></input></label>
                <label className='flex justify-between'>Password: <input name='userPass' type='password' className='border border-black m-1 w-1/2'></input></label>
                <button className=' place-self-center border border-black m-1 w-1/2'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default SignUp