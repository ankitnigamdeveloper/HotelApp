import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from "../src/language/en.json"
import ja from "../src/language/ja.json"
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: en,
  ja: ja,
  fr: { welcome: 'fffffffffffff', name: 'rrrrrrrrrrr', signup:'sssssssssssss'},
};
// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.locale = "ja";
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default App => {
  return (
    <View styles={{  flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        }}>
      <Text style={{fontSize:30,marginTop:50,textAlign:"center",color:"red"}}>
        {i18n.t('welcome')} {i18n.t('name')}
      </Text>
      <Text style={{textAlign:"center",color:"green",fontSize:30}}>{i18n.t('signup')}</Text>
    </View>
  );
};
 StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
}); 
  