import {UserNameContext} from "./Pages/Home"
import { useContext } from "react"
Const Input=({placeholder})=>{
    const data=useContext(UserNameContext)
    console.log(data)
    return( 
    <>
    
  <input onChange={(e)=>setUserNamex(e.target.value)}
  className="bg-violet-500 border border-solid border-slate-700"
placeholder={placeholder} type="text" 
/>
    </>

    )
   
}
export default Input