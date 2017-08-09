import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle } = styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            {children}
        </TouchableOpacity>
    );
};

    const styles = {
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#007aff',
            borderRadius: 5,
            marginLeft: 5,
            marginRight: 5,
        },
    };

export default Button;
