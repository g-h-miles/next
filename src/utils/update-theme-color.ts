import { hexToRGB } from '@/utils/hex-to-rgb';

export function updateThemeColor(
  primaryLighter: string,
  primaryLight: string,
  primaryDefault: string,
  primaryDark: string
) {
  document.documentElement.style.setProperty(
    '--primary-dark',
    hexToRGB(primaryDark)
  );
  document.documentElement.style.setProperty(
    '--primary-light',
    hexToRGB(primaryLight)
  );
  document.documentElement.style.setProperty(
    '--primary-lighter',
    hexToRGB(primaryLighter)
  );
  document.documentElement.style.setProperty(
    '--primary-default',
    hexToRGB(primaryDefault)
  );
}
