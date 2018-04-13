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


class TrainWorkoutDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  goToDetails(){

  }

  chat(){

  }
  renderConsumerClient(){
    return(
      <View style ={styles.clientContainer}>
       <View style={[styles.rowBottom,{borderTopColor:'#F2F2F2', borderTopWidth:3}]}>
          <View style={[styles.rowBottomColumn, {marginLeft: 32,borderBottomColor:'#F2F2F2', borderBottomWidth:3}]}>
            <View style={{alignSelf:'flex-start', marginTop:20, marginBottom:10}}>
              <Text style={styles.rowBottomHeader}>DATE & TIME</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Wed 13 8:00am</Text></Text>
            </View>
          </View>

          <View style={[styles.rowBottomColumn, {marginLeft: 15, marginRight:15, borderBottomColor:'#F2F2F2',borderBottomWidth:3}]}>
            <View style={{alignSelf:'flex-start',marginTop:20,marginBottom:10}}>
              <Image source={require('@images/rate-icon.png')} style={{width: 36, height: 6, marginTop:4, marginBottom:4}} />
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Robert Man</Text></Text>
            </View>
          </View>
        </View>

        <View style={[styles.rowBottom, {borderBottomColor:'#F2F2F2', borderBottomWidth:3}]}>
          <View style={[styles.rowBottomColumn, {marginLeft: 32, marginBottom:15, marginTop:10}]}>
            <View style={{alignSelf:'flex-start', marginTop:20}}>
              <Text style={styles.rowBottomHeader}>ACTIVITY</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Strength</Text></Text>
            </View>
          </View>
          <View style={[styles.rowBottomColumn, {marginRight: 15, marginLeft: 15, marginBottom:15, marginTop:10}]}>
            <View style={{alignSelf:'flex-start', marginTop:20}}>
              <Text style={styles.rowBottomHeader}>LOCATION</Text>
              <Text style={[styles.rowBottomText,{marginRight:6}]}><Text style={styles.bold}>Equinox Gym</Text></Text>
            </View>
          </View>
        </View>
          
          <View style={{alignSelf:'stretch', marginTop:20}}>
            <Text style={styles.rateTxt}>Client Notes</Text>
          </View>
          <View style={{borderTopColor:'#F2F2F2', borderTopWidth:2, alignSelf:'stretch', marginLeft:35, marginRight:35,marginTop:50}}>
            <Text style={styles.rateDetailTxt}>Notes on Client session (for trainer use & not to be shared with client)...</Text>
          </View>
          <View style={{borderColor:'#F2F2F2', borderTopWidth:3,borderBottomWidth:3, alignSelf:'stretch', marginLeft:35, marginRight:35, marginTop:30}}>
            <Text style={styles.rateDetailTxt}>Feedback for client (to be shared with client)...</Text>
          </View>
         

      
        <View style={{backgroundColor:'white', borderTopColor:'#F2F2F2', borderTopWidth:3,alignSelf:'stretch', marginTop:50}}>
          <Text style={styles.rateTxt}>Rate Client & Location</Text>

          <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center', marginTop: 10}}>
            <View style={{flexDirection: 'column', alignItems:'center', justifyContent: 'center', marginTop:5,marginLeft:20}}>
              <Image source={require('@images/trainer2.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Rico Johnson</Text>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:10}}>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
              </View>
              <Button buttonStyle={styles.sendFeedBackBtn} buttonTextStyle={styles.sendFeedBackBtnTxt} onPress={this.chat}>Send Feedback</Button>  
            </View>
            
            <View style={{flexDirection: 'column', alignItems:'center', justifyContent: 'center', marginTop:5, marginLeft:80}}>
              <Image source={require('@images/trainer3.png')} style={{width: 80, height: 80}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Audrey Horne</Text>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:10}}>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
              </View>
              <Button buttonStyle={styles.sendFeedBackBtn} buttonTextStyle={styles.sendFeedBackBtnTxt} onPress={this.chat}>Send Feedback</Button> 
            </View>
          </View>
           
        </View>
        <View style={styles.bottomViewContainer}>
          <Button buttonStyle={styles.bookActivityButtonWorkOutBottom} buttonTextStyle={styles.bookActivityButtonTextWorkOutBottom} onPress={this.chat}>Save Changes</Button>
        </View>
      </View>
    )
  }
  renderEnterpriseClient(){
    return(
      <View style ={styles.clientContainer}>
       <View style={[styles.rowBottom,{borderTopColor:'#F2F2F2', borderTopWidth:3}]}>
          <View style={[styles.rowBottomColumn, {marginLeft: 32,borderBottomColor:'#F2F2F2', borderBottomWidth:3}]}>
            <View style={{alignSelf:'flex-start', marginTop:10, marginBottom:5}}>
              <Text style={styles.rowBottomHeader}>DATE & TIME</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Wed 13 8:00am</Text></Text>
            </View>
          </View>

          <View style={[styles.rowBottomColumn, {marginLeft: 15, marginRight:15, borderBottomColor:'#F2F2F2',borderBottomWidth:3}]}>
            <View style={{alignSelf:'flex-start',marginTop:10,marginBottom:5}}>
              <Image source={require('@images/rate-icon.png')} style={{width: 36, height: 6, marginTop:4, marginBottom:4}} />
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Robert Man</Text></Text>
            </View>
          </View>
        </View>

        <View style={[styles.rowBottom, {borderBottomColor:'#F2F2F2', borderBottomWidth:3}]}>
          <View style={[styles.rowBottomColumn, {marginLeft: 32, marginBottom:10}]}>
            <View style={{alignSelf:'flex-start', marginTop:5}}>
              <Text style={styles.rowBottomHeader}>ACTIVITY</Text>
              <Text style={styles.rowBottomText}><Text style={styles.bold}>Strength</Text></Text>
            </View>
          </View>
          <View style={[styles.rowBottomColumn, {marginRight: 15, marginLeft: 15, marginBottom:10}]}>
            <View style={{alignSelf:'flex-start', marginTop:5}}>
              <Text style={styles.rowBottomHeader}>LOCATION</Text>
              <Text style={[styles.rowBottomText,{marginRight:6}]}><Text style={styles.bold}>Equinox Gym</Text></Text>
            </View>
          </View>
        </View>
        <View style={{alignSelf:'stretch', marginTop:5,borderBottomColor:'#F2F2F2', borderBottomWidth:3}}>
          <Text style={[styles.rateTxt, {fontSize:12, marginTop:10}]}>24 Participants</Text>
          <View style={{flexDirection: 'column', alignItems:'center', justifyContent: 'center', marginTop:5, marginBottom:5}}>
               
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                <Image source={require('@images/trainer1.png')} style={{width: 30, height: 30}}/>
                <Image source={require('@images/trainer2.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer3.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer4.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer5.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer1.png')} style={{width: 30, height: 30, marginLeft:15}}/>
              </View>
               <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                <Image source={require('@images/trainer1.png')} style={{width: 30, height: 30}}/>
                <Image source={require('@images/trainer2.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer3.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer4.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer5.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer1.png')} style={{width: 30, height: 30, marginLeft:15}}/>
              </View>
               <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                <Image source={require('@images/trainer1.png')} style={{width: 30, height: 30}}/>
                <Image source={require('@images/trainer2.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer3.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer4.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer5.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer1.png')} style={{width: 30, height: 30, marginLeft:15}}/>
              </View>
               <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                <Image source={require('@images/trainer1.png')} style={{width: 30, height: 30}}/>
                <Image source={require('@images/trainer2.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer3.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer4.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer5.png')} style={{width: 30, height: 30, marginLeft:15}}/>
                <Image source={require('@images/trainer1.png')} style={{width: 30, height: 30, marginLeft:15}}/>
              </View>
          </View>
        </View>     
        <View style={{alignSelf:'stretch', marginTop:10}}>
            <Text style={[styles.rateTxt, {fontSize:12}]}>Tinder Notes</Text>
        </View>
        <View style={{borderTopColor:'#F2F2F2', borderTopWidth:2, alignSelf:'stretch', marginLeft:35, marginRight:35,marginTop:10, bottom:-15}}>
            <Text style={styles.rateContentTxt}>Number of participants</Text>
        </View>
        <View style={{borderColor:'#F2F2F2', borderTopWidth:3,borderBottomWidth:3, alignSelf:'stretch', marginLeft:35, marginRight:35, bottom:-40}}>
            <Text style={[styles.rateContentTxt, {marginTop:10, marginBottom:20}]}>Notes on Client session (for trainer use & not to be shared with client)...</Text>
        </View>

        <View style={{backgroundColor:'white', borderTopColor:'#F2F2F2', borderTopWidth:3,alignSelf:'stretch',bottom:-65}}>
          <Text style={styles.rateTxt}>Rate Client & Location</Text>
          <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center', marginTop: 5}}>
            <View style={{flexDirection: 'column', alignItems:'center', justifyContent: 'center', marginTop:5,marginLeft:20}}>
              <Image source={require('@images/trainer2.png')} style={{width: 60, height: 60}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Rico Johnson</Text>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
              </View>
              <Button buttonStyle={styles.sendFeedBackBtn} buttonTextStyle={styles.sendFeedBackBtnTxt} onPress={this.chat}>Send Feedback</Button>  
            </View>
            
            <View style={{flexDirection: 'column', alignItems:'center', justifyContent: 'center', marginTop:5, marginLeft:80}}>
              <Image source={require('@images/trainer3.png')} style={{width: 60, height: 60}}/>
              <Text style={[styles.rowBottomHeader, {marginTop: 10}]}> Audrey Horne</Text>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
                <Image source={require('@images/fav-star.png')} style={{width: 20, height: 20}}/>
              </View>
              <Button buttonStyle={styles.sendFeedBackBtn} buttonTextStyle={styles.sendFeedBackBtnTxt} onPress={this.chat}>Send Feedback</Button> 
            </View>
          </View>
           
        </View>

       <View style={[styles.bottomViewContainer, {bottom: -85}]}>
          <Button buttonStyle={styles.bookActivityButtonWorkOutBottom} buttonTextStyle={styles.bookActivityButtonTextWorkOutBottom} onPress={this.chat}>Save Changes</Button>
        </View> 
      </View>
    )
  }
  render(){
     return this.renderEnterpriseClient();           
  }
}
export default TrainWorkoutDetail
