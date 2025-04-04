type ReplaceOptions<T = unknown> = {
  regex?: RegExp;
  extractIds?: (match: string, ids: string) => number[];
  getDescriptionById?: (id: number, context?: T) => string | null;
  descriptionPrefix?: string;
  fallbackText?: string;
  context?: T;
};

// TODO: generalizar paramêtros
export function replaceSourceIdsWithDescriptions<T>(message: string, options: ReplaceOptions<T>): string {
  const {
    regex = /<span class='source-doc-ids'>([\d,]+)<\/span>/,
    extractIds = (_, ids) => ids.split(',').map((id) => Number(id.trim())),
    getDescriptionById = () => null,
    descriptionPrefix = 'Aula: ',
    fallbackText = 'Não se aplica',
    context,
  } = options;

  return message.replace(regex, (match, ids) => {
    const sourceIds = extractIds(match, ids);
    const uniqueDescriptions = sourceIds.reduce((acc: string[], id) => {
      const description = getDescriptionById(id, context);
      if (description && !acc.includes(description)) {
        acc.push(description);
      }
      return acc;
    }, []);
    return uniqueDescriptions.length ? uniqueDescriptions.map((desc) => `${descriptionPrefix}${desc}`).join(', ') : fallbackText;
  });
}
