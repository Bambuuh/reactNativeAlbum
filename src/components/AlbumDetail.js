import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist } = album;
    const { 
        thumbnailStyle,
        thumbnailContainerStyle,
        headerContentStyle,
        headerTextStyle,
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    thumbnailStyle: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    imageStyles: {
        alignSelf: 'stretch',
    }
};

export default AlbumDetail;
