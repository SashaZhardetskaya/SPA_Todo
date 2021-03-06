import React, {Component} from 'react';

import Note from './Note';

class NotesList extends Component {

    render() {
        console.log('NotesList', this.props);
        return (
            <div>
                {
                    this.props.notes.map(
                        (note, index) =>
                        <Note
                            key={note.id || index}
                            title={note.title}
                            onDelete={() => this.props.onNoteDelete(note)}
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </div>
        );
    }
}

export default NotesList;
