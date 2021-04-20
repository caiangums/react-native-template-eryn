import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

function Text({ style, heading, bold, center, children }) {
  const combinedStyles = [
    heading && styles.heading,
    bold && styles.bold,
    center && styles.center,
    style,
  ];

  return <RNText style={combinedStyles}>{children}</RNText>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    lineHeight: 40,
  },

  bold: {
    fontWeight: 'bold',
  },

  center: {
    textAlign: 'center',
  },
});

export default Text;
