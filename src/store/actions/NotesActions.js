import api from '../../api';

export const LOAD_NOTES_REQUEST = 'LOAD_NOTES_REQUEST';
export const LOAD_NOTES_SUCCESS = 'LOAD_NOTES_SUCCESS';
export const LOAD_NOTES_FAIL = 'LOAD_NOTES_FAIL';
export const CREATE_NOTES_REQUEST = 'CREATE_NOTES_REQUEST';
export const CREATE_NOTES_FAIL = 'CREATE_NOTES_FAIL';


function actionNotesLoaded(data) {
    console.log('----data', data);
    return {
        type: LOAD_NOTES_SUCCESS,
        payload: data
    }
}


export function loadNotes() {
    return (dispatch) => {
        dispatch({
            type: LOAD_NOTES_REQUEST,
        });

        api.listNotes()
            .then(({ data }) =>
                dispatch(
                    actionNotesLoaded(data)
                )
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
                loadNotes()
            )
            .catch(err =>
                dispatch({
                    type: CREATE_NOTES_FAIL,
                    payload: err
                })
            );
    }

}

// function actionStudentsLoaded(students) {
//     return {
//         type: ACTION_GET_STUDENTS,
//         payload: students
//     };
// }
//
// CREATORS
// export function getStudents() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionStudentsLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }
//
// export function getStudents() {
//     return {
//         type: ACTION_GET_STUDENTS,
//         payload: students
//     };
// }
//
// export function getStudentChemistryTestInfo() {
//     return {
//         type: ACTION_GET_STUDENT_CHEMISTRY_TESTS_INFO,
//         payload: chemistryTestScore
//     };
// }

