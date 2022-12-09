import React from 'react';
import { View, FlatList } from 'react-native';
import StoriesRow from './StoriesRow';

const StoriesList = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      name: 'Your Story',
      image: 'https://picsum.photos/200/300',
      user: 'add-circle',
    },
    {
      id: 2,
      name: 'Alexandra Shae',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Ludo Pavel',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      name: 'Rickie',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'Nichole Jannette',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      name: 'Rae Neil',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 7,
      name: 'Sherley Hayley',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      name: 'Everette Addy',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 9,
      name: 'Branden Lorrin',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 10,
      name: 'Elodie ',
      image: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        vertical={true}
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StoriesRow image={item.image} name={item.name} user={item.user} />
        )}
      />
    </View>
  );
};

export default StoriesList;
