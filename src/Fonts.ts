export const Font = {
  NewYork: {
    SemiBold: 'NewYorkSmall-Bold',
    Bold: 'NewYorkSmall-Semibold',
  },
  Nunito: {
    Bold: 'Nunito-Bold',
    Black: 'Nunito-Bold',
    ExtraBold: 'Nunito-ExtraBold',
    SemiBold: 'Nunito-SemiBold',
    Light: 'Nunito-Light',
    Regular: 'Nunito-Regular',
  },
};

export const getFont = (
  shortCode?: 'NWSB' | 'NWB' | 'NL' | 'NR' | 'NSB' | 'NB' | 'NEB' | 'NBL',
) => {
  switch (shortCode) {
    case 'NWSB':
      return Font.NewYork.SemiBold;
    case 'NWB':
      return Font.NewYork.Bold;
    case 'NL':
      return Font.Nunito.Light;
    case 'NR':
      return Font.Nunito.Regular;
    case 'NSB':
      return Font.Nunito.SemiBold;
    case 'NB':
      return Font.Nunito.Bold;
    case 'NEB':
      return Font.Nunito.ExtraBold;
    case 'NBL':
      return Font.Nunito.Black;
    default:
      return Font.Nunito.Regular;
  }
};
