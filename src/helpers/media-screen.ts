const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobile: '512px',
  tablet: '768px',
  laptopS: '960px',
  laptopM: '1280px',
  laptopL: '1620px',
  laptop: '1500px',
  desktopL: '2000px',
  desktop: '2560px'
}

export const device = {
  mobileS: `screen and (max-width: ${size.mobileS})`,
  mobileM: `screen and (max-width: ${size.mobileM})`,
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.tablet})`,
  laptopS: `screen and (max-width: ${size.laptopS})`,
  laptopM: `screen and (max-width: ${size.laptopM})`,
  laptopL: `screen and (max-width: ${size.laptopL})`,
  laptop: `screen and (max-width: ${size.laptop})`,
  desktopL: `screen and (max-width: ${size.desktopL})`,
  desktop: `screen and (max-width: ${size.desktop})`,
};