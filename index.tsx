import { Lato_100Thin, Lato_300Light, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato"
import {
  NunitoSans_200ExtraLight,
  NunitoSans_300Light,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  NunitoSans_900Black,
} from '@expo-google-fonts/nunito-sans';

import {
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';

import { useFonts } from "expo-font"
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, Platform, View, KeyboardTypeOptions, StyleProp, TextStyle, ViewStyle } from "react-native"
import { heightPercentageToDP as hp} from "react-native-responsive-screen"
import * as SplashScreen from 'expo-splash-screen';
import colors from "../contexts/colors.context";
import { useContext, useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";
import RNDateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import CustButton from "./Buttons.component";
import PhoneInput from "react-native-phone-number-input";
import { Ionicons } from '@expo/vector-icons';
import { DarkModeContext } from "../contexts/darkMode.context";

interface propType {
  children: any,
  type: 'h1'|'h2'|'h3'|'plain-bold'|'plain-light'|'plain',
  style?: StyleProp<TextStyle>,
  color?: string
}

SplashScreen.preventAutoHideAsync();

const TextComponent = ({type, children, style, color}:propType) => {
  // const [darkMode] = useContext(DarkModeContext);
  
  const [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black,
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  })
  
  const styles = StyleSheet.create({
    h1: {
      fontSize: hp('3.3%'),
      fontStyle: 'normal',
      fontFamily: 'NunitoSans_900Black',
      fontWeight: '900',
      color: color || colors.black,
      ...(style as object)
    },

    h2: {
      fontSize: hp('3%'),
      fontStyle: 'normal',
      // fontWeight: "300",
      fontWeight: "bold",
      fontFamily: 'NunitoSans_700Bold',
      color: color || colors.black,
      ...(style as object)
    },

    h3: {
      fontSize: hp('2.5%'),
      fontStyle: 'normal',
      fontWeight: "500",
      fontFamily: 'Nunito_600SemiBold',
      color: color || colors.black,
      ...(style as object)
    },

    plainBold: {
      fontSize: hp('2%'),
      fontStyle: 'normal',
      fontFamily: 'NunitoSans_700Bold',
      color: color || colors.black,
      ...(style as object)
    },
    
    plainLight: {
      fontSize: hp('2%'),
      fontStyle: 'normal',
      fontFamily: 'Nunito_200ExtraLight',
      color: color || colors.black,
      ...(style as object)
    },

    plain: {
      fontSize: hp('2%'),
      fontStyle: 'normal',
      fontFamily: 'Nunito_300Light',
      color: color || colors.black,
      ...(style as object)
    }
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
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
      case 'plain':
        return (
          <Text style={styles.plain}>
            {children}
          </Text>
        )
      case 'plain-light':
        return (
          <Text style={styles.plainLight}>
            {children}
          </Text>
        )
      default: return <></>
    }
  } else {
    return <></>
  }
}
export default TextComponent

interface inputPropType {
  type: 'text',
  children?: React.ReactNode,
  extraStyles?: {wrapper?:StyleProp<ViewStyle>, textInput?:StyleProp<TextStyle>},
  placeholder?: string,
  maxLength?:number,
  editable?:boolean,
  defaultValue?: string,
  hidden?: boolean,
  multiLine?: boolean,
  keyboardType?:KeyboardTypeOptions
  onChange: (text:string)=>void
  onFocus?: ()=> void
}

export const InputComponent = ({type, children, editable, extraStyles, placeholder, defaultValue, maxLength, hidden, onChange, onFocus, multiLine, keyboardType}:inputPropType) => {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Lato_100Thin
  })

  // const [darkMode] = useContext(DarkModeContext);

  const styles = StyleSheet.create({
    inputWrapper: {
      width: '100%',
      hegiht: '50%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 10,
      borderColor: colors.grey2,
      borderWidth: 1.6,
      paddingHorizontal: '3%',
      ...(extraStyles?.wrapper as object)
    },

    textInput: {
      // flex: 0.9,
      width: '100%',
      color: colors.black,
      paddingVertical: '3.7%',
      fontSize: hp('2%'),
      fontFamily: 'Lato_300Light',
      ...(extraStyles?.textInput as object)
    },
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
    switch (type) {
      case 'text':
        return (
          <View style={styles.inputWrapper}>
            {children}
            <TextInput
              multiline={multiLine}
              maxLength={maxLength}
              onFocus={onFocus}
              keyboardType={keyboardType}
              defaultValue={defaultValue} 
              onChange={(e)=> onChange(e.nativeEvent.text)}
              style={styles.textInput} 
              placeholder={placeholder}
              placeholderTextColor={colors.grey4}
              editable={editable}
              secureTextEntry={hidden}
            />
          </View>
        )
      default: return <></>
    }
  } else {
    return <></>
  }
}

