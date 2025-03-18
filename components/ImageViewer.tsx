
import { StyleSheet } from "react-native";
import {Image} from "expo-image";

const placeholderImage=require("../assets/images/placeholder.png");

const ImageViewer = ({imgSource=placeholderImage}:{imgSource?:string}) => {
  return (

          <Image source={imgSource} style={styles.image}/>
  )
}
const styles = StyleSheet.create({

image:{
  width:320,
  height:320,
  borderRadius: 18,
},

})
export default ImageViewer