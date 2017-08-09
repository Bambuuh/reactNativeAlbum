import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    const { album } = props;
    return (
        <View>
            <Text>{album.title}</Text>
            <Text>{album.artist}</Text>
            <Text>------------------</Text>
        </View>
    );
}

export default AlbumDetail;