interface DropdownInputProps {
  array: any[],
  onInput: ()=> void,
  selectedValue: string
}

export const DropdownInput = ({array, onInput, selectedValue}:DropdownInputProps) => {
  const styles = StyleSheet.create({
    inputWrapper: {
      width: '100%',
      hegiht: '40%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: '2%',
      borderColor: colors.grey5,
      borderWidth: 1.2,
      borderRadius: 15,
      backgroundColor: colors.white,
  },

    textInput: {
      flex: 0.9,
      width: '90%',
      color: colors.grey4,
      paddingVertical: '3.7%',
      fontSize: hp('2%'),
      fontFamily: 'Lato_300Light'
    },
  })

  return (
    <View style={styles.inputWrapper}>
      <Picker
          style={{width: '100%'}}
          mode="dropdown"
          enabled={true}
          placeholder={'Select Genotype'}
          selectedValue={selectedValue}
          onValueChange={onInput}
      >
          {array.map((item, index) => (
              <Picker.Item
                  color={colors.grey4}
                  label={item}
                  value={item}
                  key={index}
              />
          ))}
      </Picker>
    </View>
  )
}

interface DropdownInputPropsIos {
  array: any[],
  onInput: ()=> void,
  selectedValue: string,
  closeFunc: ()=> void
}

export const DropdownInputIos = ({array, onInput, selectedValue, closeFunc}:DropdownInputPropsIos) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: hp('100%'),
      position: 'absolute',
    },
    
    inputWrapper: {
      top: hp('65%'),
      width: '100%',
      // alignSelf: 'center',
      zIndex: 20,
      height: hp('35%'),
      borderWidth: 1.2,
      borderRadius: 35,
      borderColor: colors.grey5,
      backgroundColor: colors.white,
      // marginVertical: '2%',
    },


  })

  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor={'transparent'} style={{width: '100%', height: '100%', position: 'absolute'}} onPressOut={closeFunc}>
        <></>
      </TouchableHighlight>
      <View style={styles.inputWrapper}>
        <Picker
            style={{width: '100%'}}
            mode="dropdown"
            enabled={true}
            placeholder={'Select Genotype'}
            selectedValue={selectedValue}
            onValueChange={onInput}
        >
            {array.map((item, index) => (
                <Picker.Item
                    color={colors.grey4}
                    label={item}
                    value={item}
                    key={index}
                />
            ))}
        </Picker>
      </View>
    </View>
  )
}

export const DateComponent = ({onChange, placeholder, extraStyles}:{onChange: (value:Date|undefined)=>void, placeholder:string, extraStyles?:any}) => {
  const [dateVal, setdateVal] = useState<Date>()
  const [showDateSelector, setshowDateSelector] = useState(false)
  const toggleDatePicker = () => {
    Platform.OS === 'ios'? setshowDateSelector(!showDateSelector)
    : !showDateSelector? DateTimePickerAndroid.open(({mode: 'date', value: new Date(), onChange: (e:any, value:any)=> {
      if (e.type === 'set') {
        onChange(value)
        setdateVal(value)
      }
    }}) as any)
      : DateTimePickerAndroid.dismiss('date')  
  };

  const styles = StyleSheet.create({
    inputWrapper: {
      width: '100%',
      hegiht: '40%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: '2%',
      // borderColor: activeColor,
      borderWidth: 1.2,
      borderRadius: 15,
    },
  })

  return (
    <>
      <CustButton style={styles.inputWrapper} color={colors.white} onPress={toggleDatePicker} type="rounded-rect">
        <TextComponent style={extraStyles} type="h3">
            {dateVal?.toDateString() || placeholder}
        </TextComponent>
      </CustButton>

      {
        showDateSelector &&
          <RNDateTimePicker
            mode='date'
            style={{alignSelf: 'center', width: '100%'}}
            value = {dateVal || new Date()}
            onChange = {(e, value)=>{
                if (e.type === 'set') {
                  onChange(value)
                  setdateVal(value)
                }
            }}
          />
        }
    </>
  )
}

