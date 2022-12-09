import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import StoriesList from './StoriesList';

const FypRow = ({ image, name, lock }) => {
  return (
    <View>
      <TouchableOpacity style={styles.row}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.profile}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
          <Text style={styles.name}>{name}</Text>
        </View>
        {/* <Ionicons style={styles.lock} name={lock} size='16' color='#AD4EC9' /> */}
        <TouchableOpacity style={styles.post}>
          <Image style={{width: '95%', height: 500, resizeMode: 'container', }} source={{ uri: image }} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    top: '5%',
    marginBottom: '25%',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: '100%',
  },
  name: {
    fontSize: 15,
    bottom: '2%',
    left: '70%',
  },
  profile: {
    left: '3%',
    bottom: '20%',
    width: 43,
    height: 43,
    borderRadius: '100%',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C13584',
    flexDirection: 'row',
  },
  lock: {
    backgroundColor: '#E7E6E6',
  },
  post: {
    alignItems: 'center',
  }
});

export default FypRow;
