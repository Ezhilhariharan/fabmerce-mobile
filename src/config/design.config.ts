import colors from "@config/colors.config"
import { ms, ws } from "@utilis/designs/measurements.design"
import { Platform, StatusBar } from "react-native"
import fontsConfig from "./fonts.config"

const dimensions: any = {
    STATUS_BAR: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
    // Opacity
    OPACITY_LOW: 0.25,
    OPACITY_MED: 0.5,
    OPACITY_AVG: 0.75,
    OPACITY_HIGH: 1,

     // Image
     IMAGE: {
        height: '100%',
        width: '100%',
    },

    CONTAINER: {
        flex: 1,
        backgroundColor: colors.P_BG
    },
    CENTER: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.P_BG,
    },
    CONTAINER_CENTER: {
        flex: 1,
        backgroundColor: colors.P_BG,
        alignItems: "center",
        justifyContent: "center"
    },
    TEXT_STYLE_09_R: {
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400',
        fontSize: ms(9),
        color: colors.RED,
    },
    TEXT_STYLE_14_B: {
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontSize: 16,
         color: 'black',
         fontWeight:'400'
    },
    TEXT_STYLE_11_B: {
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontSize: 12,
        fontWeight:'400',
        color:'black'
    },
    TEXT_STYLE_10_B_G: {
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400',
        fontSize: 14,
        marginLeft:ws(7),
        color: '#0E8635'
    },
    TEXT_STYLE_10_B_S: {
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'500',
        fontSize: 14,
        marginHorizontal:ws(5),
        color: '#072255',
    },
    TEXT_STYLE_009_R: {
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400',
        fontSize: ms(14),
        color: colors.RED,
    },

}

export default dimensions