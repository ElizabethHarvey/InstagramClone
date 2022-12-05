import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import StoriesList from '../components/StoriesList';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ top: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Image
            source={require('../assets/instagramText.png')}
            style={styles.instagram}
          />
          <TouchableOpacity style={styles.postIcon}>
            <Ionicons
              style={{ borderWidth: 2, borderRadius: '10%' }}
              name='add'
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.heart}>
            <Ionicons name='heart-outline' size={30} />
          </TouchableOpacity>
          <TouchableOpacity  style={styles.chat}>
            <Ionicons name='chatbox-outline' size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <StoriesList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instagram: {
    width: 120,
    height: 35,
    resizeMode: 'container',
    left: 10,
  },
  postIcon: {
    left: '290%',
  },
  heart: {
    left: '140%'
  },
  chat: {
    right: 10,
  },
});

export default HomeScreen;
