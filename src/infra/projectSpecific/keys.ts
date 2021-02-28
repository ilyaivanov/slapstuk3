export const cls = {
  //board
  board: "board",
  column: "column",
  columnTitle: "column-title",
  itemsContainer: "items-container",
  itemCard: "item-card",
  itemType: "item-type",
  itemCardHeader: "item-card-header",
  subitem: "subitem",
  subitemsContainer: "subitems-container",
  boardDark: "board-dark",
  header: "header",
  page: "page",
  none: "",
} as const;

export const ids = {
  root: "root",
} as const;

export const tIds = {};

export const zIndexes = {
  dragAvatar: 200,
};

export type ClassName = valueof<typeof cls>;
export type ClassMap = Partial<Record<ClassName, boolean>>;
