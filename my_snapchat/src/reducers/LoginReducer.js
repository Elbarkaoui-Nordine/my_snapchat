const inistialState = {
    verification: null,
    logged: false,
    isLoading: false,
}  

export default function(state = inistialState, action) 
{
    switch (action.type)
    {
        case 'user_loading':
            return {
                ...state,
                isLoading: true
            };
        break;
        case 'login_success':
            return {
                ...state,
                verification: action,
                logged: true,
                isLoading: false
            };
        break;
        case 'is_logged':
            return{

            }
        case 'login_fail':
            return {
                ...state,
                isLoading: false
            };
        break;
        default:
            return state;
    }
}