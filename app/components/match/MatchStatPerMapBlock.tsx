import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {MapResult} from '../../constants/interfaces/matchInterfaces';
import colors from '../../constants/colors';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';

interface MatchStatProps {
  mapsResults: MapResult[];
  mapsResultsToShow: number;
  setMapsResultsToShow: any;
}

const width = Dimensions.get('screen').width;

export default function MatchStatPerMapBlock(props: MatchStatProps) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const dataTorender: string[] = [
    'All maps',
    ...props.mapsResults.map(
      (map: MapResult) => `${map.team1Score}-${map.team2Score}`,
    ),
  ];
  return (
    <View
      style={{
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors[themeColor].card,
        borderRadius: width * 0.02,
        padding: '1%',
        margin: width * 0.005,
        height: width * 0.08,
      }}>
      {dataTorender.map((item: string, index: number) => (
        <TouchableOpacity
          key={index}
          style={{
            width: `${100 / (props.mapsResults.length + 1)}%`,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              index === props.mapsResultsToShow
                ? colors[themeColor].bg
                : '#00000000',
            borderRadius: width * 0.01,
            height: '100%',
          }}
          activeOpacity={0.8}
          onPress={() => {
            props.setMapsResultsToShow(index);
          }}>
          <Text
            style={{
              fontSize: width * 0.04,
              color:
                index === props.mapsResultsToShow
                  ? colors[themeColor].main
                  : colors[themeColor].comment,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
