import * as React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../assets/astheme/Colors';
import { appAuther, appName } from '../../assets/main/Main';

export const FooterComponent = () => {
    return(
        <View style={{
            position: "absolute", 
            width: "100%", 
            padding: 5, 
            overflow: "hidden", 
            justifyContent: "center", 
            alignContent: "center", 
            alignItems: "center",
            bottom: "1%"
        }}>
            <Text style={{ fontSize: 12}}>&copy; {appName}, By <Text style={{ color: Colors.primaryColor }}>{appAuther}</Text></Text>
        </View>
    )
}