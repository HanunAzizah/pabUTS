import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

import datas from '../datas'; 

function NewsDetail({ route }) {
  const { id } = route.params;

  // Cari objek berita yang sesuai dengan ID
  // const selectedNews = datas.find((news) => news.id === id);

  return (
    <>
      <>
      
       <Box>
      <Box
          p={"4"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
          rounded="xl"
          
        >
          
          
          <Box flex={1} mr={"4"} rounded="xl">
            <Image
              source={{ uri: item.image }}
              w="full"
              h="full"
              alt="Image Data"
            />
            
          </Box>

          
          <Box flex={1.8} rounded="xl">
            
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading>
            <Text fontSize={"sm"}>{item.recentText}</Text>
          </Box>
          
          
        </Box>
        
        </Box>
        
        
       </>
    {/* ); */}
  {/* }; */}

  return (
    <>
      <ImageBackground source={require('../assets/bg.jpg')}/>
      
      <ImageBackground source={require('../assets/bg.jpg')}>
      <Box alignItems="center" rounded="xl"> 
      
      <Box flex={1}  flexDirection='column' safeArea rounded="xl">
      
      <HStack padding={4} w='100%' alignItems='center' justifyContent='space-between'>
        <Box rounded="xl">

        <Pressable
           onPress={() => navigation.navigate("Home")}>
            <Icon
            as={AntDesign}
            name='left'
            size={7}
            color='#000'
            safeArea
            />
            <Text>Detail Produk</Text>
          </Pressable>
          
        </Box>
      
      </HStack>
       </Box>
            <Box rounded="xl">
              
       
          <AspectRatio w="100%" ratio={12 / 9}>
          
          <Center flex={2} marginTop={5}>
          
                <Heading color='white' >Kategori</Heading>
                <Text color='white'>ini adalah cushion</Text>
                <Stack space={4} w="75%" maxW="300px" mx="auto">
               
                  <Input variant="rounded" marginTop='5' placeholder="Cari cushion" backgroundColor='white' ftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                  
                </Stack>
                
                <VStack my="4" space={5} w="100%" maxW="300px" >
                
        

      
                </VStack>

            </Center>
            
          </AspectRatio>
          
          
            </Box>
            
            </Box>
            
            </ImageBackground>
            
      


    
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Button size='md' bg='#FED756'>
        Tambah Produk
      </Button>
      
      

    </>
  );
{/* }; */}

{/* export default ForYou; */}
    </>
  );
}

export default NewsDetail;

// import { Heading, Center, Text } from "native-base";
// import { Header } from "../components";

// const NewsDetail = ({ route }) => {
//     // Get the params
//     const params = route.params.item;
//         return (
//             <>
//                 <Header title={"News"} withBack="true" />
//                 <Center flex={1} p={"4"}>
//                     <Heading>News Detail</Heading>
//                     <Text textAlign={"center"}>{params.title}</Text>
//                 </Center>
//             </>
//         );
// };

// export default NewsDetail;