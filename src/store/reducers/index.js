const INITAL_STATE={
    loggedUser:"",
    btnName:"",
    status:"",
    adminLogin:false
}

export default(state=INITAL_STATE,action)=>{


  switch (action.type) {
      case "LoggedIn":
        return(
            {
                ...state,loggedUser:action.data
            }
        )
        case "REMOVE_LOGGED_USER":
            return(
                {
                    ...state,loggedUser:action.data
                }
            )
        
            case "BTN_NAME_OUT":
                return(
                    {
                        ...state,btnName:action.data
                    }
                )
             case "BTN_NAME_IN":
                 return(
                      {
                            ...state,btnName:action.data
                     }
                    )

             case "ADMIN_LOGIN"  :     

             return(
                 {
                       ...state,adminLogin:action.data
                 }
             )
    
  
      default:
        return state
  }

}