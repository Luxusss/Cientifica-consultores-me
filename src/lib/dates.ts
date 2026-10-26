const longDate = new Intl.DateTimeFormat('es-PE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const formatDate = (date: Date) => longDate.format(date);
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
