/* @flow */
import React from 'react'
import {View, Text, Image, Modal, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Title from '@components/Title'
import Button from '@components/Button'

import styles from './styles'
import {DEFAULT_BACKGROUND_COLOR, DEFAULT_GREEN_COLOR, DEFAULT_GREY_COLOR} from '@theme/colors'
import {FONT_DAYTONA_LIGHT, FONT_DAYTONA_BOLD, FONT_DAYTONA_SEMIBOLD, FONT_DAYTONA_REG} from '@theme/fonts'
type Props = {
  modalType: int,
  styles: Object,
  children?: string,
  visible: bool,
  onDismiss: Function,
  onUnavailable: Function,
  onAvailable:Function,
  onNewTimeProposal:Function,
  title?: string,
}

class WorkoutRequestPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextPopup: 0,
    }
  }

  switchInformation(status){
    this.setState({showNextPopup: status})
  }

  changeAcceptTime(){

  }
  suggestDifTime(){

  }
  cancelSession(){

  }
  closePopup(){

  }
  unAvailable(){
    this.props.onUnavailable()
  }
  available(){

  }
  confirmUnavailable(){

  }
  sendNewTime(){

  }
   
  renderUnavailableConfirm(){
    return (
      <View style={{height: 425,width: 350,backgroundColor:'transparent'}}>
        <View style={{alignSelf:'center',flexDirection:'row', top: -50 ,backgroundColor:'transparent', marginBottom:-5}}>
          <Image source={require('@images/singleWorkout-icon.png')} style={{width: 20, height: 20}} />
          <Text style={{fontWeight:'700', color:'#3FAA9B', fontSize:15,fontFamily:FONT_DAYTONA_BOLD,textAlign:'center',marginLeft:10}}>Single Workout Request</Text>
        </View>
        <View style ={{ marginTop:-10}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex:1, alignSelf:'flex-start', marginLeft: 10, borderBottomColor:'#E7E7E7', borderBottomWidth:1}}>
              <Text style={styles.rowBottomHeader}> DATA & TIME</Text>
              <Text style={styles.rowBottomText}> Mon 14 8:00am</Text>
            </View>
            <View style={{flex:1, alignSelf:'flex-start',marginLeft: 15, marginRight:15, borderBottomColor:'#E7E7E7', borderBottomWidth:1}}>
              <Image source={require('@images/rate-icon.png')} style={{width: 36, height: 6, marginTop:4, marginBottom:4}} />
              <Text style={styles.rowBottomText}>Robert Man</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop:10}}>
            <View style={{flex:1, alignSelf:'flex-start', marginLeft: 10}}>
              <Text style={styles.rowBottomHeader}> ACTIVITY</Text>
              <Text style={styles.rowBottomText}> Strength</Text>
            </View>
            <View style={{flex:1, alignSelf:'flex-start', marginRight:15}}>
              <Text style={styles.rowBottomHeader}>LOCATION</Text>
              <Text style={styles.rowBottomText}>Equinox Gym</Text>
            </View>
          </View>
          <View style={{backgroundColor:'#EEEEF1', flexDirection: 'row',height:50}}>
            <Text style={{flex:1, alignSelf:'center',fontFamily:FONT_DAYTONA_BOLD,fontWeight:'400',fontSize:12,textAlign:'center',marginLeft:10, color:'#4B4B4C'}}>YOUR PAY</Text>
            <Text style={{flex:1,alignSelf:'center',fontFamily:FONT_DAYTONA_BOLD,fontWeight:'400',fontSize:12,textAlign:'center', marginLeft:180, color:'#4B4B4C'}}>$52.00</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.contentText}>CAN YOU DO A DIFFERENT TIME?</Text>
            <Button buttonStyle={[styles.rowBtn, {borderTopColor:'#E7E7E7',borderTopWidth:1}]} buttonTextStyle={styles.rowBottomText} onPress={() => this.switchInformation(2)}>Mon 16th</Button>
            <Button buttonStyle={styles.rowBtn} buttonTextStyle={styles.rowBottomText} onPress={() => this.switchInformation(2)}>9:00am</Button>
            <Button buttonStyle={{backgroundColor:DEFAULT_GREEN_COLOR, marginTop:20, height:50,marginLeft:-10}} buttonTextStyle={{color:'white', fontFamily:FONT_DAYTONA_BOLD, textAlign:'center', fontSize:15, alignSelf:'center',marginTop:15}} onPress={() => this.switchInformation(0)}>Confirm Unavailability</Button>
            <Button buttonStyle={{height:50,marginLeft:-10, marginBottom:-10}} buttonTextStyle={{color:DEFAULT_GREEN_COLOR, fontFamily:FONT_DAYTONA_BOLD, textAlign:'center', fontSize:15, alignSelf:'center',marginTop:15}} onPress={() => this.switchInformation(0)}>Available</Button> 
          </View>
            
          <TouchableHighlight style={{backgroundColor:'transparent', alignSelf:'center', bottom:-40, marginTop:0}}>
            <Image source={require('@images/cancel-btn-green-icon.png')} style={{width: 15, height: 15}} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
  renderDetails(){
    return (
      <View style={{height: 425,width: 350,backgroundColor:'transparent'}}>
        <View style={{alignSelf:'center',flexDirection:'row', top: -50 ,backgroundColor:'transparent', marginBottom:-5}}>
          <Image source={require('@images/singleWorkout-icon.png')} style={{width: 20, height: 20}} />
          <Text style={{fontWeight:'700', color:'#3FAA9B', fontSize:15,fontFamily:FONT_DAYTONA_BOLD,textAlign:'center',marginLeft:10}}>Select Workout Request</Text>
        </View>
        <View style ={{ marginTop:-10}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex:1, alignSelf:'flex-start', marginLeft: 10, borderBottomColor:'#E7E7E7', borderBottomWidth:1}}>
              <Text style={styles.rowBottomHeader}> DATA & TIME</Text>
              <Text style={styles.rowBottomText}> Mon 14 8:00am</Text>
            </View>
            <View style={{flex:1, alignSelf:'flex-start',marginLeft: 15, marginRight:15, borderBottomColor:'#E7E7E7', borderBottomWidth:1}}>
              <Image source={require('@images/rate-icon.png')} style={{width: 36, height: 6, marginTop:4, marginBottom:4}} />
              <Text style={styles.rowBottomText}>Robert Man</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop:10}}>
            <View style={{flex:1, alignSelf:'flex-start', marginLeft: 10}}>
              <Text style={styles.rowBottomHeader}> ACTIVITY</Text>
              <Text style={styles.rowBottomText}> Strength</Text>
            </View>
            <View style={{flex:1, alignSelf:'flex-start', marginRight:15}}>
              <Text style={styles.rowBottomHeader}>LOCATION</Text>
              <Text style={styles.rowBottomText}>Equinox Gym</Text>
            </View>
          </View>
          <View style={{backgroundColor:'#EEEEF1', flexDirection: 'row',height:50}}>
            <Text style={{flex:1, alignSelf:'center',fontFamily:FONT_DAYTONA_BOLD,fontWeight:'400',fontSize:12,textAlign:'center',marginLeft:10, color:'#4B4B4C'}}>YOUR PAY</Text>
            <Text style={{flex:1,alignSelf:'center',fontFamily:FONT_DAYTONA_BOLD,fontWeight:'400',fontSize:12,textAlign:'center', marginLeft:180, color:'#4B4B4C'}}>$52.00</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.contentText}>CAN YOU DO A DIFFERENT TIME?</Text>
            <Button buttonStyle={[styles.rowBtn, {borderTopColor:'#E7E7E7',borderTopWidth:1}]} buttonTextStyle={styles.rowBottomText} onPress={() => this.switchInformation(2)}>Mon 16th</Button>
            <Button buttonStyle={styles.rowBtn} buttonTextStyle={styles.rowBottomText} onPress={() => this.switchInformation(2)}>9:00am</Button>
            <Button buttonStyle={{backgroundColor:DEFAULT_GREEN_COLOR, marginTop:20, height:50,marginLeft:-10}} buttonTextStyle={{color:'white', fontFamily:FONT_DAYTONA_BOLD, textAlign:'center', fontSize:15, alignSelf:'center',marginTop:15}} onPress={() => this.switchInformation(0)}>Send New Time Proposal</Button>
            <Button buttonStyle={{height:50,marginLeft:-10, marginBottom:-10}} buttonTextStyle={{color:DEFAULT_GREEN_COLOR, fontFamily:FONT_DAYTONA_BOLD, textAlign:'center', fontSize:15, alignSelf:'center',marginTop:15}} onPress={() => this.switchInformation(1)}>Cancel</Button> 
          </View>
            
          <TouchableHighlight style={{backgroundColor:'transparent', alignSelf:'center', bottom:-40, marginTop:0}}>
            <Image source={require('@images/cancel-btn-green-icon.png')} style={{width: 15, height: 15}} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
  renderUnavailable(){
    return (
      <View style={{height: 200,width: 320,backgroundColor:'transparent'}}>
        <View style={{borderTopLeftRadius: 10,borderTopRightRadius: 10}}>
          <View style={{alignSelf:'center',flexDirection:'row', top: -50 ,backgroundColor:'transparent', marginBottom:-5}}>
            <Image source={require('@images/singleWorkout-icon.png')} style={{width: 20, height: 20}} />
            <Text style={{fontWeight:'700', color:'#3FAA9B', fontSize:15,fontFamily:FONT_DAYTONA_BOLD,textAlign:'center',marginLeft:10}}>General Workout Request</Text>
          </View>
        </View>
        <View style={styles.rowBottom}>
          <View style={[styles.rowBottomColumn, {flex:1,marginLeft: 15,borderBottomColor:'#E7E7E7', borderBottomWidth:2}]}>
            <View style={{alignSelf:'flex-start'}}>
              <Text style={styles.rowBottomHeader}>DATE & TIME</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Mon 14 8:00am</Text></Text>
            </View>
          </View>
          
          <View style={[styles.rowBottomColumn, {flex:1,marginRight: 0,marginLeft: 15, borderBottomColor:'#E7E7E7', borderBottomWidth:2}]}>
            <View style={{alignSelf:'flex-start'}}>
              <Image source={require('@images/rate-icon.png')} style={{width: 36, height: 6}} />
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Robert Man</Text></Text>
            </View>
          </View>
        </View>
        
        <View style={styles.rowBottom}>
          <View style={[styles.rowBottomColumn, {flex:1,marginLeft: 15, borderBottomColor:'gray'}]}>
            <View style={{alignSelf:'flex-start'}}>
              <Text style={styles.rowBottomHeader}>ACTIVITY</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Strength</Text></Text>
            </View>
          </View>
          <View style={[styles.rowBottomColumn, {flex:1,marginRight: 0, marginLeft: 15}]}>
            <View style={{alignSelf:'flex-start'}}>
              <Text style={styles.rowBottomHeader}>LOCATION</Text>
              <Text style={[styles.rowBottomText,{marginRight:6}]}><Text style={styles.bold}>Equinox Gym</Text></Text>
            </View>
          </View>
        </View>
         <View style={{backgroundColor:'#EEEEF1', flexDirection: 'row'}}>
          <Text style={{marginTop:10,marginBottom:10,fontFamily:FONT_DAYTONA_BOLD,fontWeight:'400',fontSize:12,textAlign:'center',marginLeft:15, color:'#4B4B4C'}}>YOUR PAY</Text>
          <Text style={{marginTop:10,marginBottom:10,fontFamily:FONT_DAYTONA_BOLD,fontWeight:'400',fontSize:12,textAlign:'center', marginLeft:180, color:'#4B4B4C'}}>$52.00</Text>
         </View>  
       
        <View style={styles.bottomBtnContainer}>
          <TouchableHighlight onPress={() => this.switchInformation(1)} underlayColor='rgba(0,0,0,0)' style={[styles.rowBottomColumn, {flex:1,height: 50,backgroundColor:DEFAULT_GREEN_COLOR,borderBottomLeftRadius:6}]}>
            <View style={{alignSelf:'center',flexDirection:'row'}}>
              <Text style={{fontWeight:'700', fontSize:15,fontFamily:FONT_DAYTONA_BOLD,color:'white'}}> Unavailable</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.available} underlayColor='rgba(0,0,0,0)' style={[styles.rowBottomColumn, {flex:1,borderLeftWidth: 1,height: 50, borderLeftColor: '#c0c0c0',backgroundColor:DEFAULT_GREEN_COLOR,borderBottomRightRadius:6}]}>
            <View style={{alignSelf:'center',flexDirection:'row'}}>
              <Text style={{fontWeight:'700', fontSize:15,fontFamily:FONT_DAYTONA_BOLD,color:'white'}}> Available</Text>
            </View>
          </TouchableHighlight>
        </View>
        <TouchableHighlight onPress={this.closePopup} underlayColor='rgba(0,0,0,0)' style={[styles.rowBottomColumn, {flex:1,height: 20, bottom: -60, marginTop: -60,backgroundColor:'transparent'}]}>
            <View style={{alignSelf:'center',flexDirection:'row'}}>
              <Image source={require('@images/cancel-btn-green-icon.png')} style={{width: 15, height: 15}} />
            </View>
          </TouchableHighlight>
        
      </View>
    )
  }
  renderMain(){
    return (
      <View style={styles.container}>
        <View style = {styles.textContainer}>  
          <Text style={styles.headerText}>Trainer Responded!</Text>
          <Text style={styles.headerContentText}> Unfortunately, Rico can`t do 8:00am on Monday, and Suggested 9:00am.</Text>
        </View>
        <View style={styles.btnContainer}>
           <Button buttonStyle={[styles.popBtn, {borderBottomColor:'green',borderBottomWidth: 1}]} buttonTextStyle={styles.popBtnText} onPress={this.changeAcceptTime}>Accept Time Change</Button>
           <Button buttonStyle={styles.popBtn} buttonTextStyle={styles.popBtnText} onPress={this.suggestDifTime}>Suggest a Different Time</Button>
           <Button buttonStyle={styles.popCancelBtn} buttonTextStyle={styles.popBtnText} onPress={this.cancelSession}>Cancel Session</Button>
        </View>
                 
      </View>
    )
  }
  render() {
    if(this.state.showNextPopup == 0){
      return this.renderUnavailable()
    }else if(this.state.showNextPopup == 1){
      return this.renderUnavailableConfirm()
    }else{
      return this.renderDetails()
    }
     
  }
}

export default WorkoutRequestPopup