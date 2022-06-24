import { VechaiProvider, extendTheme } from "@vechaiui/react";
import { createContext } from "react";

import {
  configStyle,
  configFeatures,
  configAvailableThemes,
  configThemes,
} from "~/configs";
import {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useFetcher,
} from "~/hooks";
import { useMediaQuery } from "~/libs";
import { isEnvProduction } from "~/utils";

import type { VechaiProviderProps } from "@vechaiui/react";
import type { VechaiSpecifiedTheme } from "~/types";

export type ThemeContextType = {
  colorScheme?: string;
  radius?: string;
  density?: VechaiProviderProps["density"];
  cursorPointer?: boolean;
  setColorScheme: (colorScheme: string) => void;
  setRadius: (radius: string) => void;
  setCursorPointer: (cursorPointer: boolean) => void;
  setDensity: (density: VechaiProviderProps["density"]) => void;
};

export const prefersLightMQ = "(prefers-color-scheme: light)";

export const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * ThemeProvider wrapper
 */
export const ThemeProvider = ({
  specifiedTheme = configStyle?.theme,
  children,
}: {
  specifiedTheme?: VechaiSpecifiedTheme;
  children: React.ReactNode;
}) => {
  /**
   * WIP: Preferred Theme
   * Only Light and Dark for now
   * Because System appearance require to modify the ThemeSwitcher
   */

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  if (!isEnvProduction && configFeatures.console) {
    console.info({ prefersDarkMode });
  }

  /**
   * VechaiTheme
   */
  const [colorScheme, setColorScheme] = useState(specifiedTheme?.colorScheme);
  const [density, setDensity] = useState<VechaiProviderProps["density"]>(
    specifiedTheme?.density,
  );
  const [radius, setRadius] = useState(specifiedTheme?.radius);
  const [cursorPointer, setCursorPointer] = useState(
    specifiedTheme?.cursorPointer,
  );

  /**
   * VechaiProvider
   */
  const theme = useMemo(() => {
    return extendTheme({
      cursor: cursorPointer ? "pointer" : "default",
      rounded: radius,
      colorSchemes: configThemes,
    });
  }, [cursorPointer, radius]);

  /**
   * ThemeContext.Provider
   */
  const themeValue = useMemo(() => {
    return {
      colorScheme,
      density,
      radius,
      cursorPointer,
      setColorScheme,
      setCursorPointer,
      setDensity,
      setRadius,
    };
  }, [colorScheme, cursorPointer, density, radius]);

  /**
   * Persist theme into session cookie
   */
  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  const mountRun = useRef(false);

  useEffect(() => {
    const themeToPersist = { colorScheme, density, radius, cursorPointer };

    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }

    if (!colorScheme) {
      persistThemeRef.current.submit(
        { theme: JSON.stringify(configStyle?.theme) },
        { action: "action/set-theme", method: "post" },
      );
    }

    persistThemeRef.current.submit(
      { theme: JSON.stringify(themeToPersist) },
      { action: "action/set-theme", method: "post" },
    );
  }, [colorScheme, cursorPointer, density, radius]);

  /**
   * Note: VechaiProvider currently causes this error in the console
   * But might be ignored for now
   *
   * Warning: Extra attributes from the server: class
   */

  return (
    <ThemeContext.Provider value={themeValue}>
      <VechaiProvider theme={theme} colorScheme={colorScheme} density={density}>
        {children}
      </VechaiProvider>
    </ThemeContext.Provider>
  );
};

/**
 * useTheme hook
 */
export const useTheme = () => {
  const theme = useContext(ThemeContext) || {
    colorScheme: configStyle?.theme.colorScheme,
    density: configStyle?.theme.density,
    radius: configStyle?.theme.radius,
    cursorPointer: configStyle?.theme.cursorPointer,
    setColorScheme: () => {
      return null;
    },
    setRadius: () => {
      return null;
    },
    setCursorPointer: () => {
      return null;
    },
    setDensity: () => {
      return null;
    },
  };

  const currentTheme = configAvailableThemes.find((item) => {
    return item.id === theme.colorScheme;
  });

  return {
    ...theme,
    ...currentTheme,
    isLight: currentTheme?.type === "light",
    isDark: currentTheme?.type === "dark",
  };
};
