import * as NotesActions from '../actions/NotesActions';


const defaultState = {
    notes: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NotesActions.LOAD_NOTES_REQUEST:
            return {
                ...state,
                notes: action.payload
            };
        default:
            return state;
    }
}