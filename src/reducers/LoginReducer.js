const initState = {
    access_token: '',
    username: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            state.access_token = 'Bearer ' + 1
            state.username = action.params.username

            sessionStorage.setItem('access_token', state.access_token)
            sessionStorage.setItem('username', state.username)
            
            return state
        }
        default: 
            return state
    }
}