import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const StoriesRow = ({ image, name, user }) => {
  return (
    <View>
      <TouchableOpacity style={styles.row}>
        <View style={styles.profile}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: '100%',
            left: '30%',
            bottom: '15%',
          }}
        >
          <Ionicons style={styles.lock} name={user} size='29' color='#4992d3' />
        </View>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    height: 80,
    marginBottom: 30,
    padding: '1%',
    left: '10%',
    bottom: '5%',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: '100%',
  },
  name: {
    top: '120%',
    fontSize: 15,
    position: 'absolute',
  },
  profile: {
    top: '20%',
    width: 75,
    height: 75,
    borderRadius: '100%',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C23584',
  },
  lock: {
    left: '1%',
  },
});

export default StoriesRow;
