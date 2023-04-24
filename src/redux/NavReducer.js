const initialState={
    title:"Notes"
}

export function navReducer(state=initialState,action){
switch(action.type){
case "Notes":
    return{
        ...state,title:"Notes"
    }
    case "Archive":
    return{
        ...state,title:"Archive"
    }
    case "Trash":
    return{
        ...state,title:"Trash"
    }
    default:
        return state
}
}