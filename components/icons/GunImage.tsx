import {Image} from 'react-native';
import {Guns} from '../../constants/interfaces/iconInterfaces';

const gunsImagePath: any = {
  'Desert Eagle': require(`../../icons/guns/Desert Eagle.png`),
  'R8 Revolver': require(`../../icons/guns/R8 Revolver.png`),
  'Five-SeveN': require(`../../icons/guns/Five-SeveN.png`),
  'Tec-9': require(`../../icons/guns/Tec-9.png`),
  'CZ75-Auto': require(`../../icons/guns/CZ75-Auto.png`),
  'Dual Berettas': require(`../../icons/guns/Dual Berettas.png`),
  P250: require(`../../icons/guns/P250.png`),
  'Glock-18': require(`../../icons/guns/Glock-18.png`),
  P2000: require(`../../icons/guns/P2000.png`),
  'USP-S': require(`../../icons/guns/USP-S.png`),
  Galil: require(`../../icons/guns/Galil.png`),
  'AK-47': require(`../../icons/guns/AK-47.png`),
  'M4A1-S': require(`../../icons/guns/M4A1-S.png`),
  M4A4: require(`../../icons/guns/M4A4.png`),
  'SG 553': require(`../../icons/guns/SG 553.png`),
  AUG: require(`../../icons/guns/AUG.png`),
  FAMAS: require(`../../icons/guns/FAMAS.png`),
  AWP: require(`../../icons/guns/AWP.png`),
  G3SG1: require(`../../icons/guns/G3SG1.png`),
  'SSG 08': require(`../../icons/guns/SSG 08.png`),
  'SCAR-20': require(`../../icons/guns/SCAR-20.png`),
};

export default function GunImage(props: {gun: Guns['value']; size: number}) {
  return (
    <Image
      source={gunsImagePath[props.gun]}
      style={{
        resizeMode: 'contain',
        width: props.size,
        height: props.size,
      }}
    />
  );
}
