import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SCREEN_WIDTH } from '_constants/screen';

function Loader() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <ActivityIndicator size="large" />
      </View>
    </SafeAreaView>
  );
}

const CONTENT_SIZE = SCREEN_WIDTH * 0.9;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    width: CONTENT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
