import {Armor, Theme} from '../../constants/interfaces/iconInterfaces';
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
  const armors: Record<Theme['value'], Record<Armor['value'], any>> = {
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
  return armors[props.theme][props.armor];
}
