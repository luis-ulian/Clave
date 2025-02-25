import {useState} from 'react'
import {useAuthStore} from '../store/useAuthStore'
import "../styles/SignUpPage.css"
import {Eye, EyeOff, Loader, Loader2, Lock} from "lucide-react"

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
      {/* LEFT SIDE */}
      <div className='leftSide'>
        <div className='leftSideController'>  
          {/* LOGO */ }
          <div className='logoDiv'>
            <div className="logoController group">
              <img src="pngegg.png" alt="atizap2-logo" className='logo group-hover:bg-primary/20 transition-colors'/>
              <h1 className='text-2xl font-bold mt-2'>Criar conta</h1>
              <p className='text-base-content/60'>Comece agora a usar o Clave!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Nome completo</span>
              </label>
              <div className='inputController'>
                <div className="inputImg">
                  <img src="user.png" alt="profileImg" className='img'/>
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="João Nascimento"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="inputController">
                <div className="inputImg">
                  <img src="email-line-icon-png.png" alt="mail img" className="img" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-tex">Senha</span>
              </label>
              <div className="inputController">
                <div className="inputImg">
                  <Lock className ="img"></Lock>
                </div>
                <input 
                  type= {showPassword ? "text" : "password"} 
                  className='input input-bordered w-full pl-10 text-base-content/40'
                  placeholder='•••••••••••'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value})}
                 />
                 <button
                  type='button'
                  className='showPassBtn'
                  onClick={() => setShowPassword(!showPassword)}>

                  {showPassword ? (<EyeOff className='img'/>
                  ) : (<Eye className='img'/>)}
                  
                 </button>
              </div>
            </div>
            <button type='submit' className='submit' disabled={isSigningUp}>
              {isSigningUp ? (<Loader2 className='size-5 animate-spin'/>) : 
              ("Criar conta")}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage