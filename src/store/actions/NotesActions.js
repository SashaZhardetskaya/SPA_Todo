import api from '../../api';

export const LOAD_NOTES_REQUEST = 'LOAD_NOTES_REQUEST';
export const LOAD_NOTES_SUCCESS = 'LOAD_NOTES_SUCCESS';
export const LOAD_NOTES_FAIL = 'LOAD_NOTES_FAIL';
export const CREATE_NOTES_REQUEST = 'CREATE_NOTES_REQUEST';
export const CREATE_NOTES_FAIL = 'CREATE_NOTES_FAIL';
export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_FAIL = 'DELETE_NOTE_FAIL';


export function loadNotes() {
    return (dispatch) => {
        dispatch({
            type: LOAD_NOTES_REQUEST,
        });

        api.listNotes()
            .then(({ data }) =>
                dispatch({
                    type: LOAD_NOTES_SUCCESS,
                    payload: data
                })
            )
            .catch(err =>
                dispatch({
                    type: LOAD_NOTES_FAIL,
                    payload: err
                })
            );
    }
}

export function createNote(note) {
    return (dispatch) => {
        dispatch({
            type: CREATE_NOTES_REQUEST,
            payload: note
        });

        api.createNote(note)
            .then(() =>
                dispatch(loadNotes())
            )
            .catch(err =>
                dispatch({
                    type: CREATE_NOTES_FAIL,
                    payload: err
                })
            );
    }

}


export function deleteNote(noteId) {
    return (dispatch) => {
        dispatch({
            type: DELETE_NOTE_REQUEST,
            payload: noteId
        });

        api.deleteNote(noteId)
            .then(() =>
                dispatch(loadNotes())
            )
            .catch(err =>
                dispatch({
                    type: DELETE_NOTE_FAIL,
                    payload: err
                })
            );
    }

}
