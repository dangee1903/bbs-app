import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import ReportCard from './ReportCardComponent';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Báo cáo tuần 09-2023 (27/02 - 04/03)',
    sender: 'Nguyen Tien Phuc'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Báo cáo tuần 09-2023 (27/02 - 04/03)',
    sender: 'Nguyen Tien Phuc'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Báo cáo tuần 09-2023 (27/02 - 04/03)',
    sender: 'Nguyen Tien Phuc'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d80',
    title: 'Fourth Báo cáo tuần 09-2023 (27/02 - 04/03)',
    sender: 'Nguyen Tien Phuc'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d81',
    title: 'Fifth Báo cáo tuần 09-2023 (27/02 - 04/03)',
    sender: 'Nguyen Tien Phuc'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d82',
    title: 'Sixth Báo cáo tuần 09-2023 (27/02 - 04/03)',
    sender: 'Nguyen Tien Phuc'
  },
];

type TProps = {
  // press: (event: GestureResponderEvent) => void,
  onPress: (route: string) => void
}

const ListReportCard = ({ onPress }: TProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <ReportCard title={item.title} sender={item.sender} onPress={onPress}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
    // marginTop: StatusBar.currentHeight || 0,
  }
  
});

export default ListReportCard;