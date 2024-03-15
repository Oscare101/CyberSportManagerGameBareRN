import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  center: {alignItems: 'center', justifyContent: 'center'},
  rowBetween: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  columnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnEnd: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
