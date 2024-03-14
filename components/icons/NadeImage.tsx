import {Image} from 'react-native';
import {Nades} from '../../constants/interfaces/iconInterfaces';

const nadesImagePath: any = {
  Smoke: require(`../../icons/nades/Smoke.png`),
  'HE Grenade': require(`../../icons/nades/HEGrenade.png`),
  'Incendiary Grenade': require(`../../icons/nades/IncendiaryGrenade.png`),
  'Flash Bang': require(`../../icons/nades/FlashBang.png`),
};

export default function NadeImage(props: {nade: Nades['value']; size: number}) {
  return (
    <Image
      source={nadesImagePath[props.nade]}
      style={{
        resizeMode: 'contain',
        width: props.size,
        height: props.size,
      }}
    />
  );
}
