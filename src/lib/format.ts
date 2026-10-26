const list = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });

export const listEs = (items: readonly string[]) => list.format(items);

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
