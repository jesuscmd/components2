// scripts/generate-scss.ts
import fs from 'fs';
import path from 'path';
import { LightTheme, DarkTheme, BaseTheme } from '../src/theme/ui';

/**
 * Interfaz para definir la estructura de un objeto de tema.
 */
interface ThemeObject {
  [key: string]: any;
  name: string;
}

/**
 * Función recursiva para convertir objetos anidados en variables CSS.
 * @param obj Objeto del tema.
 * @param prefix Prefijo acumulado para la variable CSS.
 * @returns String con las variables CSS.
 */
function buildCssVars(obj: Record<string, any>, prefix: string[] = []): string {
  let scssLines = '';

  for (const key in obj) {
    if (key === 'name') continue; // Omitir la propiedad "name"

    const val = obj[key];
    const newPrefix = [...prefix, key];

    if (val && typeof val === 'object') {
      // Si es un objeto, recursión
      scssLines += buildCssVars(val, newPrefix);
    } else {
      // Convertir camelCase a kebab-case
      const varName = newPrefix.join('-').replace(/([A-Z])/g, '-$1').toLowerCase();
      scssLines += `  $${varName}: ${val} !default;\n`;
    }
  }

  return scssLines;
}

/**
 * Convierte un objeto de tema en un bloque CSS para [data-theme].
 * @param theme Objeto del tema.
 * @returns String con el bloque CSS.
 */
function themeToScss(theme: ThemeObject, isDefault: boolean = true): string {
  const themeName = theme.name ?? 'light';
  // const selector = isDefault ? `:root, [data-theme='${themeName}'] ` : `[data-theme='${themeName}'] `;
  let scss = `\n`;
  scss += buildCssVars(theme, []);
  scss += `\n`;
  return scss;
}

/**
 * Aplana un objeto de tema a un mapa de variables CSS con sus nombres y valores.
 * @param obj Objeto del tema.
 * @param prefix Prefijo acumulado para la variable CSS.
 * @param map Mapa acumulativo de variables.
 */
function flattenTheme(obj: Record<string, any>, prefix: string[] = [], map: Record<string, string> = {}): Record<string, string> {
  for (const key in obj) {
    if (key === 'name') continue; // Omitir la propiedad "name"

    const val = obj[key];
    const newPrefix = [...prefix, key];

    if (val && typeof val === 'object') {
      // Si es un objeto, recursión
      flattenTheme(val, newPrefix, map);
    } else {
      // Convertir camelCase a kebab-case
      const varName = newPrefix.join('-').replace(/([A-Z])/g, '-$1').toLowerCase();
      map[varName] = val;
    }
  }
  return map;
}

function generateBaseVariables(defaultTheme:ThemeObject):void {
  const scss = `// AUTO-GENERATED FILE. DO NOT EDIT.
  // Generated from src/theme/ui.ts

  ${themeToScss(defaultTheme, true)}
  `;

  const outFile = path.resolve('./src/styles/_variables-base.scss');
  fs.writeFileSync(outFile, scss, 'utf8');
  console.log('✅ Generated _variables-base.scss with BaseTheme variables');
  
}

/**
 * Genera el archivo _variables.scss con todas las variables del tema por defecto.
 */
function generateDefaultThemeVariables(lightTheme: ThemeObject): void {
  const scss = `// AUTO-GENERATED FILE. DO NOT EDIT.
  // Generated from src/theme/ui.ts

  ${themeToScss(lightTheme, true)}
  `;

  const outFile = path.resolve('./src/styles/_variables-light.scss');
  fs.writeFileSync(outFile, scss, 'utf8');
  console.log('✅ Generated _variables.scss with LightTheme variables');
}

/**
 * Genera el archivo _variables-dark.scss con solo las variables que difieren del tema por defecto.
 */
function generateDarkThemeVariables(lightTheme: ThemeObject, darkTheme: ThemeObject): void {
  const darkVars = flattenTheme(darkTheme);

  let scssLines = '';

  for (const varName in darkVars) {
    scssLines += `  $${varName}-dark: ${darkVars[varName]} !default;;\n`;
  }

  const scss = `// AUTO-GENERATED FILE. DO NOT EDIT.
// Generated from src/theme/ui.ts

${scssLines}
`;

  const outFile = path.resolve('./src/styles/_variables-dark.scss');
  fs.writeFileSync(outFile, scss, 'utf8');
  console.log('✅ Generated _variables-dark.scss with DarkTheme variables');
}

/**
 * Función principal para generar ambos archivos SCSS.
 */
function generateThemeScss(): void {
  generateDefaultThemeVariables(LightTheme);
  generateDarkThemeVariables(LightTheme, DarkTheme);
  generateBaseVariables(BaseTheme);
}

generateThemeScss();
