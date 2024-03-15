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
  color: 'green' | 'lightGreen' | 'yellow' | 'orange' | 'red';
  theme: Theme['value'];
  size: number;
}) {
  const stats: Record<Stat['value'], any> = {
    reaction: (
      <Reaction
        width={props.size}
        height={props.size}
        stroke={colors[props.theme][props.color]?.main}
      />
    ),
    accuracy: (
      <Accuracy
        width={props.size}
        height={props.size}
        stroke={colors[props.theme][props.color]?.main}
      />
    ),
    spray: (
      <Spray
        width={props.size}
        height={props.size}
        stroke={colors[props.theme][props.color]?.main}
        fill={colors[props.theme][props.color]?.main}
      />
    ),
    flick: (
      <Flick
        width={props.size}
        height={props.size}
        stroke={colors[props.theme][props.color]?.main}
      />
    ),
    nade: (
      <Nade
        width={props.size}
        height={props.size}
        stroke={colors[props.theme][props.color]?.main}
      />
    ),
    aggression: (
      <Aggression
        width={props.size}
        height={props.size}
        stroke={colors[props.theme][props.color]?.main}
      />
    ),
    tactic: (
      <Tactics
        width={props.size}
        height={props.size}
        stroke={colors[props.theme][props.color]?.main}
      />
    ),
    stamina: (
      <Stamina
        width={props.size}
        height={props.size}
        stroke={colors[props.theme][props.color]?.main}
      />
    ),
  };
  return stats[props.stat];
}
