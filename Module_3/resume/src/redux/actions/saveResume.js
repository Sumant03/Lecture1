import { firestore } from "../../firebase";
export const SaveStarted=()=>{

return{
    type:"SaveStarted",

 }

}

export const ErrStarted=(err)=>{

    return{
        type:"ErrStarted",
        payload:err
     }
    
    }


    export const SaveComplete=(id)=>{

        return{
            type:"SaveComplete",
            payload:id
         }
        
        }    




export const saveResume=(uid,val,code)=>{

    return(dispatch)=>{

dispatch(SaveStarted())

firestore.
collection("resume")
.add({
    uid,
    val,
    code
})
.then((docRef)=>{
return docRef.get();
})
.then((doc)=>{

    dispatch(SaveComplete(doc.id));
    alert("Resume Saved In Database");
})
.catch((err)=>{
    dispatch(ErrStarted(err));
})




    }
}        