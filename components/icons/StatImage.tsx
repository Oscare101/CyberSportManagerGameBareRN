import {Stat} from '../../constants/interfaces/iconInterfaces';
import {
  ReactionLight,
  AccuracyLight,
  SprayLight,
  FlickLight,
  NadeLight,
  AggressionLight,
  TacticsLight,
  StaminaLight,
  ReactionDark,
  AccuracyDark,
  SprayDark,
  FlickDark,
  NadeDark,
  AggressionDark,
  TacticsDark,
  StaminaDark,
} from '../../icons/stats';

export default function StatImage(props: {
  stat: Stat['value'];
  theme: 'dark' | 'light';
  size: number;
}) {
  const stats: any = {
    light: {
      reaction: <ReactionLight width={props.size} height={props.size} />,
      accuracy: <AccuracyLight width={props.size} height={props.size} />,
      spray: <SprayLight width={props.size} height={props.size} />,
      flick: <FlickLight width={props.size} height={props.size} />,
      nade: <NadeLight width={props.size} height={props.size} />,
      aggression: <AggressionLight width={props.size} height={props.size} />,
      tactic: <TacticsLight width={props.size} height={props.size} />,
      stamina: <StaminaLight width={props.size} height={props.size} />,
    },
    dark: {
      reaction: <ReactionDark width={props.size} height={props.size} />,
      accuracy: <AccuracyDark width={props.size} height={props.size} />,
      spray: <SprayDark width={props.size} height={props.size} />,
      flick: <FlickDark width={props.size} height={props.size} />,
      nade: <NadeDark width={props.size} height={props.size} />,
      aggression: <AggressionDark width={props.size} height={props.size} />,
      tactic: <TacticsDark width={props.size} height={props.size} />,
      stamina: <StaminaDark width={props.size} height={props.size} />,
    },
  };
  return stats[props.theme][props.stat];
}
