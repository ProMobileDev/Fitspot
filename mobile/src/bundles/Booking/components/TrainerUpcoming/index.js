import React from 'react'

import {Animated,View,Image,Text,StatusBar,ScrollView,TouchableHighlight,ListView,Dimensions,Modal,TextInput,Picker,Easing,KeyboardAvoidingView} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Logo from '@components/Logo'
import Button from '@components/Button'
import moment from 'moment'
import PopupModal from '@components/PopupModal'
import HomeHelpModalPopup from '@components/PopupHelpModal/modalPopup'
import ButtonHelp from '@components/ButtonHelp'
import BookingSubscriptionOptionsContainer from '@Booking/containers/BookingSubscriptionOptionsContainer'
import NotLoggedInView from '@components/NotLoggedInView'
import { NativeModules } from 'react-native';
import AwesomeButton from '@components/AwesomeButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ApiUtils from '@utils/ApiUtils'
import styles from './styles'
import {FONT_DAYTONA_LIGHT, FONT_DAYTONA_BOLD, FONT_DAYTONA_SEMIBOLD, FONT_DAYTONA_REG} from '@theme/fonts'
import {DEFAULT_GREEN_COLOR} from '@theme/colors'


const headerText = "Corporate workouts are a great source of income for trainers and an important part of our business, As such we expect and encourage excellence and professionalism"

class TrainerUpcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: true,
    }
  }

  goToDetails(){

  }

  chat(){

  }
  
  toggleInformation(status){
    this.setState({showDetails: status})
  }
  renderTrainerTips(){
    return(
      <View>
        <View style={{borderBottomWidth:2, borderBottomColor:'#F2F2F2'}}>
          <Text style={{marginTop: 20,marginLeft:40, marginRight:40, marginBottom:20, alignSelf:'center',textAlign:'center', fontFamily:FONT_DAYTONA_BOLD, fontSize:14, color:'#A2A2A2'}}>{headerText}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 30, marginLeft:32}}>
          <Image source={require('@images/circle-icon.png')}  style={styles.trainTipImg}/>
          <Text style={styles.trainTipText}>Show up 15 minutes early.</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 30, marginLeft:32}}>
          <Image source={require('@images/circle-icon.png')} style={styles.trainTipImg} />
          <Text style={styles.trainTipText}>Wear your Fitspot shirt.</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 30, marginLeft:32}}>
          <Image source={require('@images/circle-icon.png')} style={styles.trainTipImg} />
          <Text style={styles.trainTipText}>Introduce yourself and remenber names.</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 30, marginLeft:32}}>
          <Image source={require('@images/circle-icon.png')} style={styles.trainTipImg} />
          <Text style={styles.trainTipText}>Set equipment before the workout.</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 30, marginLeft:32}}>
          <Image source={require('@images/circle-icon.png')} style={styles.trainTipImg} />
          <Text style={styles.trainTipText}>Provide modifications; not everyone is in shape.</Text>
        </View>
      </View>
      )
  }
  renderDetails(){
    return(
      <ScrollView style ={styles.clientContainer}>

        <View style={styles.rowBottom}>
          <View style={[styles.rowBottomColumn, {flex:1,marginLeft: 32,borderBottomColor:'#F2F2F2', borderBottomWidth:2}]}>
            <View style={{alignSelf:'flex-start'}}>
              <Text style={styles.rowBottomHeader}>DATE & TIME</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Wed 13 8:00am</Text></Text>
            </View>
          </View>

          <View style={[styles.rowBottomColumn, {flex:1,marginLeft: 15, marginRight:15, borderBottomColor:'#F2F2F2',borderBottomWidth:2}]}>
            <View style={{alignSelf:'flex-start'}}>
              <Text style={styles.rowBottomHeader}>TRAINER</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Robert Man</Text></Text>
            </View>
          </View>
        </View>

        <View style={[styles.rowBottom, {borderBottomColor:'#F2F2F2', borderBottomWidth:2}]}>
          <View style={[styles.rowBottomColumn, {flex:1,marginLeft: 32, borderBottomColor:'gray'}]}>
            <View style={{alignSelf:'flex-start'}}>
              <Text style={styles.rowBottomHeader}>ACTIVITY</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Strength</Text></Text>
            </View>
          </View>
          <View style={[styles.rowBottomColumn, {flex:1,marginRight: 15, marginLeft: 15}]}>
            <View style={{alignSelf:'flex-start'}}>
              <Text style={styles.rowBottomHeader}>LOCATION</Text>
              <Text style={[styles.rowBottomText,{marginRight:6}]}><Text style={styles.bold}>Equinox Gym</Text></Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{marginTop:20,marginBottom:6,fontFamily:FONT_DAYTONA_REG,fontWeight:'400',fontSize:15,textAlign:'center',alignItems:'center'}}>12 Participants Confirmed</Text>

          <View style={styles.imageViewContainer}>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer1.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Jane Lewis</Text>
            </View>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer2.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Rico Johnson</Text>
            </View>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer3.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Audrey Horne</Text>
            </View>
          </View>
          <View style={styles.imageViewContainer}>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer1.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Jane Lewis</Text>
            </View>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer2.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Rico Johnson</Text>
            </View>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer3.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Audrey Horne</Text>
            </View>
          </View>
          <View style={styles.imageViewContainer}>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer1.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Jane Lewis</Text>
            </View>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer2.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Rico Johnson</Text>
            </View>
            <View style={styles.imageItemViewContainer}>
              <Image source={require('@images/trainer3.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Audrey Horne</Text>
            </View>
          </View>

        </View>
        <View style={styles.bottomViewContainer}>
          <Text style={{marginTop:15,marginBottom:5,fontFamily:FONT_DAYTONA_REG,fontWeight:'400',fontSize:15,textAlign:'center',alignItems:'center'}}>Rate Workout</Text>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:10}}>
            <Image source={require('@images/fav-star.png')} style={{width: 30, height: 30}}/>
            <Image source={require('@images/fav-star.png')} style={{width: 30, height: 30}}/>
            <Image source={require('@images/fav-star.png')} style={{width: 30, height: 30}}/>
            <Image source={require('@images/fav-star.png')} style={{width: 30, height: 30}}/>
            <Image source={require('@images/fav-star.png')} style={{width: 30, height: 30}}/>
          </View> 
          <Button buttonStyle={styles.bookActivityButtonWorkOutBottom} buttonTextStyle={styles.bookActivityButtonTextWorkOutBottom} onPress={this.chat}>RSVP Next Workout</Button>
        </View>


      </ScrollView>
    )
  }
  render(){
    var trainerPadding = 6;
    return (
    <View style={{marginTop:65,borderTopColor:'#F2F2F2', borderTopWidth:2, flex:1}}>
      <View style={{flexDirection:'row'}}>
        <Button buttonStyle={[styles.topButtonStyle,{borderBottomWidth:2,borderBottomColor:this.state.showDetails ? DEFAULT_GREEN_COLOR : '#F2F2F2'}]} buttonTextStyle={[styles.topButtonTextStyle,{color:this.state.showDetails ? DEFAULT_GREEN_COLOR : '#E8E8E8'}]} onPress={() => this.toggleInformation(true)}>
            Details
        </Button>
        <Button buttonStyle={[styles.topButtonStyle,{borderBottomWidth:2,borderBottomColor:!this.state.showDetails ? DEFAULT_GREEN_COLOR : '#F2F2F2'}]} buttonTextStyle={[styles.topButtonTextStyle,{color:!this.state.showDetails ? DEFAULT_GREEN_COLOR : '#E8E8E8'}]} onPress={() => this.toggleInformation(false)}>
            Trainer Tips
        </Button>
      </View>
      { this.state.showDetails ?
          this.renderDetails() :
          this.renderTrainerTips()
      }
       
    </View>
    )
  }
}
export default TrainerUpcoming
