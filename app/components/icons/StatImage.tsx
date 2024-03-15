import {Stat} from '../../constants/interfaces/iconInterfaces';
import {SvgXml} from 'react-native-svg';

function ReactionIcon(color: string) {
  return `
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="2" fill=${color}/>
<path d="M35.5 15L24 24" stroke=${color} stroke-linecap="round"/>
<path d="M35.5 15L25.5 24" stroke=${color} stroke-linecap="round"/>
<path d="M35.5 15L26.5 24" stroke=${color} stroke-linecap="round"/>
<path d="M35.5 15L26 26" stroke=${color} stroke-linecap="round"/>
<path d="M24.9999 7.9878V7.9878C15.6111 7.9878 7.99998 15.6051 7.99998 24.9939V24.9939C7.99998 34.3827 15.6111 42 25 42V42C34.3888 42 41.9999 34.3889 42 25.0001L42 24.7009C42 21.006 40.7684 17.4166 38.4999 14.5V14.5" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<path d="M25 8V16" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<circle cx="25" cy="25" r="2" fill=${color}/>
<path d="M35.5 15L24 24" stroke=${color} stroke-linecap="round"/>
<path d="M35.5 15L25.5 24" stroke=${color} stroke-linecap="round"/>
<path d="M35.5 15L26.5 24" stroke=${color} stroke-linecap="round"/>
<path d="M35.5 15L26 26" stroke=${color} stroke-linecap="round"/>
<path d="M24.9999 7.9878V7.9878C15.6111 7.9878 7.99998 15.6051 7.99998 24.9939V24.9939C7.99998 34.3827 15.6111 42 25 42V42C34.3888 42 41.9999 34.3889 42 25.0001L42 24.7009C42 21.006 40.7684 17.4166 38.4999 14.5V14.5" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<path d="M25 8V16" stroke=${color} stroke-width="2" stroke-linecap="round"/>
</svg>
`;
}

function AccuracyIcon(color: string) {
  return `
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="5" fill=${color}/>
<rect x="35" y="24" width="12" height="2" rx="1" fill=${color}/>
<rect x="3" y="24" width="12" height="2" rx="1" fill=${color}/>
<rect x="24" y="47" width="12" height="2" rx="1" transform="rotate(-90 24 47)" fill=${color}/>
<rect x="24" y="15" width="12" height="2" rx="1" transform="rotate(-90 24 15)" fill=${color}/>
<path d="M28.9999 8.50003V8.50003C35.3368 9.70702 40.293 14.6631 41.5 21V21" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<path d="M8.49987 21V21C9.70696 14.6632 14.6631 9.70701 20.9998 8.49998V8.49998" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<path d="M41.5002 29V29C40.2931 35.3368 35.3369 40.293 29.0001 41.5V41.5" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<path d="M21.0002 41.5V41.5C14.6633 40.293 9.70704 35.3368 8.50006 29V29" stroke=${color} stroke-width="2" stroke-linecap="round"/>
</svg>

`;
}

function FlicksIcon(color: string) {
  return `
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="8" width="20" height="34" rx="10" stroke=${color} stroke-width="2"/>
<rect x="23" y="14" width="4" height="8" rx="2" stroke=${color} stroke-width="2"/>
<path d="M24.5 38.5L23.8479 38.3221C20.9279 37.5258 18.8012 35.0116 18.5 32V32" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<path d="M2.75718 25.6178C2.47227 25.2552 2.47227 24.7448 2.75718 24.3822L9.21368 16.1648C9.80041 15.4181 11 15.833 11 16.7826V33.2174C11 34.167 9.80041 34.5819 9.21368 33.8352L2.75718 25.6178Z" stroke=${color} stroke-width="2"/>
<path d="M47.2428 24.3822C47.5277 24.7448 47.5277 25.2552 47.2428 25.6178L40.7863 33.8352C40.1996 34.5819 39 34.167 39 33.2174V16.7826C39 15.833 40.1996 15.4181 40.7863 16.1648L47.2428 24.3822Z" stroke=${color} stroke-width="2"/>
</svg>

`;
}

