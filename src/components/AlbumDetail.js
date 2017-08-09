import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const {
        thumbnail_image,
        title,
        artist,
        image, 
        url
    } = album;

    const { 
        thumbnailStyle,
        thumbnailContainerStyle,
        headerContentStyle,
        headerTextStyle,
        imageStyle,
        textStyle,
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

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    <Text style={textStyle}>
                        Buy now
                    </Text>
                </Button>
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
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
};

export default AlbumDetail;
