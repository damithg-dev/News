import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Countries = [
  {code: 'ae', name: 'United Arab Emirates'},
  {code: 'ar', name: 'Argentina'},
  {code: 'at', name: 'Austria'},
  {code: 'au', name: 'Australia'},
  {code: 'be', name: 'Belgium'},
  {code: 'bg', name: 'Bulgaria'},
  {code: 'br', name: 'Brazil'},
  {code: 'ca', name: 'Canada'},
  {code: 'cn', name: 'China'},
  {code: 'co', name: 'Colombia'},
  {code: 'cu', name: 'Cuba'},
  {code: 'cz', name: 'Czech Republic'},
  {code: 'de', name: 'Germany'},
  {code: 'eg', name: 'Egypt'},
  {code: 'fr', name: 'France'},
  {code: 'gb', name: 'United Kingdom'},
  {code: 'gr', name: 'Greece'},
  {code: 'hk', name: 'Hong Kong'},
  {code: 'hu', name: 'Hungary'},
  {code: 'id', name: 'Indonesia'},
  {code: 'ie', name: 'Ireland'},
  {code: 'il', name: 'Israel'},
  {code: 'in', name: 'India'},
  {code: 'it', name: 'Italy'},
  {code: 'jp', name: 'Japan'},
  {code: 'kr', name: 'Korea'},
  {code: 'lt', name: 'Lithuania'},
  {code: 'lv', name: 'Latvia'},
  {code: 'ma', name: 'Morocco'},
  {code: 'mx', name: 'Mexico'},
  {code: 'my', name: 'Malaysia'},
  {code: 'ng', name: 'Nigeria'},
  {code: 'nl', name: 'Netherlands'},
  {code: 'no', name: 'Norway'},
  {code: 'nz', name: 'New Zealand'},
  {code: 'ph', name: 'Philippines'},
  {code: 'pl', name: 'Poland'},
  {code: 'pt', name: 'Portugal'},
  {code: 'ro', name: 'Romania'},
  {code: 'rs', name: 'Serbia'},
  {code: 'ru', name: 'Russian Federation'},
  {code: 'sa', name: 'Saudi Arabia'},
  {code: 'se', name: 'Sweden'},
  {code: 'sg', name: 'Singapore'},
  {code: 'si', name: 'Slovenia'},
  {code: 'sk', name: 'Slovakia'},
  {code: 'th', name: 'Thailand'},
  {code: 'tr', name: 'Turkey'},
  {code: 'tw', name: 'Taiwan'},
  {code: 'ua', name: 'Ukraine'},
  {code: 'us', name: 'United States of America'},
  {code: 've', name: 'Venezuela'},
  {code: 'za', name: 'South Africa'},
];

type State = {
  country: string;
  countryCode: string;
  updateCountry: (name: string) => void;
};

export const GeneralContext = createContext<State>({
  country: '',
  countryCode: '',
  updateCountry: () => {},
});

interface Props {
  children: any;
}

export const GeneralProvider = ({children}: Props) => {
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    (async () => {
      const temp = (await AsyncStorage.getItem('news@country')) ?? 'us';
      setCountryCode(temp);
      setCountry(Countries.find(c => c.code === temp)?.name ?? '');
    })();
  }, []);

  const updateCountry = useCallback(async (name: string) => {
    const temp = Countries.find(c => c.name === name);

    if (temp) {
      setCountryCode(temp.code);
      setCountry(temp.name);
      await AsyncStorage.setItem('news@country', temp.code);
    }
  }, []);

  const values = useMemo(
    () => ({country, countryCode, updateCountry}),
    [country, countryCode, updateCountry],
  );

  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
};

export const useGeneral = () => {
  const context = useContext(GeneralContext);
  if (context === undefined) {
    throw new Error('useGeneral must be used within an GeneralProvider');
  }
  return context;
};
