import {StyleSheet, Dimensions} from 'react-native'
import {DEFAULT_BACKGROUND_COLOR, DEFAULT_GREEN_COLOR} from '@theme/colors'
import {FONT_DAYTONA_LIGHT, FONT_DAYTONA_BOLD, FONT_DAYTONA_SEMIBOLD, FONT_DAYTONA_REG} from '@theme/fonts'

const styles = StyleSheet.create({
  clientContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 60,
    width: null,
    height: null,
     
  },
  headerText: {
    fontFamily: FONT_DAYTONA_BOLD,
    fontSize: 14,
    marginTop: 31,
    color: '#4B4B4C',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  row: {
    flex: 1,
    // flexDirection:'row',
    backgroundColor: 'rgba(255,255,255,1)',
    width: Dimensions.get('window').width - 64,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 6,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  rowTop: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  bold: {
    fontFamily: FONT_DAYTONA_BOLD
  },
  rowTopTitle: {
    fontFamily: FONT_DAYTONA_SEMIBOLD,
    fontSize: 14,
    color: '#4B4B4C',
    textAlign: 'center'
  },
  rowBottom: {
    flexDirection: 'row',
    marginTop:10,
  },
  rowBottomHeader: {
    color: '#4B4B4C',
    fontFamily: FONT_DAYTONA_REG,
    fontWeight: 'bold',
    fontSize: 10
  },
  rowBottomText: {
    color: '#4B4B4C',
    fontSize: 17,
    fontFamily: FONT_DAYTONA_REG
  },
  rowBottomColumn: {
    flex: 1,
    justifyContent: 'center'
  },
  bestValue: {
    position: 'absolute',
    top: 33,
    left: -5
  },
  bookActivityButtonWorkOut: {
    height: 44,
    backgroundColor: 'rgba(1,1,1,0)',
    borderColor: DEFAULT_GREEN_COLOR,
    borderWidth: 1,
    alignSelf: 'stretch',
    marginLeft:32,
    marginRight:32,
    marginTop: 30,
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
  bottomViewContainer:{
    bottom: -85,
    height: 150,
    alignSelf: 'stretch',
    marginBottom: 0, 
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1
  },
  bookActivityButtonWorkOutBottom:{
    height: 55,
    marginBottom: 0,
    justifyContent: 'center',
    backgroundColor: DEFAULT_GREEN_COLOR
 
  },
  bookActivityButtonTextWorkOutBottom :{
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  rateTxt:{
    color:'#0B0B0B',
    marginTop:20,
    fontFamily:FONT_DAYTONA_BOLD,
    fontSize:15,
    textAlign:'center',
    alignItems:'center'
  },
   rateDetailTxt:{
    color:'#4B4B4C',
    marginTop:20,
    marginBottom:20,
    fontFamily:FONT_DAYTONA_BOLD,
    fontSize:12,
    textAlign:'left',
    alignItems:'center'
  },
  sendFeedBackBtn:{
    backgroundColor:'white',
    marginTop:10
  },
  sendFeedBackBtnTxt:{
    color:DEFAULT_GREEN_COLOR, 
    fontSize:10,textAlign:'center',
    fontFamily:FONT_DAYTONA_BOLD,
  },
  rateContentTxt:{
    color:'#4B4B4C',
    marginTop:5,
    marginBottom:5,
    fontFamily:FONT_DAYTONA_BOLD,
    fontSize:12,
    textAlign:'left',
    alignItems:'center'
  },
})

export default styles
