export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER' :
            return{
                ...state,
                user:action.user
            }
        
        case 'SET_TOKEN' :
            return{
                ...state,
                token:action.token
            }
    
        case 'SET_PLAYLISTS' :
            return{
                ...state,
                playlists:action.playlists
            }
    
        case 'SET_DISCOVERY_WEEKLY' :
            return{
                ...state,
                discovery_weekly:action.discovery_weekly
            }
    
        default:
            return state
    }
}



export default reducer