interface CustPhoneInputProps {
  style?: StyleProp<ViewStyle>
  onChange: (value: string) => void
}

export const CustPhoneInput = ({style, onChange}:CustPhoneInputProps) => {
  const phoneNumInput = useRef<PhoneInput>()

  const styles = StyleSheet.create({
    phoneNumberView: {
      width: '100%',
      paddingVertical: '3.7%',
      borderRadius: 10,
      borderColor: colors.grey2,
      borderWidth: 1.6,
      backgroundColor: colors.white,
      fontSize: hp('3%'),
      ...(style as object)
    },
  })

  return (
    <PhoneInput
      defaultCode="US"
      layout="first"
      placeholder=' '
      ref={phoneNumInput as React.MutableRefObject<PhoneInput>}
      containerStyle={styles.phoneNumberView}
      textContainerStyle={{ paddingVertical: 0, backgroundColor: colors.white}}
      textInputStyle={{color: colors.grey7}}
      codeTextStyle={{color: colors.grey7}}
      // countryPickerButtonStyle={{display: phone?'none': 'flex'}}
      onChangeFormattedText={onChange}
    />
  )
}

export const HiddenInput = ({type, children, editable, extraStyles, placeholder, defaultValue, maxLength, onChange, onFocus, multiLine, keyboardType}:inputPropType) => {
  const [hidden, sethidden] = useState<boolean>(true)
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Lato_100Thin
  })

  // const [darkMode] = useContext(DarkModeContext);

  const styles = StyleSheet.create({
    inputWrapper: {
      width: '100%',
      hegiht: '50%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderColor: colors.grey2,
      borderWidth: 1.6,
      borderRadius: 10,
      paddingHorizontal: '7%',
      ...(extraStyles?.wrapper as object)
    },

    textInput: {
      // flex: 0.9,
      width: '100%',
      color: colors.black,
      paddingVertical: '3.7%',
      fontSize: hp('2%'),
      fontFamily: 'Lato_300Light',
      ...(extraStyles?.textInput as object)
    },
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
    switch (type) {
      case 'text':
        return (
          <View style={styles.inputWrapper}>
            {children}
            <TextInput
              multiline={multiLine}
              maxLength={maxLength}
              onFocus={onFocus}
              keyboardType={keyboardType}
              defaultValue={defaultValue} 
              onChange={(e)=> onChange(e.nativeEvent.text)}
              style={styles.textInput} 
              placeholder={placeholder}
              placeholderTextColor={colors.grey3}
              editable={editable}
              secureTextEntry={hidden}
            />
            <TouchableOpacity onPress={()=> sethidden(!hidden)}>
              {hidden?
                <Ionicons name="eye" size={hp('3%')} style={{marginRight: '0%'}} color="black" />
              : <Ionicons name="eye-off" size={hp('3%')} style={{marginRight: '0%'}} color="black" />
              }
            </TouchableOpacity>
          </View>
        )
      default: return <></>
    }
  } else {
    return <></>
  }
}

export const CustSearchBar = ({placeholder}: {placeholder?: string}) => {
  const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: colors.grey2, 
      width: '90%',
      borderWidth: 2,
      borderColor: colors.grey3,
      justifyContent: 'space-between', 
      paddingHorizontal: '5%', 
      borderRadius: 10,
      marginTop: '2.5%', 
      paddingVertical: '2.5%'
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center'
    },
  })

  return (
    <View style={{backgroundColor: colors.grey, zIndex: 3, paddingBottom: '5%', width: '100%'}}>
      <View style={[styles.row, styles.searchBar]}>
        <Ionicons name="md-search-sharp" size={hp('3%')} color={colors.black} />
        <InputComponent extraStyles={{wrapper: {flex: 0.98, borderWidth: undefined, backgroundColor: colors.grey2}}} onChange={()=> null} type="text" placeholder={placeholder || "Search Profession"}/>
      </View>
    </View>
  )
}