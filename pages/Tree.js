import { useEffect } from 'react'
import tree from '../public/tree.json'

function Tree(){
    useEffect(()=>{
        function handle(findId,root){
            const path = []
            function findPath(findId,root){
                for(let i=0;i<root.length;i++){
                    if(path.length) break
                    const { id, children } = root[i]
                    if(findId === id){
                        return i
                    }else if(children.length){
                        const res = findPath(findId,children)
                        if(res!==void 0) path.unshift(res)
                    }
                    if(path.length) {
                        path.unshift(i)
                    }
                }
            }
            const res = findPath(findId,root)
            if(res!==void 0) path.unshift(res)
            return path
        }
        console.log(handle(100,tree),tree)
    },[])
    return <div>Tree</div>
}

export default Tree