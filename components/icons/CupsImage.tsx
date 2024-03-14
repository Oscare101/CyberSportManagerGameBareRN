import {Cup} from '../../constants/interfaces/iconInterfaces';
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

export default function CupsImage(props: {cup: Cup['value']; size: number}) {
  const cups: Record<Cup['value'], any> = {
    Winter: <Winter width={props.size} height={props.size} />,
    Spring: <Spring width={props.size} height={props.size} />,
    Summer: <Summer width={props.size} height={props.size} />,
    Autumn: <Autumn width={props.size} height={props.size} />,
    Prestige1: <Prestige1 width={props.size} height={props.size} />,
    Prestige2: <Prestige2 width={props.size} height={props.size} />,
    Prestige3: <Prestige3 width={props.size} height={props.size} />,
    Master: <Master width={props.size} height={props.size} />,
    Crown: <Crown width={props.size} height={props.size} />,
    WorldCupQualification: (
      <WorldCupQualification width={props.size} height={props.size} />
    ),
    WorldCupChampionship: (
      <WorldCupChampionship width={props.size} height={props.size} />
    ),
    Globe: <Globe width={props.size} height={props.size} />,
    Cyber: <Cyber width={props.size} height={props.size} />,
    Major: <Major width={props.size} height={props.size} />,
    GrandSlam: <GrandSlam width={props.size} height={props.size} />,
  };

  return cups[props.cup];
}
