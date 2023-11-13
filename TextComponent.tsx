import { StyleSheet, Text, StyleProp, TextStyle } from "react-native"
import { heightPercentageToDP as hp} from "react-native-responsive-screen"
import colors from "../../constants/colors.context";

interface propType {
  children: any,
  type?: 'h1'|'h2'|'h3'|'plain-bold'|'plain-light'|'plain',
  style?: StyleProp<TextStyle>,
  color?: string,
  fontFamily?: "Kanit_200ExtraLight"|
    "Kanit_300Light"|
    "Kanit_400Regular"|
    "Kanit_600SemiBold"|
    "Kanit_700Bold"|
    "Kanit_800ExtraBold"|
    "Kanit_900Black"|
    "JosefinSans_100Thin"|
    "JosefinSans_200ExtraLight"|
    "JosefinSans_300Light"|
    "JosefinSans_400Regular"|
    "JosefinSans_500Medium"|
    "JosefinSans_600SemiBold"|
    "JosefinSans_700Bold"
  center?: boolean
}

const TextComponent = ({type, children, style, color, center, fontFamily}:propType) => {
  // const [darkMode] = useContext(DarkModeContext);
  const styles = StyleSheet.create({
    h1: {
      fontSize: hp('3.5%'),
      fontStyle: 'normal',
      fontFamily: fontFamily || 'Kanit_600SemiBold',
      fontWeight: '900',
      color: color || colors.black,
      textAlign: center?'center':'left',
      ...(style as object)
    },

    h2: {
      fontSize: hp('3%'),
      fontStyle: 'normal',
      fontWeight: "bold",
      fontFamily: fontFamily || 'Kanit_600SemiBold',
      color: color || colors.black,
      textAlign: center?'center':'left',
      ...(style as object)
    },

    h3: {
      fontSize: hp('2.5%'),
      fontStyle: 'normal',
      fontFamily: fontFamily || 'Kanit_400Regular',
      color: color || colors.black,
      textAlign: center?'center':'left',
      ...(style as object)
    },

    plainBold: {
      fontSize: hp('2%'),
      fontStyle: 'normal',
      fontFamily: fontFamily || 'Kanit_600SemiBold',
      color: color || colors.black,
      textAlign: center?'center':'left',
      ...(style as object)
    },
    
    plainLight: {
      fontSize: hp('2%'),
      fontStyle: 'normal',
      fontFamily: fontFamily || 'Kanit_200ExtraLight',
      color: color || colors.black,
      textAlign: center?'center':'left',
      ...(style as object)
    },

    plain: {
      fontSize: hp('2%'),
      fontStyle: 'normal',
      fontFamily: fontFamily || 'Kanit_400Regular',
      color: color || colors.black,
      textAlign: center?'center':'left',
      ...(style as object)
    }
  })

  switch (type) {
    case 'h1':
      return (
        <Text style={styles.h1}>
          {children}
        </Text>
      )
    case 'h2':
      return (
        <Text style={styles.h2}>
          {children}
        </Text>
      )
    case 'h3':
      return (
        <Text style={styles.h3}>
          {children}
        </Text>
      )
    case 'plain-bold':
      return (
        <Text style={styles.plainBold}>
          {children}
        </Text>
      )
    case 'plain-light':
      return (
        <Text style={styles.plainLight}>
          {children}
        </Text>
      )
    default: return (
      <Text style={styles.plain}>
        {children}
      </Text>
    )
  }
}
export default TextComponent