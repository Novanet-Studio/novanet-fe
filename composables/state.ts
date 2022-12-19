export const usePanel = () => useState<boolean>('isPanelOpen', () => false);
export const useProjectId = () => useState<string>('projectId', () => '');
export const useArticleId = () => useState<string>('articleId', () => '');
