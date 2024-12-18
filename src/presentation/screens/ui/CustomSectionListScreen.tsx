import React, { useContext } from 'react'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { Card } from '../../components/ui/Card'
import { SectionList, Text, useWindowDimensions, View } from 'react-native'
import { SubTitle } from '../../components/ui/SubTitle'
import { Separator } from '../../components/ui/Separator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../../context/ThemeContext'

interface Houses {
    title: string;
    data: string[];
  }
  
  const houses: Houses[] = [
    {
      title: 'DC Comics',
      data: [
        'Superman',
        'Batman',
        'Wonder Woman (Mujer Maravilla)',
        'The Flash (Flash)',
        'Aquaman',
        'Green Lantern (Linterna Verde)',
        'Cyborg',
        'Shazam',
        'Green Arrow (Flecha Verde)',
        'Batgirl (Batichica)',
        'Nightwing (Ala Nocturna)',
        'Supergirl',
        'Martian Manhunter (Detective Marciano)',
        'Harley Quinn',
        'Joker',
        'Catwoman (Gata Salvaje)',
        'Lex Luthor',
        'Poison Ivy (Hiedra Venenosa)',
        'Robin',
        'Deathstroke (Deathstroke el Terminator)',
      ],
    },
    {
      title: 'Marvel Comics',
      data: [
        'Spider-Man (Hombre Araña)',
        'Iron Man (Hombre de Hierro)',
        'Captain America (Capitán América)',
        'Thor',
        'Black Widow (Viuda Negra)',
        'Hulk',
        'Doctor Strange (Doctor Extraño)',
        'Black Panther (Pantera Negra)',
        'Captain Marvel (Capitana Marvel)',
        'Wolverine',
        'Deadpool',
        'Scarlet Witch (Bruja Escarlata)',
        'Ant-Man (Hombre Hormiga)',
        'Wasp (Avispa)',
        'Groot',
        'Rocket Raccoon (Mapache Cohete)',
        'Gamora',
        'Drax the Destroyer (Drax el Destructor)',
      ],
    },
    {
      title: 'Anime',
      data: [
        'Son Goku (Dragon Ball)',
        'Naruto Uzumaki (Naruto)',
        'Monkey D. Luffy (One Piece)',
        'Sailor Moon (Sailor Moon)',
        'Kenshin Himura (Rurouni Kenshin)',
        'Edward Elric (Fullmetal Alchemist)',
        'Inuyasha (Inuyasha)',
        'Sakura Kinomoto (Cardcaptor Sakura)',
        'Light Yagami (Death Note)',
        'Eren Yeager (Attack on Titan)',
        'Lelouch Lamperouge (Code Geass)',
        'Vegeta (Dragon Ball)',
        'Ichigo Kurosaki (Bleach)',
        'Kaneki Ken (Tokyo Ghoul)',
        'Gon Freecss (Hunter x Hunter)',
        'Asuka Langley Soryu (Neon Genesis Evangelion)',
        'Saitama (One Punch Man)',
        'Mikasa Ackerman (Attack on Titan)',
        'Natsu Dragneel (Fairy Tail)',
        'Usagi Tsukino (Sailor Moon)',
        'Sasuke Uchiha (Naruto)',
      ],
    },
  ];

export const CustomSectionListScreen = () => {
    const { height } =  useWindowDimensions();
    const { top } = useSafeAreaInsets();
    const { colors } = useContext(ThemeContext);
  return (
    <CustomView margin>
        <Title text='Lista de personagens' safe />

        <Card>
            <SectionList 
            style={{height: height - top - 80}}
            ListFooterComponentStyle={{backgroundColor: colors.background }}
            ListHeaderComponentStyle={{ backgroundColor: colors.background}}
            sections={houses}
            showsVerticalScrollIndicator={false}
            SectionSeparatorComponent={Separator}
            ListHeaderComponent={() => <Title text='Personagens' />}
            stickySectionHeadersEnabled
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (<Text style={{marginVertical: 2}}> { item } </Text>)}
            renderSectionHeader={({ section }) => <SubTitle text={section.title} />}
              />
        </Card>
        
    </CustomView>
  )
}