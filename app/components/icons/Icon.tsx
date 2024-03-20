import {SvgXml} from 'react-native-svg';
import {IconName} from '../../constants/interfaces/iconInterfaces';

function BackIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M328 112L184 256L328 400" stroke=${color} stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
}

function GridIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M204 48H68C56.9543 48 48 56.9543 48 68V204C48 215.046 56.9543 224 68 224H204C215.046 224 224 215.046 224 204V68C224 56.9543 215.046 48 204 48Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M444 48H308C296.954 48 288 56.9543 288 68V204C288 215.046 296.954 224 308 224H444C455.046 224 464 215.046 464 204V68C464 56.9543 455.046 48 444 48Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M204 288H68C56.9543 288 48 296.954 48 308V444C48 455.046 56.9543 464 68 464H204C215.046 464 224 455.046 224 444V308C224 296.954 215.046 288 204 288Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M444 288H308C296.954 288 288 296.954 288 308V444C288 455.046 296.954 464 308 464H444C455.046 464 464 455.046 464 444V308C464 296.954 455.046 288 444 288Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
}

function PracticeIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 192L256 64L480 192L256 320L32 192Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112 240V368L256 448M256 448L400 368V240M256 448V320M480 368V192" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
}

function HalfStarIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M496 203.3H312.36L256 32L199.64 203.3H16L166.21 308.7L107.71 480L256 373.84L404.29 480L345.68 308.7L496 203.3ZM274.63 347.82L256 334.49V134.39L282 213.3L289.24 235.3H394.63L327.31 282.5L307.62 296.31L315.4 319.06L341.66 395.81L274.63 347.82Z" fill=${color}/>
</svg>

