import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const StoriesRow = ({ image, name, lock }) => {
  return (
    <View>

      <TouchableOpacity style={styles.row}>
        <View style={styles.profile}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <Ionicons style={styles.lock} name={lock} size='16' color='#AD4EC9' />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    height: 80,
    marginBottom: 35,
    padding: '1%',
    left: '10%',
    top: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: '100%',
  },
  name: {
    top: '115%',
    fontSize: 15,
    position: 'absolute',
  },
  profile: {
    top: '20%',
    width: 70,
    height: 70,
    borderRadius: '100%',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C13584',
  },
  lock: {
    backgroundColor: '#E7E6E6',
  },
});

export default StoriesRow;
