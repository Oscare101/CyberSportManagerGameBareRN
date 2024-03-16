import {
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import colors from '../../constants/colors';
import InfoModal from './InfoModal';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;

interface BottomModalBlockProps {
  bottomSheetModalRef: any;
  snapPoints: any;
  dismiss: any;
  content: string;
  data?: any;
  setData?: any;
}

export default function BottomModalBlock(props: BottomModalBlockProps) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const contentData: any = {
    Info: <InfoModal date={props.data} />,
  };

  return (
    <BottomSheetModal
      handleIndicatorStyle={{
        backgroundColor: colors[themeColor].comment,
      }}
      handleStyle={{
        backgroundColor: colors[themeColor].card,
        flex: 1,
        borderTopRightRadius: width * 0.05,
        borderTopLeftRadius: width * 0.05,
      }}
      ref={props.bottomSheetModalRef}
      snapPoints={props.snapPoints}
      backdropComponent={({style}) => (
        <TouchableWithoutFeedback onPress={props.dismiss}>
          <View
            style={[
              style,
              {
                backgroundColor: '#00000066',
              },
            ]}></View>
        </TouchableWithoutFeedback>
      )}>
      <View
        style={{
          backgroundColor: colors[themeColor].card,
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        {contentData['Info']}
      </View>
    </BottomSheetModal>
  );
}
