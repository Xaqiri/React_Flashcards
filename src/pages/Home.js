import { React } from 'react';

const Home = ({ user }) => {
    
    return (
        <div className='h-screen p-5 text-2xl bg-slate-600 text-cyan-200'>
            <h1 >Home: {user.name}</h1>
        </div>
    )
}

export default Home