`;
}

function SettingsIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M456.7 242.27L430.62 238.07C428.936 237.787 427.387 236.972 426.2 235.745C425.012 234.517 424.248 232.942 424.02 231.25C423.52 228.05 423.02 224.84 422.32 221.74C421.982 220.076 422.176 218.347 422.877 216.8C423.577 215.252 424.747 213.965 426.22 213.12L449.31 200.3C451.058 199.406 452.419 197.905 453.137 196.078C453.855 194.251 453.881 192.225 453.21 190.38L449.21 179.38C448.541 177.53 447.209 175.995 445.472 175.071C443.736 174.147 441.718 173.901 439.81 174.38L413.92 179.38C412.237 179.706 410.494 179.482 408.947 178.742C407.4 178.002 406.133 176.785 405.33 175.27C403.83 172.47 402.23 169.667 400.53 166.86C399.633 165.401 399.217 163.696 399.343 161.987C399.468 160.278 400.129 158.653 401.23 157.34L418.52 137.4C419.861 135.973 420.632 134.104 420.688 132.147C420.743 130.19 420.078 128.28 418.82 126.78L411.33 117.78C410.082 116.267 408.314 115.273 406.372 114.994C404.43 114.714 402.454 115.17 400.83 116.27L378.14 129.9C376.682 130.764 374.986 131.143 373.298 130.981C371.611 130.82 370.018 130.126 368.75 129C366.35 126.89 363.85 124.79 361.35 122.78C360.02 121.724 359.061 120.271 358.612 118.634C358.162 116.996 358.246 115.257 358.85 113.67L368.25 88.9201C369.05 87.1245 369.161 85.0972 368.561 83.2251C367.962 81.353 366.694 79.7672 365 78.7701L354.8 72.8601C353.098 71.8935 351.1 71.5845 349.185 71.9918C347.271 72.3991 345.572 73.4943 344.41 75.0701L327.77 95.9101C326.841 97.2217 325.496 98.1818 323.954 98.6354C322.412 99.089 320.762 99.0096 319.27 98.4101C319.27 98.4101 313.67 96.1101 309.47 94.7001C307.859 94.1633 306.461 93.1278 305.478 91.7435C304.494 90.3592 303.977 88.698 304 87.0001L304.4 60.5501C304.518 58.5828 303.912 56.6404 302.696 55.0893C301.48 53.5382 299.739 52.4856 297.8 52.1301L286.21 50.1301C284.27 49.7941 282.274 50.179 280.598 51.2122C278.922 52.2455 277.681 53.8559 277.11 55.7401L268.51 80.7901C267.958 82.4048 266.905 83.8007 265.503 84.774C264.102 85.7473 262.426 86.247 260.72 86.2001H250.92C249.217 86.2361 247.546 85.7321 246.146 84.7603C244.747 83.7885 243.691 82.3987 243.13 80.7901L234.53 55.7401C233.959 53.8559 232.718 52.2455 231.042 51.2122C229.366 50.179 227.37 49.7941 225.43 50.1301L213.84 52.1301C211.902 52.4856 210.16 53.5382 208.944 55.0893C207.729 56.6404 207.122 58.5828 207.24 60.5501L207.64 87.0001C207.664 88.7021 207.145 90.3675 206.158 91.7541C205.17 93.1407 203.766 94.1762 202.15 94.7101C199.85 95.6101 194.85 97.5201 192.45 98.4201C189.65 99.4201 186.35 98.6201 183.65 95.5101L167.14 75.1701C165.973 73.6009 164.271 72.5137 162.357 72.1139C160.442 71.714 158.448 72.0293 156.75 73.0001L146.55 78.9101C144.852 79.8882 143.575 81.4598 142.966 83.3225C142.357 85.1853 142.458 87.2075 143.25 89.0001L152.65 113.75C153.245 115.339 153.324 117.074 152.875 118.71C152.426 120.345 151.472 121.798 150.15 122.86C147.65 124.86 145.15 126.97 142.75 129.08C141.482 130.206 139.89 130.9 138.202 131.061C136.514 131.223 134.819 130.844 133.36 129.98L111 116.14C109.368 115.066 107.398 114.626 105.464 114.905C103.529 115.183 101.764 116.159 100.5 117.65L93.0101 126.65C91.7518 128.15 91.0874 130.06 91.1427 132.017C91.198 133.974 91.9691 135.843 93.3101 137.27L110.6 157.21C111.724 158.511 112.399 160.14 112.526 161.854C112.652 163.569 112.222 165.279 111.3 166.73C109.6 169.397 108 172.2 106.5 175.14C105.685 176.643 104.415 177.85 102.872 178.589C101.329 179.327 99.5924 179.558 97.9101 179.25L72.0201 174.25C70.1127 173.785 68.1009 174.037 66.3675 174.959C64.6342 175.881 63.3004 177.408 62.6201 179.25L58.6201 190.25C57.9489 192.095 57.9748 194.121 58.6931 195.948C59.4113 197.775 60.7723 199.276 62.5201 200.17L85.5801 213C87.069 213.828 88.2519 215.114 88.9542 216.666C89.6565 218.218 89.8409 219.955 89.4801 221.62C88.8801 224.82 88.2801 227.93 87.7801 231.13C87.54 232.818 86.7724 234.386 85.5869 235.611C84.4015 236.836 82.859 237.655 81.1801 237.95L55.1001 242.15C53.1593 242.389 51.3708 243.323 50.0655 244.779C48.7603 246.235 48.0265 248.115 48.0001 250.07V261.79C47.9759 263.76 48.6921 265.667 50.0069 267.134C51.3218 268.6 53.1395 269.52 55.1001 269.71L81.1801 273.91C82.8641 274.194 84.4131 275.009 85.6007 276.236C86.7882 277.463 87.5519 279.038 87.7801 280.73C88.2801 283.93 88.7801 287.14 89.4801 290.24C89.8185 291.904 89.6238 293.633 88.9237 295.181C88.2236 296.728 87.0537 298.016 85.5801 298.86L62.4901 311.7C60.7423 312.594 59.3813 314.095 58.6631 315.922C57.9448 317.749 57.9189 319.775 58.5901 321.62L62.5901 332.62C63.2593 334.47 64.5912 336.005 66.3279 336.929C68.0645 337.853 70.0823 338.099 71.9901 337.62L97.8801 332.62C99.5633 332.294 101.307 332.518 102.853 333.258C104.4 333.998 105.668 335.215 106.47 336.73C107.97 339.53 109.57 342.333 111.27 345.14C112.168 346.6 112.583 348.304 112.457 350.013C112.332 351.722 111.671 353.348 110.57 354.66L93.2801 374.62C91.9391 376.047 91.168 377.916 91.1127 379.873C91.0574 381.83 91.7218 383.74 92.9801 385.24L100.47 394.24C101.718 395.754 103.486 396.747 105.428 397.027C107.37 397.306 109.346 396.851 110.97 395.75L133.66 382.12C135.119 381.256 136.814 380.877 138.502 381.039C140.19 381.201 141.782 381.894 143.05 383.02C145.45 385.13 147.95 387.23 150.45 389.24C151.78 390.297 152.739 391.749 153.188 393.387C153.638 395.025 153.554 396.763 152.95 398.35L143.55 423.1C142.763 424.898 142.664 426.923 143.273 428.789C143.881 430.655 145.154 432.232 146.85 433.22L157.05 439.13C158.752 440.097 160.75 440.406 162.665 439.998C164.58 439.591 166.279 438.496 167.44 436.92L184.23 416.28C186.33 413.68 189.73 412.58 192.43 413.68C195.83 415.08 198.13 415.88 202.33 417.29C203.946 417.824 205.35 418.86 206.338 420.246C207.325 421.633 207.844 423.298 207.82 425L207.42 451.45C207.302 453.417 207.908 455.36 209.124 456.911C210.34 458.462 212.082 459.515 214.02 459.87L225.61 461.87C227.55 462.206 229.546 461.821 231.222 460.788C232.898 459.755 234.139 458.144 234.71 456.26L243.31 431.26C243.862 429.645 244.915 428.25 246.317 427.276C247.718 426.303 249.394 425.803 251.1 425.85H260.9C262.603 425.814 264.274 426.318 265.674 427.29C267.073 428.262 268.129 429.652 268.69 431.26L277.29 456.26C277.861 458.144 279.102 459.755 280.778 460.788C282.454 461.821 284.45 462.206 286.39 461.87L297.98 459.87C299.919 459.515 301.66 458.462 302.876 456.911C304.092 455.36 304.698 453.417 304.58 451.45L304.18 425C304.156 423.298 304.675 421.633 305.663 420.246C306.65 418.86 308.054 417.824 309.67 417.29C313.87 415.88 316.67 414.78 319.27 413.78C321.87 412.78 325.07 412.78 327.57 415.88L344.57 436.82C345.737 438.401 347.446 439.497 349.369 439.899C351.293 440.301 353.297 439.981 355 439L365.2 433.09C366.907 432.113 368.191 430.536 368.8 428.666C369.41 426.796 369.303 424.766 368.5 422.97L359.1 398.22C358.506 396.63 358.428 394.893 358.877 393.256C359.325 391.619 360.278 390.165 361.6 389.1C364.1 387.1 366.6 385 369 382.89C370.268 381.764 371.861 381.071 373.548 380.909C375.236 380.747 376.932 381.126 378.39 381.99L401 395.66C402.633 396.734 404.602 397.174 406.536 396.896C408.471 396.618 410.236 395.641 411.5 394.15L418.99 385.15C420.248 383.65 420.913 381.74 420.858 379.783C420.802 377.826 420.031 375.957 418.69 374.53L401.4 354.59C400.276 353.289 399.601 351.661 399.475 349.946C399.349 348.231 399.778 346.521 400.7 345.07C402.4 342.37 404 339.567 405.5 336.66C406.316 335.157 407.586 333.95 409.128 333.212C410.671 332.473 412.408 332.242 414.09 332.55L439.98 337.55C441.888 338.015 443.899 337.763 445.633 336.841C447.366 335.919 448.7 334.392 449.38 332.55L453.38 321.55C454.051 319.705 454.025 317.679 453.307 315.852C452.589 314.025 451.228 312.524 449.48 311.63L426.39 298.81C424.901 297.982 423.718 296.697 423.016 295.144C422.314 293.592 422.129 291.855 422.49 290.19C423.09 286.99 423.69 283.88 424.19 280.68C424.43 278.992 425.198 277.424 426.383 276.199C427.569 274.974 429.111 274.155 430.79 273.86L456.87 269.66C458.811 269.421 460.599 268.487 461.905 267.031C463.21 265.575 463.944 263.695 463.97 261.74V250C463.861 248.062 463.073 246.225 461.743 244.811C460.413 243.397 458.628 242.498 456.7 242.27ZM256 112C287.94 111.987 318.976 122.605 344.213 142.182C369.45 161.759 387.452 189.18 395.38 220.12C395.97 222.48 396.014 224.942 395.509 227.322C395.004 229.701 393.964 231.933 392.466 233.85C390.969 235.767 389.055 237.317 386.869 238.382C384.683 239.448 382.282 240.001 379.85 240H274.61C271.784 240 269.007 239.252 266.564 237.831C264.121 236.41 262.097 234.367 260.7 231.91L208.6 140.2C207.387 138.068 206.68 135.685 206.535 133.237C206.389 130.788 206.809 128.338 207.761 126.078C208.713 123.817 210.172 121.805 212.025 120.198C213.879 118.591 216.077 117.432 218.45 116.81C230.707 113.594 243.328 111.978 256 112ZM112 256C111.982 236.719 115.837 217.631 123.335 199.867C130.833 182.103 141.822 166.027 155.65 152.59C157.396 150.861 159.517 149.558 161.848 148.781C164.179 148.005 166.658 147.775 169.092 148.111C171.526 148.446 173.85 149.338 175.884 150.716C177.918 152.095 179.607 153.923 180.82 156.06L233.06 248C234.44 250.417 235.166 253.152 235.166 255.935C235.166 258.718 234.44 261.453 233.06 263.87L180.39 355.57C179.167 357.701 177.471 359.521 175.431 360.89C173.392 362.259 171.064 363.14 168.629 363.465C166.195 363.79 163.718 363.55 161.391 362.764C159.063 361.977 156.949 360.665 155.21 358.93C141.517 345.515 130.641 329.5 123.22 311.825C115.8 294.149 111.986 275.17 112 256ZM256 400C243.108 400.033 230.268 398.369 217.81 395.05C215.438 394.42 213.242 393.252 211.394 391.637C209.545 390.022 208.093 388.003 207.149 385.737C206.206 383.471 205.796 381.018 205.952 378.569C206.109 376.119 206.826 373.738 208.05 371.61L260.63 280.06C262.036 277.624 264.06 275.602 266.497 274.198C268.934 272.793 271.698 272.056 274.51 272.06H379.9C382.331 272.06 384.731 272.615 386.915 273.681C389.1 274.748 391.013 276.298 392.51 278.214C394.006 280.131 395.045 282.363 395.55 284.741C396.054 287.119 396.01 289.581 395.42 291.94C387.476 322.874 369.462 350.284 344.218 369.85C318.975 389.415 287.938 400.023 256 400Z" fill=${color}/>
</svg>

`;
}

function ArchiveIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M80 152V408C80.0317 418.599 84.2561 428.755 91.7507 436.249C99.2453 443.744 109.401 447.968 120 448H392C402.599 447.968 412.755 443.744 420.249 436.249C427.744 428.755 431.968 418.599 432 408V152" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M436 64H76C60.536 64 48 76.536 48 92V116C48 131.464 60.536 144 76 144H436C451.464 144 464 131.464 464 116V92C464 76.536 451.464 64 436 64Z" stroke=${color} stroke-width="32" stroke-linejoin="round"/>
<path d="M320 304L256 368L192 304M256 345.89V224" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
}

function PeopleIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M402 168C399.07 208.67 368.9 240 336 240C303.1 240 272.88 208.68 270 168C267 125.69 296.37 96 336 96C375.63 96 405 126.46 402 168Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336 304C270.83 304 208.16 336.37 192.46 399.41C190.38 407.75 195.61 416 204.18 416H467.83C476.4 416 481.6 407.75 479.55 399.41C463.85 335.36 401.18 304 336 304Z" stroke=${color} stroke-width="32" stroke-miterlimit="10"/>
<path d="M200 185.94C197.66 218.42 173.28 244 147 244C120.72 244 96.2998 218.43 93.9998 185.94C91.6098 152.15 115.34 128 147 128C178.66 128 202.39 152.77 200 185.94Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M206 306C187.95 297.73 168.07 294.55 147 294.55C95 294.55 44.9 320.4 32.35 370.75C30.7 377.41 34.88 384 41.72 384H154" stroke=${color} stroke-width="32" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

