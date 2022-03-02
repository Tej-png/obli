import React, { useEffect } from 'react'
import {projectFireStore} from '../firebase/config'
import {collection, query, onSnapshot, setDoc} from 'firebase/firestore'
import { useState } from 'react'

const useFirestore = (currentCollection) => {
    const [docs, setDocs] = useState([])
    useEffect(() => {
        
       
        const q = query(collection(projectFireStore, currentCollection));
        const unsub = onSnapshot(q, (snap)=>{
            const document = [];
            snap.forEach(doc =>{
                document.push({...doc.data(), id: doc.id})
            })
            setDocs(document.sort((a,b)=>{return b.createAt - a.createAt}))
        })
        return ()=> unsub()
    },[currentCollection])
    return {docs}
}

export default useFirestore