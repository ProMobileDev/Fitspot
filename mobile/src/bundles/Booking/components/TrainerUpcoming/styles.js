import {StyleSheet, Dimensions} from 'react-native'
import {DEFAULT_BACKGROUND_COLOR, DEFAULT_GREEN_COLOR} from '@theme/colors'
import {FONT_DAYTONA_LIGHT, FONT_DAYTONA_BOLD, FONT_DAYTONA_SEMIBOLD, FONT_DAYTONA_REG} from '@theme/fonts'

const styles = StyleSheet.create({
  clientContainer: {     
     
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
    height: 80,
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
    bottom:0,
    height:120, 
    alignSelf: 'stretch',
    marginBottom: 0, 
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1
  },
  bookActivityButtonWorkOutBottom:{
    bottom: -30,
    height: 44,
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
  topButtonStyle: {
    flex: 1,
    marginBottom: 12,
    alignSelf: 'stretch',
    // marginLeft: 35,
    // marginRight: 35,
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    // borderColor: DEFAULT_GREEN_COLOR,
    // borderWidth: 1
  },
  topButtonTextStyle: {
    color: DEFAULT_GREEN_COLOR,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  imageViewContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  imageItemViewContainer:{
    flexDirection: 'column', 
    alignItems:'center', 
    justifyContent: 'center',
     marginTop:5, 
     marginLeft:20
  },
  trainTipText:{
    marginLeft: 10,
    fontSize: 17,
    color:'gray', 
    fontFamily:FONT_DAYTONA_REG
  },
  trainTipImg:{
    marginTop:5
  }
})

export default styles
