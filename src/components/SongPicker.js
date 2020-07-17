import React from "react";
import Header from "./Header";

class SongPicker extends React.Component {
    songInput = React.createRef();

    removeSpaces = (event) => {
        if (event.currentTarget.value.includes(" ")) {
            // replace all spaces with empty characters
            event.currentTarget.value = event.currentTarget.value.replace(/\s/g, "");
        }
    }

    // Get text from Song Name (songId) input and go to /song/songId page
    goToSongPlan = (event) => {
        event.preventDefault();
        const songId = this.songInput.current.value;
        this.props.history.push(`/song/${songId}`);
    };
    
    render() {
        return (
            <React.Fragment>
                <Header title="Song Planner" />
                <form className="song-picker" onSubmit={this.goToSongPlan}>
                    <h3>Please Enter A Song Name</h3>
                    <input type="text" required placeholder="Song Name" ref={this.songInput} onChange={this.removeSpaces} />
                    <button type="submit" className="btn-secondary">View Song Plan</button>
                </form>
            </React.Fragment>
        );
    }
}

export default SongPicker;