`;
}

function PersonAddIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M376 144C372.08 196.87 332 240 288 240C244 240 203.85 196.88 200 144C196 89 235 48 288 48C341 48 380 90 376 144Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M288 304C201 304 112.7 352 96.36 442.6C94.36 453.52 100.57 464 112.01 464H464C475.44 464 481.62 453.52 479.65 442.6C463.3 352 375 304 288 304Z" stroke=${color} stroke-width="32" stroke-miterlimit="10"/>
<path d="M88 176V288M144 232H32" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
}

function WalletIcon(color: string) {
  return `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.625 14.0625H9.375C6.78617 14.0625 4.6875 16.1612 4.6875 18.75V37.5C4.6875 40.0888 6.78617 42.1875 9.375 42.1875H40.625C43.2138 42.1875 45.3125 40.0888 45.3125 37.5V18.75C45.3125 16.1612 43.2138 14.0625 40.625 14.0625Z" stroke=${color} stroke-width="3" stroke-linejoin="round"/>
<path d="M40.1719 14.0625V11.1328C40.1716 10.4143 40.0128 9.70462 39.7068 9.05452C39.4007 8.40442 38.9549 7.82988 38.4012 7.3719C37.8475 6.91392 37.1996 6.58378 36.5036 6.40504C35.8077 6.22631 35.0808 6.20338 34.375 6.33789L8.65625 10.7275C7.53938 10.9404 6.53179 11.5363 5.80727 12.4125C5.08276 13.2888 4.68673 14.3904 4.6875 15.5273V20.3125" stroke=${color} stroke-width="3" stroke-linejoin="round"/>
<path d="M35.9375 31.25C35.3194 31.25 34.7152 31.0667 34.2013 30.7233C33.6874 30.38 33.2869 29.8919 33.0504 29.3209C32.8139 28.7499 32.752 28.1215 32.8725 27.5153C32.9931 26.9092 33.2908 26.3523 33.7278 25.9153C34.1648 25.4783 34.7217 25.1806 35.3278 25.06C35.934 24.9395 36.5624 25.0014 37.1334 25.2379C37.7044 25.4744 38.1925 25.8749 38.5358 26.3888C38.8792 26.9027 39.0625 27.5069 39.0625 28.125C39.0625 28.9538 38.7333 29.7487 38.1472 30.3347C37.5612 30.9208 36.7663 31.25 35.9375 31.25Z" fill=${color}/>
</svg>
`;
}

function ControllerIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M467.51 248.83C449.11 165.65 421.82 112.59 378.08 99.66C369.609 97.1888 360.824 95.956 352 96C325.11 96 303.89 112 256 112C208.11 112 186.85 96 160 96C150.808 95.9524 141.653 97.1842 132.8 99.66C89.0001 112.59 61.9401 165.7 43.3301 248.83C24.3301 333.74 27.7701 400.83 64.9101 413.71C90.9101 422.71 114.16 404.1 136.18 376.71C161.18 345.51 191.97 335.91 256 335.91C320.03 335.91 349.62 345.51 374.66 376.71C396.66 404.12 420.77 422.5 446.08 413.87C487.1 399.86 486.52 334.74 467.51 248.83Z" stroke=${color} stroke-width="32" stroke-miterlimit="10"/>
<path d="M292 244C303.046 244 312 235.046 312 224C312 212.954 303.046 204 292 204C280.954 204 272 212.954 272 224C272 235.046 280.954 244 292 244Z" fill=${color}/>
<path d="M336 288C332.042 288 328.173 286.826 324.883 284.626C321.593 282.426 319.03 279.3 317.518 275.642C316.005 271.985 315.612 267.961 316.388 264.08C317.164 260.199 319.074 256.635 321.876 253.84C324.678 251.045 328.246 249.144 332.129 248.378C336.012 247.612 340.035 248.015 343.688 249.537C347.342 251.058 350.462 253.629 352.654 256.925C354.845 260.221 356.01 264.092 356 268.05C355.987 273.346 353.874 278.42 350.124 282.16C346.375 285.9 341.296 288 336 288Z" fill=${color}/>
<path d="M336 200C347.046 200 356 191.046 356 180C356 168.954 347.046 160 336 160C324.954 160 316 168.954 316 180C316 191.046 324.954 200 336 200Z" fill=${color}/>
<path d="M380 244C391.046 244 400 235.046 400 224C400 212.954 391.046 204 380 204C368.954 204 360 212.954 360 224C360 235.046 368.954 244 380 244Z" fill=${color}/>
<path d="M160 176V272M208 224H112" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
}

function BedIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 416V304C48.0501 287.042 54.8091 270.792 66.8005 258.801C78.792 246.809 95.0416 240.05 112 240H400C416.958 240.05 433.208 246.809 445.199 258.801C457.191 270.792 463.95 287.042 464 304V416M384 240H96V136C96.0317 125.401 100.256 115.245 107.751 107.751C115.245 100.256 125.401 96.0317 136 96H376C386.599 96.0317 396.755 100.256 404.249 107.751C411.744 115.245 415.968 125.401 416 136V240H384Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48 416V408C48.0185 401.64 50.553 395.547 55.0498 391.05C59.5467 386.553 65.6405 384.018 72 384H440C446.36 384.018 452.453 386.553 456.95 391.05C461.447 395.547 463.982 401.64 464 408V416M112 240V224C112.024 215.52 115.403 207.395 121.399 201.399C127.395 195.403 135.52 192.024 144 192H224C232.48 192.024 240.605 195.403 246.601 201.399C252.597 207.395 255.976 215.52 256 224M256 224V240M256 224C256.024 215.52 259.403 207.395 265.399 201.399C271.395 195.403 279.52 192.024 288 192H368C376.48 192.024 384.605 195.403 390.601 201.399C396.597 207.395 399.976 215.52 400 224V240" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
}

function ContractIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M416 221.25V416C416 428.73 410.943 440.939 401.941 449.941C392.939 458.943 380.73 464 368 464H144C131.27 464 119.061 458.943 110.059 449.941C101.057 440.939 96 428.73 96 416V96C96 83.2696 101.057 71.0606 110.059 62.0589C119.061 53.0571 131.27 48 144 48H242.75C251.234 48.0013 259.37 51.3716 265.37 57.37L406.63 198.63C412.628 204.63 415.999 212.766 416 221.25Z" stroke=${color} stroke-width="32" stroke-linejoin="round"/>
<path d="M256 56V176C256 184.487 259.371 192.626 265.373 198.627C271.374 204.629 279.513 208 288 208H408M176 288H336M176 368H336" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
}

function AlertCircleIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M448 256C448 150 362 64 256 64C150 64 64 150 64 256C64 362 150 448 256 448C362 448 448 362 448 256Z" stroke=${color} stroke-width="32" stroke-miterlimit="10"/>
<path d="M250.26 166.05L256 288L261.73 166.05C261.765 165.27 261.641 164.492 261.366 163.762C261.09 163.032 260.668 162.365 260.126 161.804C259.584 161.242 258.934 160.797 258.214 160.496C257.494 160.194 256.72 160.042 255.94 160.05C255.169 160.057 254.407 160.22 253.7 160.528C252.993 160.836 252.356 161.284 251.826 161.844C251.296 162.404 250.884 163.065 250.615 163.787C250.346 164.51 250.225 165.28 250.26 166.05Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M256 367.91C252.044 367.91 248.178 366.737 244.889 364.539C241.6 362.342 239.036 359.218 237.522 355.564C236.009 351.909 235.613 347.888 236.384 344.008C237.156 340.128 239.061 336.565 241.858 333.768C244.655 330.971 248.219 329.066 252.098 328.294C255.978 327.523 259.999 327.919 263.654 329.432C267.308 330.946 270.432 333.51 272.629 336.799C274.827 340.087 276 343.954 276 347.91C276 353.214 273.893 358.301 270.142 362.052C266.391 365.803 261.304 367.91 256 367.91Z" fill=${color}/>
</svg>
`;
}

function UpIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M112 328L256 184L400 328" stroke=${color} stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
}

function DownIcon(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M112 184L256 328L400 184" stroke=${color} stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
}

export default function Icon(props: {
  icon: IconName['value'];
  size: number;
  color: string;
}) {
  const icons: Record<IconName['value'], any> = {
    back: (
      <SvgXml
        xml={BackIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    grid: (
      <SvgXml
        xml={GridIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    practice: (
      <SvgXml
        xml={PracticeIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    halfStar: (
      <SvgXml
        xml={HalfStarIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    settings: (
      <SvgXml
        xml={SettingsIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    archive: (
      <SvgXml
        xml={ArchiveIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    people: (
      <SvgXml
        xml={PeopleIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    personAdd: (
      <SvgXml
        xml={PersonAddIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    wallet: (
      <SvgXml
        xml={WalletIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    controller: (
      <SvgXml
        xml={ControllerIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    bed: (
      <SvgXml
        xml={BedIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    contract: (
      <SvgXml
        xml={ContractIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    alertCircle: (
      <SvgXml
        xml={AlertCircleIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };

  return icons[props.icon];
}
