import {Armor} from '../../constants/interfaces/iconInterfaces';
import {
  KevlarDark,
  KevlarHemletDark,
  KevlarHemletLight,
  KevlarLight,
} from '../../icons/armor';

export default function ArmorImage(props: {
  armor: Armor['value'];
  theme: 'dark' | 'light';
  size: number;
}) {
  const stats: any = {
    light: {
      kevlar: <KevlarLight width={props.size} height={props.size} />,
      kevlarHemlet: (
        <KevlarHemletLight width={props.size} height={props.size} />
      ),
    },
    dark: {
      kevlar: <KevlarDark width={props.size} height={props.size} />,
      kevlarHemlet: <KevlarHemletDark width={props.size} height={props.size} />,
    },
  };
  return stats[props.theme][props.armor];
}
