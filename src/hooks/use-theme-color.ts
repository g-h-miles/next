'use client';

import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { updateThemeColor } from '@/utils/update-theme-color';
import {
  DEFAULT_PRESET_COLOR_NAME,
  DEFAULT_PRESET_COLORS,
  usePresets,
} from '@/config/color-presets';

// color preset hook
function getLocalStoragePreset() {
  if (typeof window !== 'undefined') {
    const localStorageValue = localStorage.getItem('isomorphic-preset');
    return JSON.parse(String(localStorageValue));
  }
}

const colorPresetsAtom = atom(
  typeof window !== 'undefined'
    ? getLocalStoragePreset()
    : DEFAULT_PRESET_COLORS
);

const colorPresetsAtomWithPersistence = atom(
  (get) => get(colorPresetsAtom),
  (get, set, newStorage: any) => {
    set(colorPresetsAtom, newStorage);
    localStorage.setItem('isomorphic-preset', JSON.stringify(newStorage));
  }
);

export function useColorPresets() {
  const [colorPresets, setColorPresets] = useAtom(
    colorPresetsAtomWithPersistence
  );
  return {
    colorPresets: colorPresets === null ? DEFAULT_PRESET_COLORS : colorPresets,
    setColorPresets,
  };
}

//  color preset name hook
const colorPresetNameAtom = atom(
  typeof window !== 'undefined'
    ? localStorage.getItem('isomorphic-preset-name')
    : DEFAULT_PRESET_COLOR_NAME
);

const colorPresetNameAtomWithPersistence = atom(
  (get) => get(colorPresetNameAtom),
  (get, set, newStorage: any) => {
    set(colorPresetNameAtom, newStorage);
    localStorage.setItem('isomorphic-preset-name', newStorage);
  }
);

export function useColorPresetName() {
  const [colorPresetName, setColorPresetName] = useAtom(
    colorPresetNameAtomWithPersistence
  );
  return {
    colorPresetName:
      colorPresetName === null ? DEFAULT_PRESET_COLOR_NAME : colorPresetName,
    setColorPresetName,
  };
}

// apply color preset
export function useApplyColorPreset<T extends Record<string, any>>(
  colorPresets: T
) {
  const COLOR_PRESETS = usePresets();

  useEffect(() => {
    let colorLighter = COLOR_PRESETS[0].colors.lighter;
    let colorLight = COLOR_PRESETS[0].colors.light;
    let colorDefault = COLOR_PRESETS[0].colors.default;
    let colorDark = COLOR_PRESETS[0].colors.dark;

    if (colorPresets) {
      colorLighter = colorPresets.lighter;
      colorLight = colorPresets.light;
      colorDefault = colorPresets.default;
      colorDark = colorPresets.dark;
    }

    updateThemeColor(colorLighter, colorLight, colorDefault, colorDark);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorPresets]);
}
