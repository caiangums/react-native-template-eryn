import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import { Text, ErynLogo } from '_components';

function StartScreen({ name }) {
  return (
    <SafeAreaView>
      <ErynLogo style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.projectLabel} bold>
          🌲Eryn
        </Text>

        <Text heading bold>
          Welcome {name}!
        </Text>

        <Text center>This is a template</Text>

        <Text center>Feel free to use, change or improve</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 60,
  },

  content: {
    flex: 1,
    alignItems: 'center',
  },

  projectLabel: {
    fontSize: 30,
    lineHeight: 48,
  },
});

const mapStateToProps = (state) => ({
  name: state.user.name,
});

export default connect(mapStateToProps, null)(StartScreen);
