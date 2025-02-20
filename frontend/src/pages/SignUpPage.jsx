import {useState} from 'react'
import {useAuthStore} from '../store/useAuthStore'
import { MessageSquare } from 'lucide-react';
import "../styles/SignUpPage.css"

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () => {

  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='signup'>
      {/* left side */}
      <div className='leftColumn'>
        <div className='logo'>
            <MessageSquare className='size-6 text-primary'/>
        </div>
        <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
        <p className='text-base-content/60'>Get started with your free account</p>
      </div>
    </div>
  )
}

export default SignUpPage