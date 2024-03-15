import {IconName, Theme} from '../../constants/interfaces/iconInterfaces';
import {
  BackDark,
  BackLight,
  GridDark,
  GridLight,
  PracticeDark,
  PracticeLight,
  HalfStarDark,
  HalfStarLight,
  SettingsDark,
  SettingsLight,
  ArchiveLight,
  ArchiveDark,
  PeopleDark,
  PersonAddDark,
  PeopleLight,
  PersonAddLight,
} from '../../icons/icons';

export default function Icon(props: {
  icon: IconName['value'];
  size: number;
  theme: Theme['value'];
}) {
  const icons: Record<Theme['value'], Record<IconName['value'], any>> = {
    light: {
      back: <BackLight width={props.size} height={props.size} />,
      grid: <GridLight width={props.size} height={props.size} />,
      practice: <PracticeLight width={props.size} height={props.size} />,
      halfStar: <HalfStarLight width={props.size} height={props.size} />,
      settings: <SettingsLight width={props.size} height={props.size} />,
      archive: <ArchiveLight width={props.size} height={props.size} />,
      people: <PeopleLight width={props.size} height={props.size} />,
      personAdd: <PersonAddLight width={props.size} height={props.size} />,
    },
    dark: {
      back: <BackDark width={props.size} height={props.size} />,
      grid: <GridDark width={props.size} height={props.size} />,
      practice: <PracticeDark width={props.size} height={props.size} />,
      halfStar: <HalfStarDark width={props.size} height={props.size} />,
      settings: <SettingsDark width={props.size} height={props.size} />,
      archive: <ArchiveDark width={props.size} height={props.size} />,
      people: <PeopleDark width={props.size} height={props.size} />,
      personAdd: <PersonAddDark width={props.size} height={props.size} />,
    },
  };

  return icons[props.theme][props.icon];
}