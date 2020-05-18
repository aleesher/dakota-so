export enum CommentCardTypes {
  Problem_Text = "Problem_Text",
  Internal_Text = "Internal_Text"
}

export type CommentCardType = keyof typeof CommentCardTypes;

export interface IComment {
  id?: string;
  date: string;
  text: string;
  author: string;
  orderCommentType: CommentCardType;
  isTemporary: boolean;
}
