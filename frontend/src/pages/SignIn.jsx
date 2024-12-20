import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../Components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({}); //this is for store the from data 
  const {loading, error:errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange =(e) => {
    setFormData({...formData,[e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please Fill all the fields'));
    }
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/SignIn',{
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(formData),
      });

      const data = await res.json();

      if(data.success === false){
        dispatch(signInFailure(data.message));
      }

      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }catch(error){
      dispatch(signInFailure(error.message));
    }


  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left  */}
        <div className="flex-1">
        <Link to="/" className='font-bold dark:text-white text-4xl'> 
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white'>Gihan</span> Blog
        </Link>
        </div>
        {/* right  */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div >
              <Label value="Your Email" />
              <TextInput type="email" placeholder="name@company.com" onChange={handleChange} id="email"/>
            </div>
            <div >
              <Label value="Youer Password" />
              <TextInput type="password" placeholder="*********" onChange={handleChange} id="password"/>
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className="pl-3">Loading..</span>
                  </>
                ) : 'Sign In'   
              }
            </Button>

            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont Have an account ?</span>
            <Link to='/sign-up' className="text-blue-500">Sign up</Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-4" color="failure">
                {errorMessage}
              </Alert>
            )
          }
        </div>
        
      </div>
    </div>
  )
}
