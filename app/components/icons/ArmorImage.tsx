import {SvgXml} from 'react-native-svg';
import {Armor} from '../../constants/interfaces/iconInterfaces';

function KevlarIcon(color: string) {
  return `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8V8C19.9559 9.32746 30.0441 9.32746 40 8V8L39.4548 25.4469C39.1839 34.1166 33.3402 41.6171 25 44V44V44C16.6598 41.6171 10.8161 34.1166 10.5452 25.4469L10 8Z" fill=${color}/>
</svg>
`;
}

function KevlarHemletIcon(color: string) {
  return `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2392_99)">
<path d="M10 8L13 27V27C20.4153 22.6744 29.5847 22.6744 37 27V27L36.6448 23.4477C36.5485 22.4847 36.3606 21.5332 36.0836 20.606V20.606C32.7952 9.59691 17.2048 9.59691 13.9164 20.606V20.606C13.6394 21.5332 13.4515 22.4847 13.3552 23.4477L13 27L10 8V8C19.9559 9.32746 30.0441 9.32746 40 8V8L39.4548 25.4469C39.1839 34.1166 33.3402 41.6171 25 44V44V44C16.6598 41.6171 10.8161 34.1166 10.5452 25.4469L10 8Z" fill=${color}/>
</g>
<defs>
<clipPath id="clip0_2392_99">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>

`;
}

export default function ArmorImage(props: {
  armor: Armor['value'];
  color: string;
  size: number;
}) {
  const armors: Record<Armor['value'], any> = {
    kevlar: (
      <SvgXml
        xml={KevlarIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    kevlarHemlet: (
      <SvgXml
        xml={KevlarHemletIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };
  return armors[props.armor];
}
