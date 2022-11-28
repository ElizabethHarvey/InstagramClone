import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ShopScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hey</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShopScreen;