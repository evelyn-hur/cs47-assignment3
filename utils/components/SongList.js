
import { FlatList, ScrollView, SafeAreaView } from "react-native";
import Song from "./Song";
import Header from "./Header";

const renderItem = ({ item, index }) => (
    <Song
    id={index+1}
    image={item.imageUrl}
    title={item.songTitle}
    album={item.albumName}
    artist={item.songArtists[0].name}
    duration={item.duration}
    />
);

const SongList = ({tracks}) => {
    return (
        <SafeAreaView>
            <Header>My Top Tracks</Header>
            <ScrollView>
                <FlatList
                data={tracks}
                renderItem={(item) => 
                    renderItem(item)}
                keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SongList;


