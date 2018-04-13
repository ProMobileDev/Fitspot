import React, {Component} from 'react'
import {View, Image, Text, StatusBar, TouchableHighlight,ListView} from 'react-native'

import {DEFAULT_BACKGROUND_COLOR, DEFAULT_GREEN_COLOR, DEFAULT_GREY_COLOR} from '@theme/colors'
import {FONT_DAYTONA_LIGHT, FONT_DAYTONA_BOLD, FONT_DAYTONA_SEMIBOLD, FONT_DAYTONA_REG} from '@theme/fonts'
import {Actions, ActionConst} from 'react-native-router-flux'
import styles from './styles'

type Props = {
  sessionId: String,
  messages: Array,
  userId: Integer,
}

class TrainerSupport extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount(){
    console.log('mounted')
  }

  componentWillUnmount(){
    console.log('unmounted')
  }

  callToSupport(){
    Actions.trainingInformation();
  }

  messageToSupport(){

  }

  render() {
    return (
      <View style={{flex:1,marginBottom: 50,marginTop:65,backgroundColor:'white'}}>
        <View style={{marginTop: 100, marginBottom: 50}}>
          <Image source={require('@images/phone-icon.png')} style={{alignSelf:'center'}}/>
        </View>
        <View style={{ flex:1,marginTop:10, marginLeft:32, marginBottom: 150, marginRight:32}}>
          <TouchableHighlight onPress={this.callToSupport} underlayColor='rgba(0,0,0,0)' style={[styles.rowBottomColumn, {height: 50,backgroundColor:DEFAULT_GREEN_COLOR}]}>
            <View style={{alignSelf:'center',flexDirection:'row'}}>
              <Text style={{fontWeight:'700', fontSize:15,fontFamily:FONT_DAYTONA_BOLD,color:'white'}}> Call Support</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.messageToSupport} underlayColor='rgba(0,0,0,0)' style={[styles.rowBottomColumn, {height: 50, marginTop: 40,backgroundColor:DEFAULT_GREEN_COLOR}]}>
            <View style={{alignSelf:'center',flexDirection:'row'}}>
              <Text style={{fontWeight:'700', fontSize:15,fontFamily:FONT_DAYTONA_BOLD,color:'white'}}> Message Support</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
export default TrainerSupport
