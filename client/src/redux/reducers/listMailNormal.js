const defaultState = {
    listNormal: [],
}

export const listMailReducers = (state = defaultState, action) => {
    switch(action.type){
        case 'GOT_LIST' : {
            const newList = [action.list];
            return {
            ...state,
            listNormal : newList}
        }
        case 'DELETE_MAIL':{
            break
        }
        default : return state
    }
}
