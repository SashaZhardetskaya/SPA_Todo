import React, {Component} from 'react';

import NoteEditor from './NoteEditor';
import NotesList from "./NotesList";

class App extends Component {

    componentDidMount() {
        this.props.onLoad();
    }



    handleNoteAdd = () => {
        console.log('add');
    };

    handleNoteDelete = () => {
        console.log('delete');
    };

    render() {
        return (
            <div>
                WWWWOOOOORRRKKKSSSS!!!
                <h2>Notes App</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                {/*<NotesList*/}
                    {/*notes={this.state.notes}*/}
                    {/*onNoteDelete={this.handleNoteDelete}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;
