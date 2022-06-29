import { StyleSheet } from "react-native";
import { Colors } from './Colors';
import { Dims } from './Dimensions';

export const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.whiteColor, 
        width: Dims.with, 
        height: Dims.heigth - ( Dims.statusbarHeight + 5 ), 
        paddingTop: Dims.statusbarHeight,
        padding: 2
    }
})