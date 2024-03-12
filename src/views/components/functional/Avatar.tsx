import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native';
import colors from '@config/colors.config';
import React, { useEffect, useState } from 'react';
import fontsConfig from '@config/fonts.config';

interface IAvatar {
    variant?: string;
    source: any;
    width?: any;
    height?: any;
    alt?: any;
    onPress?: (props: any) => void;
    size?: any;
}

const Avatar = ({ onPress, variant, source, width, height, alt, size }: IAvatar) => {
    const rounded: number = 50
    const square: number = 5

    const [username, setUsername] = useState("")
    const [avatarSize, setAvatarSize] = useState("small")

    useEffect(() => {
        setAvatarSize(size)
        avatarName()

    }, [source, size, alt])

    const avatarName = () => {
        const userName: string = alt
        let intials = userName?.split(' ')?.map(data => data[0]).join('').toUpperCase();
        setUsername(intials)
    }
    return (
        <TouchableOpacity onPress={() => onPress}>
            {
                source ?
                    <Image
                        source={source}
                        style={[{
                            borderRadius: variant == "rounded" ? 50 : square,
                        }, avatarSize == "small" ? styles.small :
                            avatarSize == "medium" ? styles.medium :
                                avatarSize == "large" ? styles.large : {
                                    width: width,
                                    height: height,
                                }]}
                    />
                    :
                    <View style={[{
                        borderRadius: variant == "rounded" ? rounded : square,
                        backgroundColor: colors.S_BG,
                    }, avatarSize == "small" ? styles.small :
                        avatarSize == "medium" ? styles.medium :
                            avatarSize == "large" ? styles.large : {
                                width: width,
                                height: height,
                            }]}>
                        <Text style={styles.avatar}>{username}</Text>
                    </View>
            }
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    avatar: {
        fontFamily: fontsConfig.POPPINS_SEMIBOLD,
        fontSize: 20,
        color: "white",
        textAlign: "center",
        marginTop: 0,
        fontWeight: "600",
        flexDirection: "column",
        textAlignVertical: "center",
        width: "100%",
        height: "100%",
    },
    small: {
        width: 42,
        height: 42,
    },
    medium: {
        width: 55,
        height: 55,
    },
    large: {
        width: 65,
        height: 65,
    }
})

export default Avatar