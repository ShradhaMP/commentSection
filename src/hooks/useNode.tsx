import { CommentNode } from "../Interface";
const useNode = () => {
  const insertNode = function (tree:CommentNode, commentId: number, item: string):CommentNode {
    if (tree.id === commentId) {
      tree.items.push({
        id: new Date().getTime(),
        name: item,
        items: [],
      });
      return tree;
    }

   const latestNode = tree.items.map((obj:CommentNode) => {
      return insertNode(obj, commentId, item);
    });

    return {...tree,items:latestNode};
  };
  const editNode = function (tree:CommentNode, commentId: number, value: string) {
       if(tree.id===commentId){
              tree.name = value;
              return tree;
       }
       tree.items.map((obj)=>{
              return editNode(obj,commentId,value);
       })

       return {...tree};
  };
  const deleteNode = function (tree:CommentNode, id:number) {
       for(let i=0;i<tree.items.length;i++){
              const currentItem = tree.items[i];
              if(currentItem.id===id){
                    tree.items.splice(i,1); 
                    return tree;
              }
              else{
                     deleteNode(currentItem,id);
              }
       }
       return tree;
  };

  return { insertNode, editNode, deleteNode };
};

export default useNode;
