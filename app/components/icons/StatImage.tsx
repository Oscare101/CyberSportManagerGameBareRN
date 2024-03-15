import colors from '../../constants/colors';
import {Stat, Theme} from '../../constants/interfaces/iconInterfaces';
import {
  Reaction,
  Accuracy,
  Spray,
  Flick,
  Nade,
  Aggression,
  Tactics,
  Stamina,
} from '../../icons/stats';

export default function StatImage(props: {
  stat: Stat['value'];
  color: any;
  size: number;
}) {
  const stats: Record<Stat['value'], any> = {
    reaction: (
      <Reaction width={props.size} height={props.size} stroke={props.color} />
    ),
    accuracy: (
      <Accuracy width={props.size} height={props.size} stroke={props.color} />
    ),
    spray: (
      <Spray
        width={props.size}
        height={props.size}
        stroke={props.color}
        fill={props.color}
      />
    ),
    flick: (
      <Flick width={props.size} height={props.size} stroke={props.color} />
    ),
    nade: <Nade width={props.size} height={props.size} stroke={props.color} />,
    aggression: (
      <Aggression width={props.size} height={props.size} stroke={props.color} />
    ),
    tactic: (
      <Tactics width={props.size} height={props.size} stroke={props.color} />
    ),
    stamina: (
      <Stamina width={props.size} height={props.size} stroke={props.color} />
    ),
  };
  return stats[props.stat];
}
