import React, {Component} from 'react';
import ColorPicker from './ColorPicker';


class NoteEditor extends Component {

    state = {
        title: '',
        text: '',
        color: '#FFFFFF'
    };


    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    };

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleColorChange = (color) => {
        this.setState({ color });
    };

    handleNoteAdd = () => {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);

        this.setState({ text: '', title: '', color: '#FFFFFF' });
    };

    render() {
        return (
            <div className='NoteEditor'>
                <input
                    type='text'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder='Enter note text'
                    rows={5}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className='NoteEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default NoteEditor;
