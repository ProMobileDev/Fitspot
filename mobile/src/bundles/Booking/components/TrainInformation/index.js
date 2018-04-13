
/*
*/

import React from 'react'
import {Animated,View,Image,Text,StatusBar,ScrollView,TouchableHighlight,ListView,Dimensions,Modal,TextInput,Picker,Easing,KeyboardAvoidingView} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Logo from '@components/Logo'
import Button from '@components/Button'
import moment from 'moment'
import PopupModal from '@components/PopupModal'
import HomeHelpModalPopup from '@components/PopupHelpModal/modalPopup'
import styles from './styles'
import ButtonHelp from '@components/ButtonHelp'
import BookingSubscriptionOptionsContainer from '@Booking/containers/BookingSubscriptionOptionsContainer'
import NotLoggedInView from '@components/NotLoggedInView'
import { NativeModules } from 'react-native';
import AwesomeButton from '@components/AwesomeButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ApiUtils from '@utils/ApiUtils'
import {DEFAULT_BACKGROUND_COLOR, DEFAULT_GREEN_COLOR} from '@theme/colors'
import {FONT_DAYTONA_LIGHT, FONT_DAYTONA_BOLD, FONT_DAYTONA_SEMIBOLD, FONT_DAYTONA_REG} from '@theme/fonts'
import Switch from './Switch'

class TrainInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCertification: true,
    }
  }

  goToDetails(){

  }

  chat(){

  }

  renderTurnsOn(){
    return(
      <View style ={styles.clientContainer}>
        <View style={{flexDirection:'row', marginTop:0 }}>
          <View style={{height:2, width:55, marginLeft: 5, backgroundColor:DEFAULT_GREEN_COLOR}}></View>
          <View style={{height:2, width:55, marginLeft: 5, backgroundColor:DEFAULT_GREEN_COLOR}}></View>
          <View style={{height:2, width:55, marginLeft: 5, backgroundColor:DEFAULT_GREEN_COLOR}}></View>
        </View>
        
        <Text style={styles.subHeaderText}><Text style={styles.bold}>What activities do you train?</Text></Text>         
        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Boxing</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={false}/> 
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Yoga</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={true}/> 
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
             <Text style={{fontSize:10, fontFamily:FONT_DAYTONA_BOLD, color:'#A2A2A2'}}># OF HOURS</Text>
             <Text style={[styles.rowBottomHeader,{fontSize:13}]}><Text style={styles.bold}>250+</Text></Text>
             
          </View>
          <View style={styles.rowBottomColumn}>
            <Text style={{fontSize:10, fontFamily:FONT_DAYTONA_BOLD, color:'#A2A2A2'}}>STUDIO</Text>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Equinox Gym</Text></Text>
             
          </View>
        </View>
         
        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Pilates</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={false}/> 
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Personal Training</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={false}/> 
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Circuit Training</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={false}/> 
          </View>
        </View>

        <Text style={styles.subHeaderText}><Text style={styles.bold}>Your Certifications</Text></Text> 
        <View style={[styles.rowContainer, {borderBottomWidth:0}]}>
          <View style={{marginLeft:15,justifyContent: 'center',}}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>I am cetified to train groups</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={true}/> 
          </View>
        </View>
        <View style={{alignSelf: 'stretch',marginLeft:30, marginRight:30,top:-10}}>
          <Button buttonStyle={{justifyContent: 'center',height:44,backgroundColor: DEFAULT_GREEN_COLOR }} buttonTextStyle={styles.bookActivityButtonTextWorkOutBottom} onPress={this.chat}>Upload Group Training Certification</Button> 
        </View>
        <View style={[styles.rowContainer, {borderColor:'#E7E7E7', borderWidth:1}]}>
          <View style={{marginLeft:15,justifyContent: 'center',}}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Certification 1 Uploaded</Text></Text>
          </View>
          <View style={{justifyContent: 'center',marginLeft: 1,left:100, marginTop:10, marginBottom:10,  borderRightColor:'#E7E7E7', borderRightWidth:1}}>
            <Image source={require('@images/view-icon.png')} style={{height:15, width:20, marginRight:18, marginLeft:5}} /> 
          </View>
          <View style={{justifyContent: 'center',marginLeft: 1, left:115}}>
            <Image source={require('@images/cancel-btn-icon.png')} style={{height:15, width:15}} />
          </View>
          </View>
        <View style={styles.bottomViewContainer}>
          <Button buttonStyle={[styles.bookActivityButtonWorkOutBottom, {marginLeft:30, marginRight:30, marginBottom:5}]} buttonTextStyle={styles.bookActivityButtonTextWorkOutBottom} onPress={this.chat}>Upload New Certification</Button>
          <Button buttonStyle={styles.bookActivityButtonWorkOutBottom} buttonTextStyle={styles.bookActivityButtonTextWorkOutBottom} onPress={this.chat}>Get Started</Button>
        </View>
      </View>
    )
  }
  renderNoGroup(){
    return(
      <View style ={styles.clientContainer}>
        <View style={{flexDirection:'row', marginTop:0 }}>
          <View style={{height:2, width:55, marginLeft: 5, backgroundColor:DEFAULT_GREEN_COLOR}}></View>
          <View style={{height:2, width:55, marginLeft: 5, backgroundColor:DEFAULT_GREEN_COLOR}}></View>
          <View style={{height:2, width:55, marginLeft: 5, backgroundColor:DEFAULT_GREEN_COLOR}}></View>
        </View>
        
        <Text style={styles.subHeaderText}><Text style={styles.bold}>What activities do you train?</Text></Text>         
        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Boxing</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={false}/> 
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Yoga</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={true}/> 
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
             <Text style={{fontSize:10, fontFamily:FONT_DAYTONA_BOLD, color:'#A2A2A2'}}># OF HOURS</Text>
             <Text style={[styles.rowBottomHeader,{fontSize:13}]}><Text style={styles.bold}>250+</Text></Text>
             
          </View>
          <View style={styles.rowBottomColumn}>
            <Text style={{fontSize:10, fontFamily:FONT_DAYTONA_BOLD, color:'#A2A2A2'}}>STUDIO</Text>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Equinox Gym</Text></Text>
             
          </View>
        </View>
         
        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Pilates</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={false}/> 
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Personal Training</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={false}/> 
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.rowBottomColumn}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Circuit Training</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={false}/> 
          </View>
        </View>

        <Text style={styles.subHeaderText}><Text style={styles.bold}>Your Certifications</Text></Text> 
        <View style={[styles.rowContainer, {borderBottomWidth:0}]}>
          <View style={{marginLeft:15,justifyContent: 'center',}}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>I am cetified to train groups</Text></Text> 
          </View>
          <View style={styles.columnItems}>
             <Switch defaultValue={true}/> 
          </View>
        </View>
        
        <View style={[styles.rowContainer, {borderColor:'#E7E7E7', borderWidth:1}]}>
          <View style={{marginLeft:15,justifyContent: 'center',}}>
            <Text style={styles.rowBottomHeader}><Text style={styles.bold}>Certification 1 Uploaded</Text></Text>
          </View>
          <View style={{justifyContent: 'center',marginLeft: 1,left:100, marginTop:10, marginBottom:10,  borderRightColor:'#E7E7E7', borderRightWidth:1}}>
            <Image source={require('@images/view-icon.png')} style={{height:15, width:20, marginRight:18, marginLeft:5}} /> 
          </View>
          <View style={{justifyContent: 'center',marginLeft: 1, left:115}}>
            <Image source={require('@images/cancel-btn-icon.png')} style={{height:15, width:15}} />
          </View>
          </View>
        <View style={styles.bottomViewContainer}>
          <Button buttonStyle={[styles.bookActivityButtonWorkOutBottom, {marginLeft:30, marginRight:30, marginBottom:15}]} buttonTextStyle={styles.bookActivityButtonTextWorkOutBottom} onPress={this.chat}>Upload New Certification</Button>
          <Button buttonStyle={styles.bookActivityButtonWorkOutBottom} buttonTextStyle={styles.bookActivityButtonTextWorkOutBottom} onPress={this.chat}>Get Started</Button>
        </View>
      </View>
    )
  }
  render(){
    if (this.state.showDetails) {
      return renderTurnsOn();
    }else{
      return renderNoGroup();
    }
  }
}
export default TrainInformation