import React, {Component} from 'react';

import NoteEditor from './NoteEditor';
import NotesList from "./NotesList";

class App extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    handleNoteAdd = (note) => {
        console.log('add', note);
        this.props.onCreateNote(note)
    };

    handleNoteDelete = () => {
        console.log('delete');
    };

    render() {
        console.log('this.props', this.props);
        const {notes} = this.props.notes;
        console.log('this.notes', notes);
        return (
            <div>
                <h2>Notes App</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                {
                    notes &&
                    <NotesList
                        notes={notes}
                        onNoteDelete={this.handleNoteDelete}
                    />
                }
            </div>
        );
    }
}

export default App;
