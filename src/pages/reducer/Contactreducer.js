// const contactinfo=[];
const details=[];
export default(state=details,action)=>{
  switch(action.type){
      case 'Data_fetch_start':
        return {
              ...state,
              fetching:true
        }
        case 'Data_fetch':{
          return {
                  ...state,
                  studentdetails:action.payload,
                  fetching:false
              }
        }

        default:
            return state;
  }
}