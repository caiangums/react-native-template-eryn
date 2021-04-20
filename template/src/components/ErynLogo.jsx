import React from 'react';
import { Image, StyleSheet } from 'react-native';

import erynImage from '_assets/eryn.jpg';

function ErynLogo({ style }) {
  return <Image style={[styles.image, style]} source={erynImage} />;
}

const styles = StyleSheet.create({
  image: {
    maxWidth: '100%',
    maxHeight: '40%',
  },
});

export default ErynLogo;