function SprayIcon(color: string) {
  return `
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23.25" cy="44.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="23.75" cy="43.75" r="1.25" fill=${color} stroke=${color}/>
<circle cx="23.75" cy="40.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="24.25" cy="34.75" r="1.25" fill=${color} stroke=${color}/>
<circle cx="24.25" cy="29.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="22.25" cy="23.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="20.75" cy="18.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="18.25" cy="14.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="21.25" cy="11.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="29.25" cy="12.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="30.25" cy="9.75" r="1.25" fill=${color} stroke=${color}/>
<circle cx="31.75" cy="9.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="32.75" cy="11.75" r="1.25" fill=${color} stroke=${color}/>
<circle cx="32.75" cy="9.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="33.75" cy="9.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="35.75" cy="9.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="38.25" cy="9.75" r="1.25" fill=${color} stroke=${color}/>
<circle cx="38.25" cy="10.75" r="1.25" fill=${color} stroke=${color}/>
<circle cx="28.25" cy="7.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="25.25" cy="6.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="24.75" cy="6.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="20.75" cy="6.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="19.75" cy="5.75" r="1.25" fill=${color} stroke=${color}/>
<circle cx="18.75" cy="5.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="18.75" cy="6.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="17.75" cy="8.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="17.25" cy="7.75" r="1.25" fill=${color} stroke=${color}/>
<circle cx="14.25" cy="8.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="16.25" cy="6.25" r="1.25" fill=${color} stroke=${color}/>
<circle cx="15.75" cy="5.75" r="1.25" fill=${color} stroke=${color}/>
</svg>

`;
}

function NadeIcon(color: string) {
  return `
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.4043 6H28.7872L35.8085 8.53333V11.0667H32.617L31.3404 18.0333L30.7021 21.2L33.5688 22.419C34.6267 22.8689 35.5894 23.516 36.4055 24.3257L36.6351 24.5535C37.7607 25.6704 38.529 27.0966 38.8423 28.651V28.651C38.9472 29.1713 39 29.7007 39 30.2314V31.0167C39 32.0696 38.8952 33.1199 38.6871 34.1521L38.5707 34.7298C38.4317 35.4196 38.2293 36.0951 37.9662 36.7477V36.7477C37.3849 38.1897 36.5159 39.4981 35.4123 40.5931L35.0726 40.9302C34.7126 41.2874 34.3277 41.6186 33.9209 41.9214L33.7971 42.0135C32.5999 42.9044 31.2192 43.5174 29.7554 43.8079V43.8079C29.1115 43.9356 28.4566 44 27.8002 44H23.7799C22.4459 44 21.1204 43.7865 19.8539 43.3676V43.3676C18.5836 42.9475 17.3885 42.3258 16.3152 41.5271V41.5271C15.6953 41.0657 15.1191 40.5477 14.5947 39.9801L13.0426 38.3L19.2128 19.9333L23.0426 20.2023L24.3191 16.7667L22.4043 16.1333L19.2128 19.9333L12.1915 40.8333V42.1H10.9149L9 40.8333L12.1915 23.1L22.4043 6Z" fill="${color}" />
    <path d="M21.7439 11.9123C21.3468 13.2175 20.6403 14.27 19.8444 14.9235C19.0452 15.5796 18.2075 15.7995 17.4928 15.5821C16.7782 15.3646 16.2048 14.7155 15.9065 13.7254C15.6094 12.7394 15.6088 11.4718 16.0059 10.1665C16.403 8.86129 17.1095 7.80882 17.9054 7.15534C18.7046 6.49918 19.5423 6.27933 20.257 6.49676C20.9716 6.71418 21.545 7.36335 21.8433 8.3534C22.1404 9.33943 22.141 10.607 21.7439 11.9123Z" stroke="${color}"/>
  </svg>
`;
}

function TacticsIcon(color: string) {
  return `
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2365_1539)">
<path d="M38.6132 22V22C41.8142 23.8532 40.9337 28.6966 37.2853 29.3047L36.1131 29.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M40.1132 28.5V28.5C41.4333 30.6123 40.5789 33.4041 38.3027 34.4157L38.1131 34.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M38.1132 34.5V34.5C38.6814 37.0569 37.2248 39.6295 34.7399 40.4577L34.6132 40.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M29.1131 30L29.5141 30C32.152 30 34.1305 32.4133 33.6131 35V35" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M30.6131 39.5V39.5C30.3546 36.9152 32.5284 34.7415 35.1132 35V35" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M25 37.5V37.5C25.6386 35.9036 26.9036 34.6386 28.5001 34V34" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M25.0001 20.5L25.123 20.3156C25.6914 19.4629 26.5278 18.8241 27.5 18.5V18.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M22.6405 16.3368L23.0107 16.4688C23.9508 16.8041 24.6844 17.5532 25.0001 18.5V18.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M34.1132 27.5L33.628 27.4191C32.1142 27.1668 30.9141 26.0048 30.6132 24.5V24.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M35.1131 20V20C35.1131 23.6715 30.8963 25.7425 27.9908 23.498L27.6131 23.2063" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M34.6131 40.5V40.5C32.7326 43.7909 28.0869 44.0551 25.8454 40.9986L25.1132 40" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M25.1131 9.50001V9.50001C26.6275 8.28848 28.7212 8.10441 30.4238 9.03312L33.1131 10.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M29.6132 12.5V12.5C31.3213 9.17362 36.3725 10.8357 35.7716 14.5264L35.6132 15.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M30.6132 20.5L31.2425 18.4547C31.9714 16.0856 34.6071 14.8862 36.8722 15.8929L37.044 15.9693C39.3829 17.0088 40.1488 19.9525 38.6131 22V22" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.4999 22V22C8.29888 23.8532 9.17934 28.6966 12.8278 29.3047L13.9999 29.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M9.99988 28.5V28.5C8.67974 30.6123 9.53416 33.4041 11.8104 34.4157L12 34.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.9999 34.5V34.5C11.4317 37.0569 12.8883 39.6295 15.3731 40.4577L15.4999 40.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M21.9999 30L21.5989 30C18.961 30 16.9826 32.4133 17.4999 35V35" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M20.4999 39.5V39.5C20.7584 36.9152 18.5847 34.7415 15.9999 35V35" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.9998 27.5L15.485 27.4191C16.9988 27.1668 18.1989 26.0048 18.4999 24.5V24.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.9999 20V20C13.9999 23.6715 18.2167 25.7425 21.1223 23.498L21.4999 23.2063" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M15.4999 40.5V40.5C17.3804 43.7909 22.0262 44.0551 24.2676 40.9986L24.9999 40" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M25 9.50001V9.50001C23.4855 8.28848 21.3918 8.10441 19.6892 9.03312L16.9999 10.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M20.4998 12.5V12.5C18.7917 9.17362 13.7406 10.8357 14.3414 14.5264L14.4999 15.5" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M19.4999 20.5L18.8706 18.4547C18.1416 16.0856 15.5059 14.8862 13.2409 15.8929L13.069 15.9693C10.7302 17.0088 9.96428 19.9525 11.4999 22V22" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M25 9.00001L25 40" stroke=${color} stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_2365_1539">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>

`;
}

