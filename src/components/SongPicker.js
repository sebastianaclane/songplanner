import React from "react";

class SongPicker extends React.Component {
    songInput = React.createRef();

    goToSongPlan = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from the input and call it the songName
        const songId = this.songInput.current.value;
        console.log(songId);
        // Find a way to disable spaces inside a text input and maybe replace the removeSpaces function if it doesn't really work to be inside the helpers.js file
        // Maybe https://stackoverflow.com/questions/14236873/disable-spaces-in-input-and-allow-back-arrow 
        // or https://www.sitepoint.com/community/t/disabling-spaces-spacebar-in-a-form-textfield/5601/6
        // 3. Change the page to song/songId
        this.props.history.push(`/song/${songId}`);
    };
    
    render() {
        return (
            <form className="song-picker" onSubmit={this.goToSongPlan}>
                <input type="text" required placeholder="Song Name" ref={this.songInput} />
                <button type="submit">View Song Plan</button>
            </form>
        );
    }
}

export default SongPicker;