import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'


export default function Page() {
    const router = useRouter();
    const params = useLocalSearchParams(); 
  return (
    <View>
        <Stack.Screen options = {{title: params.name}}/>
        <Text
            onPress={()=> {router.setParams({name: "update"})}}
        >Update</Text>
    </View>
  )
}
