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
import PracticeModal from './PracticeModal';
import PlayerRoleChangeModal from './PlayerRoleChangeModal';
import PlayerContractModal from './PlayerContractModal';
import PlayerStatusModal from './PlayerStatusModal';
import TransferModal from './TransferModal';

const width = Dimensions.get('screen').width;

interface BottomModalBlockProps {
  bottomSheetModalRef: any;
  snapPoints: any;
  dismiss: any;
  data: any;
  setData?: any;
  onChange?: any;
}

export default function BottomModalBlock(props: BottomModalBlockProps) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const contentData: any = {
    Info: <InfoModal date={props.data.item} />,
    Practice: <PracticeModal />,
    Role: <PlayerRoleChangeModal playerName={props.data.item} />,
    Contract: <PlayerContractModal playerName={props.data.item} />,
    Status: <PlayerStatusModal playerName={props.data.item} />,
    Transfer: <TransferModal player={props.data.item} />,
  };

  return (
    <BottomSheetModal
      handleIndicatorStyle={{
        backgroundColor: colors[themeColor].comment,
      }}
      backgroundStyle={{
        backgroundColor: colors[themeColor].card,
      }}
      onChange={props.onChange}
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
            ]}>
            <StatusBar
              barStyle={
                themeColor === 'light' ? 'dark-content' : 'light-content'
              }
              backgroundColor={colors[themeColor].shadow}
            />
          </View>
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
        {contentData[props.data.screen]}
      </View>
    </BottomSheetModal>
  );
}
