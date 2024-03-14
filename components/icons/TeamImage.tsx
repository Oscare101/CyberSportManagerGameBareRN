import {Teams} from '../../constants/interfaces';
import {
  IslandTeam,
  JupiterTeam,
  NOVATeam,
  QuazarsTeam,
  SolidTeam,
  VangardTeam,
  EaglesTeam,
  KadaganTeam,
  YouthTeam,
  UniversityTeam,
  CanoeTeam,
  MoonTeam,
  DreamTeam,
  FiveTeam,
  SempraTeam,
  GuardiansTeam,
} from '../../icons/teams';

export default function TeamImage(props: {
  team: Teams['value'];
  size?: number;
}) {
  const teams: any = {
    NOVA: <NOVATeam width={props.size} height={props.size} />,
    Quazars: <QuazarsTeam width={props.size} height={props.size} />,
    Eagles: <EaglesTeam width={props.size} height={props.size} />,
    Vangard: <VangardTeam width={props.size} height={props.size} />,
    Island: <IslandTeam width={props.size} height={props.size} />,
    Solid: <SolidTeam width={props.size} height={props.size} />,
    Kadagan: <KadaganTeam width={props.size} height={props.size} />,
    Jupiter: <JupiterTeam width={props.size} height={props.size} />,
    Youth: <YouthTeam width={props.size} height={props.size} />,
    Guardians: <GuardiansTeam width={props.size} height={props.size} />,
    University: <UniversityTeam width={props.size} height={props.size} />,
    Canoe: <CanoeTeam width={props.size} height={props.size} />,
    Dream: <DreamTeam width={props.size} height={props.size} />,
    Sempra: <SempraTeam width={props.size} height={props.size} />,
    Five: <FiveTeam width={props.size} height={props.size} />,
    Moon: <MoonTeam width={props.size} height={props.size} />,
  };
  return teams[props.team];
}
