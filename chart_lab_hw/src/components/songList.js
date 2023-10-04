import React from 'react';
import ListItem from './ListItem';

const SongList = ({songs, onSongClick}) => {

    const songItems = songs.map((song, index) => {
    return <ListItem 
        song={song} 
        key={index} 
        onSongClick={onSongClick}
        />
    })

return (
    <div>
    <ul>
    {songItems}
    </ul>
</div>
)
}

export default SongList;