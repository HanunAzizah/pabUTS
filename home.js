// import { useRouter } from "next/router";
// import { Heading, Image, FlatList, Center, HStack, Pressable, useBreakpointValue, VStack, Text } from "native-base";
// import { Box, ScrollView } from "native-base";
// import { View } from "react-native";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Header } from "../components";
// import datas from "../datas";


// const list = [
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Order Food Online",
//   },
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Go out for a meal",
//   },
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Zomato Pro",
//   },
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Nightlife & Clubs",
//   },
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Nightlife & Clubs",
//   },
// ];

// function ZomatoCategories() {
//   // const router = useRouter();
//   const noColumn = useBreakpointValue({
//     base: 2,
//     md: 4,
//   });

//   return (
    
//     <ScrollView>
//     <HStack
//       direction={{ base: "", md: "" }}
//       mt="16"
//       flexWrap="wrap"
//       width={{ base: "80%", sm: "50%", md: "100%" }}
//       justifyContent={{ base: "", sm: "center" }}
//       space={{ base: 4, lg: 2 }}
//     >
//       {list.map(() => (
//         <Pressable
//           // key={}
//           onPress={() => {
            
//           }}
//         >
//           <Card  />
//         </Pressable>
//       ))}
//     </HStack>
//     </ScrollView>
//   );
// }

// function Card () {
//   return (
//     <ScrollView>
//     <VStack
//       alignItems="center"
//       borderWidth={2}
//       borderColor="coolGray.200"
//       borderRadius="xl"
//       overflow="hidden"
//       mx={7}
//     >
//       <Image
//         borderTopLeftRadius="xl"
//         borderTopRightRadius="xl"
//         w={100}
//         h={100}
//         source={{
//           uri: list.imageUri,
//         }}
//         alt="Alternate Text"
//       />
//       <Center
//         py={3}
//         _text={{ fontSize: "xl", textAlign: "center" }}
//         color="coolGray.800"
//         fontWeight="extrabold"
//       >
//       </Center>
//     </VStack>
//     </ScrollView>
//   );
// }

// export default ZomatoCategories;

// const Home = () => {
//   const navigation = useNavigation();

//   const renderitem = ({ item }) => {
//     return (
//       // <TouchableOpacity
//         // activeOpacity={0.5}
//         // onPress={() => navigation.navigate("News Detail", { item:item })}
//       // >
        
//         <Box
//           p={"4"}
//           // borderBottomColor={"coolGray.300"}
//           // borderBottomWidth={1}
//           flexDirection="row"
//           flex={1}
//         >
//           <Box flex={1} mr={"4"}>
//             <Image
//               source={{ uri: item.image }}
//               w="full"
//               h="full"
//               alt="Image Data"
//             />
//           </Box>
//           <Box flex={1.8}>
//             {/* <Text fontSize={"sm"}>{item.recentText}</Text> */}
//             <Heading lineHeight={"md"} fontSize={"md"}>
//               {item.title}
//             </Heading>
//             <Text fontSize={"sm"}>{item.recentText}</Text>
//           </Box>
//         </Box>
//       // </TouchableOpacity>
//     );
//   };

//   return (
//     <>
//       {/* <Header title={"News"} />
//       <Box py={"4"} bg="red.700">
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//           {datas.slice(14).map((item, index) => {
//             return (
//               <TouchableOpacity
//                 activeOpacity={0.5}
//                 key={index}
//                 onPress={() =>
//                   navigation.navigate("News Detail", { id: item.id })
//                 }
//               >
//                 <Box w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
//                   <Image
//                     source={{ uri: item.image }}
//                     w="full"
//                     h="24"
//                     alt="Image Data"
//                     mb={"2"}
//                   />
//                   <Text fontSize={"xs"} color="light.300">
//                     {item.date}
//                   </Text>
//                   <Heading
//                     fontSize={"sm"}
//                     lineHeight={"xs"}
//                     ellipsizeMode="tail"
//                     numberOfLines={2}
//                     color="light.50"
//                   >
//                     {item.title}
//                   </Heading>
//                 </Box> */}
//               {/* </TouchableOpacity>
//             );
//           })}
//         </ScrollView>
//       </Box> */}
//       <FlatList
//         data={datas}
//         renderItem={renderitem}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//       />
//     </>
//   );
// };

// export default Home;

// import React from "react";

// import { useRouter } from "next/router";
// import {
//   Center,
//   HStack,
//   Image,
//   Pressable,
//   useBreakpointValue,
//   VStack,
// } from "native-base";
// import { View } from "react-native";

// const list = [
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Order Food Online",
//   },
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Go out for a meal",
//   },
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Zomato Pro",
//   },
//   {
//     imageUri:
//       "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
//     text: "Nightlife & Clubs",
//   },
// ];

// function ZomatoCategories() {
//   const router = useRouter();
//   const noColumn = useBreakpointValue({
//     base: 2,
//     md: 4,
//   });

//   return (
//     <HStack
//       direction={{ base: "column", md: "row" }}
//       mt="16"
//       flexWrap="wrap"
//       width={{ base: "80%", sm: "50%", md: "100%" }}
//       justifyContent={{ base: "", sm: "center" }}
//       space={{ base: 4, lg: 2 }}
//     >
//       {list.map((item, index) => (
//         <Pressable
//           key={index}
//           onPress={() => {
//             router.push("/goformeal");
//           }}
//         >
//           <Card item={item} />
//         </Pressable>
//       ))}
//     </HStack>
//   );
// }

// function Card(props: any) {
//   return (
//     <VStack
//       alignItems="center"
//       borderWidth={1}
//       borderColor="coolGray.200"
//       borderRadius="lg"
//       overflow="hidden"
//       mx={{ base: 4, sm: 0 }}
//     >
//       <Image
//         borderTopLeftRadius="lg"
//         borderTopRightRadius="lg"
//         w={{ base: "100%", md: "267" }}
//         h={192}
//         source={{
//           uri: props.item.imageUri,
//         }}
//         alt="Alternate Text"
//       />
//       <Center
//         py={3}
//         _text={{ fontSize: "lg", textAlign: "center" }}
//         color="coolGray.800"
//         fontWeight="extrabold"
//       >
//         {props.item.text}
//       </Center>
//     </VStack>
//   );
// }

// export default ZomatoCategories;

// import React from 'react';
// import { Container, Content, Grid, Row, Col, Text, Button } from 'native-base';

// const categoriesData = [
//   'Kategori 1',
//   'Kategori 2',
//   'Kategori 3',
//   'Kategori 4',
//   'Kategori 5',
//   'Kategori 6',
//   'Kategori 7',
//   'Kategori 8',
//   'Kategori 9',
//   'Kategori 10',
//   'Kategori 11',
//   'Kategori 12',
// ];

// const CategoryPage = () => {
//   return (
//     <Container>
//       <Content>
//         <Grid>
//           {categoriesData.map((category, index) => (
//             <Row key={index}>
//               <Col>
//                 <Button full>
//                   <Text>{category}</Text>
//                 </Button>
//               </Col>
//               {index % 2 === 1 && (
//                 <Col />
//               )}
//             </Row>
//           ))}
//         </Grid>
//       </Content>
//     </Container>
//   );
// };

// export default CategoryPage;

// import { Heading, Center, Box, AspectRatio, Image, Stack, Text, HStack, ScrollView, TouchableOpacity, Button, View } from "native-base";
import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider,  Divider, Pressable,  ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from 'react-native';



const Home = () => {
  const navigation = useNavigation();

return (
  <Box >
 
 <ScrollView>
  <Box alignItems="center">
          <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
         
        <Box marginTop={100} marginLeft={5}>
              <Heading color="white" bold size="xl">Kategori</Heading>
              <Text color='white' fontSize="lg">Berikut adalah kategori produk yang ada</Text>
          </Box>
         
        </AspectRatio>
         
          </Box>
          </Box>

          <Box rounded="3xl"   
  _light={{
   backgroundColor: "white"
 }}>
    
      <Stack p="4" space={30}>
        <Stack space={2}>
         <Center>
         <Text fontSize="xl" marginBottom={4} color="#43270f" bold>
           category
         </Text>
         <Divider />
         </Center>
        
         <Box alignItems="center">
   

   
 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     
      <Pressable onPress={() => navigation.navigate("News Detail")}>
     <Image size={120} borderRadius={100} 
     source={require('../assets/lip.jpg')} alt="Alternate Text"/>
 </Pressable>
 
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} 
     source={require('../assets/Eyeshadow.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("For You")}>
     <Image size={120} borderRadius={100} 
     source={require('../assets/cushion.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("Video")}>
     <Image size={120} borderRadius={100} 
     source={require('../assets/BlushOn.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Sunscreen.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/eyebroo.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Foundation.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Mascara.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/nail.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Consealer.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Eyeliner.jpeg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Bedak.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>
 
 
 

 </Box>
         </Stack>
     </Stack>
     
     </Box>
     </ScrollView>
     </Box>
     
);
 
};

 export default () => {
     return (
       <NativeBaseProvider>
         <ImageBackground source={require('../assets/bg.jpg')} style={{flex: 1}} >
         <Center flex={1}>
             <Home />
         </Center>
         </ImageBackground>
       </NativeBaseProvider>
     );
 };