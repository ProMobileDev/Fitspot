
import {StyleSheet,Dimensions} from 'react-native'
import {DEFAULT_BACKGROUND_COLOR, DEFAULT_GREEN_COLOR} from '@theme/colors'
import { FONT_DAYTONA_LIGHT, FONT_DAYTONA_BOLD, FONT_DAYTONA_FAT,FONT_DAYTONA_SEMIBOLD,FONT_DAYTONA_REG } from '@theme/fonts'

const styles = StyleSheet.create({
  clientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:null,
    height:null,
     
  },
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    width:null,
    height:null,
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoStyle: {
    marginTop: 34,
  },
  headerText: {
    fontFamily: FONT_DAYTONA_LIGHT,
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft:32,
    marginRight:32,
    color: '#4c4c4c',
    textAlign: 'center',
    marginTop: 12
  },
  headerTextWorkout: {
    fontFamily: FONT_DAYTONA_BOLD,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft:32,
    marginRight:32,
    color: '#4c4c4c',
    textAlign: 'center',
    marginTop: 12
  },
  bottomTextWorkout: {
    fontFamily: FONT_DAYTONA_BOLD,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft:32,
    marginRight:32,
    color: '#4B4B4C',
    textAlign: 'center',
    marginTop: 2
  },
  contentTextWorkout: {
    fontFamily: FONT_DAYTONA_BOLD,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(1,1,1,0)',
    marginLeft:32,
    marginRight:32,
    color: '#4c4c4c',
    textAlign: 'center',
    marginTop: 5
  },
  registerButton: {
    height: 50,
    alignSelf: 'stretch',
    marginLeft:32,
    marginRight:32,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: DEFAULT_GREEN_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 25
  },
  registerButtonText: {
    fontSize: 12,
    color: DEFAULT_GREEN_COLOR,
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  bookActivityButton: {
    height: 44,
    backgroundColor: DEFAULT_GREEN_COLOR,
    borderColor: DEFAULT_GREEN_COLOR,
    borderWidth: 1,
    alignSelf: 'stretch',
    marginLeft:32,
    marginRight:32,
    // width: 256,
    justifyContent: 'center'
  },
  bookActivityButtonText: {
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  bookSurveyButton: {
    height: 55,
    backgroundColor: 'white',
    borderColor: DEFAULT_GREEN_COLOR,
    borderWidth: 1,
    alignSelf: 'stretch',
    marginTop: 20,
    marginLeft:32,
    marginRight:32,
    // width: 256,
    justifyContent: 'center'
  },
  bookSurveyButtonText:{
    fontSize: 15,
    color: DEFAULT_GREEN_COLOR,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: FONT_DAYTONA_BOLD,
    fontWeight: 'bold'
  },

  bookActivityButtonWorkOut: {
    height: 44,
    backgroundColor: 'rgba(1,1,1,0)',
    borderColor: DEFAULT_GREEN_COLOR,
    borderWidth: 1,
    alignSelf: 'stretch',
    marginTop: 20,
    marginLeft:32,
    marginRight:32,
    // width: 256,
    justifyContent: 'center'
  },
  bookActivityButtonTextWorkOut: {
    fontSize: 14,
    color: DEFAULT_GREEN_COLOR,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  workoutListButton: {
    height: 50,
    flex:1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottomColor: DEFAULT_GREEN_COLOR,
    borderBottomWidth: 2,
    justifyContent: 'center',

  },
  requestNumberTextStyle:{
    fontSize: 12,
    color: '#E67650',
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  workoutRow: {
    alignSelf: 'stretch',
  },
  bottomViewContainer:{
    flex:1,
    alignSelf: 'stretch',
    marginLeft: 20, 
    marginRight:20,
    marginTop: 20,
    bottom:0,
    borderColor:'red',
    borderWidth:2 
  },
  bottomViewContainerSingle:{
    height: 120,
    flex:1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 40,
    borderTopColor:'gray',
    backgroundColor:'rgba(1,1,1,0)'
  },
  workOutContentViewContainer:{
    height: 350,
    alignSelf: 'stretch',
    marginTop: 15,
    marginLeft: 20, 
    marginRight:20, 
    marginBottom: 40,
    borderRadius:10, 
    backgroundColor:'rgba(1,1,1,0)'
  } 
})

export default styles
