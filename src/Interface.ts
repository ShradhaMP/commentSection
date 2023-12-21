export interface CommentNode {
  id: number;
  name: string;
  items: CommentNode[];
}

export interface CommentProps {
  comment: CommentNode;
  handleInsertNode: (commentId: number, item: string) => void;
  handleEditNode: (commentId: number, value: string) => void;
  handleDeleteNode: (commentId: number) => void;
}
     
     
     