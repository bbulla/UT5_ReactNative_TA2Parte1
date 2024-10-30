import React from 'react';
import { 
  FlatList, 
  Image, 
  Text, 
  View, 
  StyleSheet, 
  Dimensions 
} from 'react-native';

const imageData = [
  {
    id: '1',
    uri: require('../../assets/images/images.png'),
    description: 'Bart'
  },
  {
    id: '2',
    uri: require('../../assets/images/png-clipart-mario-mario.png'),
    description: 'Mario'
  },
  {
    id: '3',
    uri: require('../../assets/images/png-clipart-minions-minions.png'),
    description: 'Minions'
  }
];

export default function Gallery() {
  const { width } = Dimensions.get('window'); 

  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: item.uri }} 
              style={[styles.image, { width: width * 0.9 }]} 
            />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    height: 300,
    borderRadius: 15,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
