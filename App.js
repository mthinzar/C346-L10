import React, {useState} from 'react';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Button, Image, Alert, TextInput} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Exercise3 from "./Exercise3";
//
// const datasource = [
//   {
//     title: "Yangon", icon: "city", bgColor: "#C9961A",
//     data: [
//       { key: "Shwedagon Pagoda",
//         city: "Yangon",
//         image: require('./images/shwedagon.jpg'),
//       },
//       { key: "Sule Pagoda",
//         city: "Yangon",
//         image: require('./images/sule.jpg')
//       }
//     ]
//   },
//   {
//     title: "Temple & Bridge", icon: "city", bgColor: "#C9961A",
//     data: [
//       { key: "Ananda Temple",
//         city: "Bagan",
//         image: require('./images/ananda.jpg')
//       },
//       { key: "U Bein Bridge",
//         city: "Mandalay",
//         image: require('./images/ubein.jpg')
//       }
//     ]
//   }
// ];
//
//
// export default function App() {
//
//   const [search, setSearch] = useState("");
//
//   return (
//       <View style={styles.container}>
//         <View style={styles.bannerContainer}>
//           <Text> မင်္ဂလာပါ - Hi </Text>
//           <Text style={styles.bannerTitle}> Myanmar Attractions </Text>
//           <Text style={styles.bannerSubtitle}> Discover the Golden Land </Text>
//         </View>
//
//         <TextInput
//             style={styles.searchInput}
//             placeholder="Search attractions..."
//             value={search}
//             onChangeText={setSearch}
//         />
//
//         <SectionList
//             sections={datasource}
//             renderItem={({item}) => (
//
//                 <TouchableOpacity
//                     style={styles.attractionCard}
//                     onPress={() => Alert.alert("Attraction Selected",
//                         `Name: ${item.key}\nCity: ${item.city}`)}>
//
//                   <Image source={item.image} style={styles.imageSize} />
//                   <Text style={styles.attractionName}>{item.key}</Text>
//                   <Text style={styles.subtitle}>
//                     <FontAwesome6 name="location-dot" size={14} color="#8D6E63" />
//                     City: {item.city}
//                   </Text>
//                 </TouchableOpacity>
//
//             )}
//
//             renderSectionHeader={({section}) => (
//                 <Text style={[styles.sectionHeader, {backgroundColor: section.bgColor}]}>
//                   <FontAwesome6 name={section.icon} size= {20} color="white" />
//                   {section.title}
//                 </Text>
//             )}
//         />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 40,
//   },
//   bannerTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     color: '#5D4037', // Dark brown
//   },
//   bannerSubtitle: {
//     fontSize: 14,
//     alignSelf: 'center',
//     color: '#8D6E63', // Muted brown
//   },
//   bannerContainer: {
//     width: '100%',
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   sectionHeader: {
//     backgroundColor: '#C9961A', //golden
//     padding: 12,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white'
//   },
//   attractionCard: {
//     backgroundColor: 'white',
//     padding: 15,
//     margin: 10,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: '#E8DCC8', //light grayish orange
//   },
//   attractionName: {
//     paddingTop: 15,
//     fontSize: 18,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     color: '#5D4037', //dark saturated red
//   },
//   imageSize: {
//     width: "100%",
//     height: 230,
//     borderRadius: 14,
//     resizeMode: 'contain'
//   },
//   subtitle: {
//     fontSize: 13,
//     alignSelf: 'center'
//   },
//   searchInput: {
//     backgroundColor: '#FFF8E7',
//     borderWidth: 1,
//     borderColor: '#E8DCC8',
//     borderRadius: 12,
//     padding: 12,
//     marginHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 14,
//   },
//
// });

export default Exercise3;
