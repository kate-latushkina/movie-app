export interface ISetCategoryAction {
  readonly type: string;
  category: string;
}
export type CategoryActions = ISetCategoryAction;
