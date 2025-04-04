type ReplaceOptions<T = unknown> = {
    regex?: RegExp;
    extractIds?: (match: string, ids: string) => number[];
    getDescriptionById?: (id: number, context?: T) => string | null;
    descriptionPrefix?: string;
    fallbackText?: string;
    context?: T;
};
export declare function replaceSourceIdsWithDescriptions<T>(message: string, options: ReplaceOptions<T>): string;
export {};
//# sourceMappingURL=customMessage.d.ts.map