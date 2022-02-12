import React, { useEffect, useMemo, useState } from 'react';
import { Text } from 'react-native';
import colors from '../../styles/colors';

interface Props {
    as?: string,
    bold?: boolean,
    children: React.ReactNode,
    color?: string
    italic?: boolean
}

const AppText: React.FC<Props> = ({ as, bold, children, color, italic }) => {
    const [fontSize, setFontSize] = useState(15);

    useEffect(() => {
        switch (as) {
            case 'h5':
                setFontSize(12);
                break;
            case 'h4':
                setFontSize(15);
                break;
            case 'h3':
                setFontSize(18);
                break;
            case 'h2':
                setFontSize(25);
                break;
            case 'h1':
                setFontSize(30);
                break;
            case 'title':
                setFontSize(50);
                break;
        }
    }, [as]);

    const fontWeight = useMemo(() => (bold ? 'bold' : 'normal'), [bold]);
    const fontStyle = useMemo(() => (italic ? 'italic' : 'normal'), [italic]);
    const textColor = useMemo(() => color ? color : colors.dark, [color])

    return (
        <Text
            style={{
                color: textColor,
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontStyle: fontStyle,
                paddingVertical: 1,
            }}
        >
            {children}
        </Text>
    );
}

export default AppText;