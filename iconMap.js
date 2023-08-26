export const ICON_MAP = new Map();

// ICON_MAP.set(0, 'sun')
// ICON_MAP.set(1, 'sun')
addMapping([0, 1], 'sun');

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}
