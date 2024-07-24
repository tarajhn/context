import React,{CreatContext,UseState} from 'react'
import  Children  from './Pages/Children'
 export const UserNameContext=CreatContext({
    UserNamex:''
})

const Home=()=>{
    const [userName,setUserName]=UseState('David')
    return(
        
        <div className=' bg-gray-200  '>
            <UserNameContext.Provider value={{
                userNamex: userName

            }}>
                <Children
                placeholder={'write your Info'}/>

                </UserNameContext.Provider>
        </div>
    )
}