import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Button, Image, Alert} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// Card image URL pattern from the Pokemon TCG 151 gallery
const getCardImage = (cardNumber) => {
  return 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + cardNumber + '-2x.png';
};

const datasource = [
  {
    data: [
      {key: 'Charmander', card: 4},
      {key: 'Charmeleon', card: 5},
      {key: 'Charizard ex', card: 6},
    ],
    title: 'Fire', icon: 'fire', bgColor: 'orange', textColor: 'white',
  },
  {
    data: [
      {key: 'Squirtle', card: 7},
      {key: 'Wartortle', card: 8},
      {key: 'Blastoise ex', card: 9},
    ],
    title: 'Water', icon: 'droplet', bgColor: 'blue', textColor: 'white',
  },
  {
    data: [
      {key: 'Pikachu', card: 25},
      {key: 'Raichu', card: 26},
    ],
    title: 'Electric', icon: 'bolt', bgColor: 'yellow', textColor: 'black',
  },
  {
    data: [
      {key: 'Bulbasaur', card: 1},
      {key: 'Ivysaur', card: 2},
    ],
    title: 'Grass', icon: 'leaf', bgColor: 'green', textColor: 'white',
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity
          style={[styles.opacityStyle]}
          onPress={() => Alert.alert(item.key + ' is selected')}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image source={{uri: getCardImage(item.card)}} style={styles.imageStyle}/>
      </TouchableOpacity>
  );
};

const renderSectionHeader = ({section: {title, icon, bgColor, textColor}}) => {
  return (
      <View style={[styles.headerStyle, {backgroundColor: bgColor}]}>
        <FontAwesome6 name={icon} size={20} color={textColor}/>
        <Text style={[styles.headerText, {color: textColor}]}>{title}</Text>
      </View>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.buttonStyle}>
          <Button title="Add Pokemon"
                  onPress={() => Alert.alert(`Coming soon...`)}/>
        </View>
        <SectionList contentContainerStyle={{padding: 10}}
                     sections={datasource}
                     renderItem={renderItem}
                     renderSectionHeader={renderSectionHeader}/>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40,
    marginBottom: 20,
  },
  buttonStyle: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  opacityStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  imageStyle: {
    width: 150,
    height: 210,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 8,
    marginTop: 10,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

