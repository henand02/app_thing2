import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width: '21.2%', height: '70%', backgroundColor: 'white'}}>

        <Text><br /></Text>

        <View style={{width: '100%', height: '20%', backgroundColor: 'white', flexDirection:'row'}}>
          <Image style={{width: 50, height: 50, resizeMode: 'contain'}} source={require('./assets/house.png')} />
          <Text>
          <br />
          SmartHome
          </Text>
        </View>

        <Text>Rooms</Text>
        <View style={{width: '20%', height: '20%', backgroundColor: 'white', flexDirection: 'row'}}>
          <Text style={styles.boxOne}><Image style={{width: 40, height: 40, resizeMode: 'contain'}} source={require('./assets/living-room.png')} />Room</Text>
          <Text style={styles.boxOneOne}></Text>
          <Text style={styles.boxTwo}><Image style={{width: 40, height: 40, resizeMode: 'contain'}} source={require('./assets/bed.png')} />Bedroom</Text>
          <Text style={styles.boxTwoTwo}></Text>
          <Text style={styles.boxThree}><Image style={{width: 40, height: 40, resizeMode: 'contain'}} source={require('./assets/kitchen.png')} />Kitchen</Text>
        </View>

        <View style={{width: '100%', height: '10%', backgroundColor: 'white'}}>
          <Text>
          <br />
          Devices
          </Text>
        </View>


        <View style={{width: '100%', height: '10%', backgroundColor: 'skyblue'}}>
          <Text>
          <br />
          Living Room Lamp
          </Text>
        </View>

        <View style={{width: '100%', height: 5, backgroundColor: 'white'}}>
        </View>

        <View style={{width: '100%', height: '10%', backgroundColor: 'green'}}>
          <Text>
          <br />
          Heater
          </Text>
        </View>

        <View style={{width: '100%', height: 5, backgroundColor: 'white'}}>
        </View>

        <View style={{width: '100%', height: '10%', backgroundColor: 'green'}}>
          <Text>
          <br />
          TV
          </Text>
        </View>

        <Text>
        <br />
        Total Devices On: 2
        </Text>

      </View>  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxOne: {
    backgroundColor: 'skyblue',
    padding: 25,
  },
  boxOneOne: {
    backgroundColor: 'white',
    padding: 2,
  },
  boxTwo: {
    backgroundColor: 'skyblue',
    padding: 25,
  },
  boxTwoTwo: {
    backgroundColor: 'white',
    padding: 2,
  },
  boxThree: {
    backgroundColor: 'skyblue',
    padding: 25,
  },
});