import { useState } from 'react'
import Comment from './components/Comment'
import useNode from './hooks/useNode'
import './App.css'
import { CommentNode } from './Interface'

const App=()=> {
  const [commentsData, setCommentsData] = useState<CommentNode>(
    {
      id: 1,
      name: 'root',
      items: [],
    }
  );
  const {insertNode,editNode,deleteNode}=useNode();

  const handleInsertNode=(folderId:number,item:string)=>{
    const finalStructure:CommentNode = insertNode(commentsData,folderId,item);
    setCommentsData(finalStructure);
  }

  const handleEditNode=(folderId:number,item:string)=>{
    const finalStructure = editNode(commentsData,folderId,item);
    setCommentsData(finalStructure);
  }

  const handleDeleteNode=(folderId:number)=>{
    const finalStructure = deleteNode(commentsData,folderId);
    const temp={...finalStructure};
    setCommentsData(temp);
  }

  return (
    <div className='App'>
      <Comment 
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  )
}

export default App
