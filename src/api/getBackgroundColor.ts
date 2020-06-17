import * as React from 'react';

export const getBackgroundColor = (str: String, s: Number, l: Number) => {
    var hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let h = hash % 360;
    return 'hsl('+h+', '+s+'%, '+l+'%)';
}