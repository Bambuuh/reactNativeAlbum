import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] };
    style = {
        paddingBottom: 10,
    };

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(response => this.setState({ albums: response }));
    }

    renderAlbums() {
        return this.state.albums.map(album => (
            <AlbumDetail key={album.title} album={album} />
        ));
    }

    render() {
        return (
            <ScrollView contentContainerStyle={this.style}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
