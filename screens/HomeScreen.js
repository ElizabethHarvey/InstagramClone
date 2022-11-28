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

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ left: 20, top: 10 }}>
        <Image
          source={require('../assets/instagramText.png')}
          style={styles.instagram}
        />
        <TouchableOpacity style={{ flexDirection: 'row',}}>
        <Ionicons style={{ left: 17,}} name='add-outline' size={15}/>
        <Ionicons name='square-outline' size={20}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instagram: {
    width: '35%',
    height: '27%',
    resizeMode: 'container',
  },
});

export default HomeScreen;