function AggressionIcon(color: string) {
  return `
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 20.5V20.5C15.7916 20.5 17.3821 21.6464 17.9487 23.3461L18 23.5L18.408 23.092C20.0411 21.4589 20.8168 19.1563 20.5047 16.8679L20.4189 16.2384C19.8889 12.352 22.2511 8.65351 26 7.5V7.5L25.6777 8.89644C24.9538 12.0336 26.0322 15.3133 28.4767 17.4086V17.4086C30.4405 19.0919 31.8138 21.3597 32.3954 23.8799L33 26.5V26.5C34.2257 25.8871 35 24.6343 35 23.2639V22L36.892 27.2029C39.1245 33.3423 35.7496 40.0979 29.5 42V42V42C32.1649 39.9273 33.1366 36.3414 31.8827 33.2069L31 31L30 34L29.3147 30.916C29.1127 30.0073 28.5676 29.2117 27.7931 28.6954V28.6954C25.8083 27.3722 24.8411 24.965 25.3586 22.6364L25.5 22V22C23.1638 22.8761 21.7513 25.2591 22.1042 27.7291L22.2231 28.5619C22.3974 29.782 21.9871 31.0129 21.1157 31.8843L21 32V32C20.6922 30.769 19.731 29.8078 18.5 29.5V29.5V29.5C18.8213 30.1427 18.8873 30.8833 18.6845 31.5726L17.9108 34.2032C17.0624 37.0878 18.0946 40.1959 20.5 42V42V42C14.5593 40.6498 11.0161 34.5381 12.7964 28.7119L14.5867 22.8525C14.8411 22.0202 14.6154 21.1154 14 20.5V20.5Z" fill=${color}/>
</svg>
`;
}

function StaminaIcon(color: string) {
  return `
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.378 28.5C11.4922 28.5 11.0438 27.4335 11.6633 26.8005L31.7341 6.29344C32.1968 5.82063 33 6.14827 33 6.80985V6.80985C33 6.93458 32.9684 7.05728 32.9081 7.1665L25.8183 20.0169C25.4505 20.6834 25.9326 21.5 26.6938 21.5H37.5144C38.4151 21.5 38.8567 22.5976 38.2069 23.2214L16.7541 43.8161C16.215 44.3336 15.3303 43.8485 15.4769 43.1157V43.1157C15.4922 43.039 15.5192 42.9651 15.557 42.8967L22.6817 29.9831C23.0495 29.3166 22.5674 28.5 21.8062 28.5H12.378Z" fill=${color}/>
</svg>

`;
}

export default function StatImage(props: {
  stat: Stat['value'];
  color: any;
  size: number;
}) {
  const stats: Record<Stat['value'], any> = {
    reaction: (
      <SvgXml
        xml={ReactionIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    accuracy: (
      <SvgXml
        xml={AccuracyIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    spray: (
      <SvgXml
        xml={SprayIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    flick: (
      <SvgXml
        xml={FlicksIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    nade: (
      <SvgXml
        xml={NadeIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    aggression: (
      <SvgXml
        xml={AggressionIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    tactic: (
      <SvgXml
        xml={TacticsIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    stamina: (
      <SvgXml
        xml={StaminaIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };
  return stats[props.stat];
}
