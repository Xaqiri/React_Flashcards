import { React, useState } from 'react';
import { useNavigate } from 'react-router';

// TODO: Change user login check, end point will change to not return string

const SignIn = ({user, setUser}) => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('Sign In')
    let url = `http://localhost:8080/user/login`
    const handleSubmit = async (e) => {
        e.preventDefault()
        let u = {
            name: e.target.userName.value,
            password: e.target.userPass.value
        }
        await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },    
            method: 'POST',
            body: JSON.stringify(u)
        })
        .then(resp => {
            return resp.text()
        })
        .then(resp => {
            setMessage(resp)
            if (resp === 'User logged in.') {
                setUser(u)
                navigate('/')
            }
            e.target.userName.value = ''
            e.target.userPass.value = ''
        })
        .catch(e => {
            console.log(e)
        })
    }

    return (
        <div className='flex flex-col place-items-center'>
            <h1 className='text-3xl font-bold'>{message}</h1>
            <form onSubmit={handleSubmit} name='signInForm' className='flex flex-col w-1/2'>
                <label className='flex justify-between'>Name: <input name='userName' type='text' className='border border-black m-1 w-1/2'></input></label>
                <label className='flex justify-between'>Password: <input name='userPass' type='password' className='border border-black m-1 w-1/2'></input></label>
                <button className=' place-self-center border border-black m-1 w-1/2'>Submit</button>
            </form>
        </div>
    )
}

export default SignIn