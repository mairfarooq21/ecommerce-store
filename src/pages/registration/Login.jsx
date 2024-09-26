import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';

function Login() {
    const context = useContext(myContext)
    const {loading, setLoading} = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const Login = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth,email,password);
            toast.success("Login successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(loading)
        }

    }
   
    return (
        <div className=' flex justify-center items-center h-screen' style={{ fontFamily: 'Poppins, sans-serif' }}>
            {loading && <Loader/>}
            <div className=' bg-white px-10 py-10 rounded-xl'>
                <div className="">
                    <h1 className='text-center text-black text-3xl mb-4 font-bold py-6'>Login</h1>
                </div>
                <div>
                    <input type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                        name='email'
                        className=' bg-white mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-black placeholder:text-gray-500 outline-none border border-black'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className=' bg-white mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-black placeholder:text-gray-500 outline-none border border-black'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={Login}
                        className=' bg-[#0071dc] w-full text-white font-[500]  px-2 py-2 rounded-full'>
                        Login
                    </button>
                </div>
                <div className='mt-10'>
                    <h2 className='text-black text-center'>Don't have an account? <Link className=' text-[#0071dc] font-bold' to={'/signup'}> Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login