const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Julia"},
        {id: 2, name: "Pasha"},
        {id: 3, name: "Mama"},
        {id: 4, name: "Sergey"},
        {id: 5, name: "Ilya"},
        {id: 6, name: "Dima"},
    ],
    messages: [
        {id:1, message: "My first message"},
    ],
}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE :
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.newMessage}],
            }

        default: return state;
    }
}

export default messengerReducer;

export const sendMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage});

