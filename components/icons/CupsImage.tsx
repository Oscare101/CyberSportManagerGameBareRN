import {Cup} from '../../constants/interfaces';
import {
  Winter,
  Spring,
  Summer,
  Autumn,
  WorldCupQualification,
  WorldCupChampionship,
  Major,
  Globe,
  Master,
  GrandSlam,
  Crown,
  Cyber,
  Prestige1,
  Prestige2,
  Prestige3,
} from '../../icons/cups';

export default function CupsImage(props: {cup: Cup['value']; size?: number}) {
  switch (props.cup) {
    case 'Winter':
      return <Winter width={props.size} height={props.size} />;
    case 'Spring':
      return <Spring width={props.size} height={props.size} />;
    case 'Summer':
      return <Summer width={props.size} height={props.size} />;
    case 'Autumn':
      return <Autumn width={props.size} height={props.size} />;
    case 'Prestige1':
      return <Prestige1 width={props.size} height={props.size} />;
    case 'Prestige2':
      return <Prestige2 width={props.size} height={props.size} />;
    case 'Prestige3':
      return <Prestige3 width={props.size} height={props.size} />;
    case 'Master':
      return <Master width={props.size} height={props.size} />;
    case 'Crown':
      return <Crown width={props.size} height={props.size} />;
    case 'WorldCupQualification':
      return <WorldCupQualification width={props.size} height={props.size} />;
    case 'WorldCupChampionship':
      return <WorldCupChampionship width={props.size} height={props.size} />;
    case 'Globe':
      return <Globe width={props.size} height={props.size} />;
    case 'Cyber':
      return <Cyber width={props.size} height={props.size} />;
    case 'Major':
      return <Major width={props.size} height={props.size} />;
    case 'GrandSlam':
      return <GrandSlam width={props.size} height={props.size} />;
    default:
      return <></>;
  }
}
