import { useAtomValue } from 'jotai';
import { useTheme } from 'next-themes';
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef, useState } from 'react';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { Input, InputProps } from '@/components/ui/input';
import cn from '@/utils/class-names';
import { darkMode } from '@/components/google-map/map-styles';
import Spinner from '@/components/ui/spinner';

export type Location = {
  address: string;
  lat: number;
  lng: number;
};

interface GoogleMapsAutocompleteProps {
  apiKey: string;
  hideMap?: boolean;
  hideInput?: boolean;
  className?: string;
  mapClassName?: string;
  inputProps?: InputProps;
  spinnerClassName?: string;
  onPlaceSelect: (place: Location) => void;
}

export const locationAtom = atomWithReset<Location>({
  address: '',
  lat: -3.745,
  lng: -38.523,
});

export default function Autocomplete({
  apiKey,
  className,
  hideMap = false,
  hideInput = false,
  mapClassName,
  inputProps,
  onPlaceSelect,
  spinnerClassName,
}: GoogleMapsAutocompleteProps) {
  // check for dark mode
  const { theme } = useTheme();
  // global location state
  const location = useAtomValue(locationAtom);
  // to handle / clear input state
  const [inputValue, setInputValue] = useState('');
  // map loading state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // to reset location
  const resetLocation = useResetAtom(locationAtom);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: 'weekly',
      libraries: ['places'],
    });

    loader.importLibrary('maps').then(({ Map }) => {
      const autocompleteInstance = new google.maps.places.Autocomplete(
        inputRef.current as HTMLInputElement
      );
      setAutocomplete(autocompleteInstance);

      autocompleteInstance.addListener('place_changed', () => {
        const selectedPlace =
          autocompleteInstance.getPlace() as google.maps.places.PlaceResult;
        handlePlaceSelect(selectedPlace);
      });
      setIsLoading(false);

      if (!hideMap && mapRef.current) {
        new Map(mapRef.current, {
          center: {
            lat: location.lat,
            lng: location.lng,
          },
          zoom: 15,
          mapTypeControl: false,
          fullscreenControl: false,
          ...(theme === 'dark' && {
            styles: darkMode,
          }),
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.lat, location.lng, theme, hideMap]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (autocomplete) {
      const input = event.target.value;
      setInputValue(input);

      const autocompleteService = new google.maps.places.AutocompleteService();
      autocompleteService.getPlacePredictions({ input, types: ['geocode'] });
    }
  };

  const handlePlaceSelect = (selectedPlace: google.maps.places.PlaceResult) => {
    if (selectedPlace && selectedPlace.formatted_address) {
      const { formatted_address, geometry } = selectedPlace;
      const place: Location = {
        address: formatted_address,
        lat: geometry?.location?.lat() || 0,
        lng: geometry?.location?.lng() || 0,
      };
      onPlaceSelect(place);
      setInputValue(formatted_address);
    }
  };

  return (
    <div className={cn(className)}>
      {!hideInput && (
        <Input
          ref={inputRef}
          value={inputValue}
          onClear={() => {
            resetLocation();
            setInputValue('');
          }}
          onChange={handleInputChange}
          clearable={inputValue ? true : false}
          {...inputProps}
        />
      )}

      {isLoading && (
        <div className={cn(spinnerClassName)}>
          <Spinner />
        </div>
      )}

      {!hideMap && (
        <div
          id="map"
          ref={mapRef}
          className={cn('h-full w-full', mapClassName)}
        />
      )}
    </div>
  );
}
