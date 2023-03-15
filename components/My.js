import { useNavigation } from '@react-navigation/native'
import { Avatar, Button, Icon } from '@rneui/themed'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 24
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 30
  },
  entryItem: {
    alignItems: 'center',
    width: 80,
    fontSize: 20,
    marginBottom: 20
  }
})

const singIn = (navigation) => {
  navigation.navigate('Login')
}

export default function My() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Avatar rounded source={{ uri: 'https://picsum.photos/200/200' }} size={72}></Avatar>
        <Button onPress={() => singIn(navigation)} style={{ marginLeft: 20 }}>Login</Button>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: -10 }}>
        <View style={styles.entryItem}><Icon type='ionicon' name='logo-google' color='#517fa4' size={32}></Icon><Text>资讯</Text></View>
        <View style={styles.entryItem}><Icon type='ionicon' name='logo-google' color='#517fa4' size={32}></Icon><Text>专栏</Text></View>
        <View style={styles.entryItem}><Icon type='ionicon' name='logo-google' color='#517fa4' size={32}></Icon><Text>勋章</Text></View>
        <View style={styles.entryItem}><Icon type='ionicon' name='logo-google' color='#517fa4' size={32}></Icon><Text>客服</Text></View>
        <View style={styles.entryItem}><Icon type='ionicon' name='logo-google' color='#517fa4' size={32}></Icon><Text>客服</Text></View>
        <View style={styles.entryItem}><Icon type='ionicon' name='logo-google' color='#517fa4' size={32}></Icon><Text>客服</Text></View>
        <View style={styles.entryItem}><Icon type='ionicon' name='logo-google' color='#517fa4' size={32}></Icon><Text>客服</Text></View>
        <View style={styles.entryItem}><Icon type='ionicon' name='logo-google' color='#517fa4' size={32}></Icon><Text>客服</Text></View>
      </View>
    </View>
  )
}