import * as React from 'react';
import { Dimensions } from 'react-native';

export const Dims = {
    with: Dimensions.get("screen").width,
    heigth: Dimensions.get("screen").height,
    statusbarHeight: 25
}