import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
   var position1=0
  
  const [left, setLeft] = useState(39 );
  const [top, setTop] = useState(500-70*0);
  const [dic, setdic] = useState(0);
const [position,setPosition]=useState(0);

const handleThrowDice = () => {
  num= Math.floor(Math.random() * 6) + 1;
  position1=position+num;
setPosition(position1)
setdic(num);

if(position1==8){
  position1=11
}
else if(position1==13)
{
  position1=1
}
else if(position1==15)
{
  position1=26
}
else if(position1==21)
{
  position1=31
}
else if (position1==27)
{
  position1=16
}
else if(position1==33)
{
  position1=18
  
}
setPosition(position1)


// if(position1>=0&&position1<=4)
// {
//   setTop(500)
// }
// else if (position1>=5 && position1<=9)
// {
//   setTop(500-70*1)
// }
// else if (position1>=10 && position1<=14)
// {
//   setTop(500-70*2)
// }
// else if (position1>=15 && position1<=19)
// {
//   setTop(500-70*3)
// }
// else if (position1>=20 && position1<=24)
// {
//   setTop(500-70*4)
// }
// else if (position1>=25 && position1<=29)
// {
//   setTop(500-70*5)
// }
// else if (position1>=30 )
// {
//   setTop(500-70*6)
// }
setTop(500-70*(Math.floor(position1/5)))

if((position1 >=0 && position1 <=4)||
   (position1>=10 && position1<=14)||
   (position1>=20 && position1<=24)||
   (position1>=30 && position1<=34)
) // for left movement
{
  setLeft(39 + 75 *(position1%5));
//alert("position"+(position1%5 + 1)+"count"+position1+"dice"+num);
}
else{
setLeft(39 + 75 *(4-position1%5));
}//for right movement

if(position1>=34)
{
  
    handleResetGame()
  alert("win")
  
  
}
 };

 const handleResetGame = () => {
    // Reset the game state to its initial values
    setLeft(39);
    setTop(500);
    setdic(0);
    setPosition(0);
  };

  return (
    <>
      <ImageBackground source={require("./images/SnakesLaddersBoard.jpg")} style={{ height: 600 }}>
        <Image source={require("./images/player.png")} style={{ ...styles.playerImage, left, top }} />
      </ImageBackground>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={handleThrowDice}>
          <Text>Throw the Dice </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleResetGame}>
          <Text>Reset Game </Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.centeredTextContainer} >
      <Text>You got {dic} </Text>
        <Text>Position {position} </Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
 
  button: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
    marginLeft: 5,
  },
  playerImage: {
    width: 20,
    height: 30,
    position: 'absolute',
  },
  centeredTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;