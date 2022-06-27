import { initializeApp } from "firebase/app";
import { getDatabase, remove, push, ref,onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import Toastify from "./toastify";




const firebaseConfig = {
    apiKey: "AIzaSyAeapPYfnga2iCoTm2Pn4zkXzQfCLp-Kus",
  authDomain: "fireblog-app-a09ae.firebaseapp.com",
  databaseURL:"https://fireblog-app-a09ae-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-a09ae",
  storageBucket: "fireblog-app-a09ae.appspot.com",
  messagingSenderId: "255558133397",
  appId: "1:255558133397:web:4657b69031764e0c0d1d9c"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
export default firebase;




export const AddBlog=({...blogInfo})=>{
    
    const db = getDatabase();
    const userRef=ref(db,"connect");
    const newUserRef=push(userRef)
    set((newUserRef),{title:blogInfo.title,url:blogInfo.url, content:blogInfo.content})
}


export const  ReadBlog = () =>{
    
    const [blogList, setBlogList] = useState()

    useEffect(() => {
      
        const db = getDatabase();
        const userRef = ref(db, "connect");

        onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = []

        for(let id in data){
            blogArray.push({id,...data[id]})
    }
    setBlogList(blogArray)

    
    });

    }, [])
    
    return {blogList}
}

export function deleteBlog(id) {
    const db = getDatabase();
    // const userRef = ref(db, 'blogs');
    const userRef=ref(db,"connect");
    remove(ref(db,"connect/"+id))
  }

//!-----------!--------------------------*//


export const createNewUser = async(email, password, firsName, lastName, navigate) => {

    try {
        let addNewUser = await createUserWithEmailAndPassword(
            auth,
            email,
             password
        )
        //console.log(addNewUser)
        navigate("/");
        Toastify("Registration successful")
        
    } catch (error) {
        alert(error.message)
    }

    
 }

 export const signIn = async(email, password, navigate) => {
    try {
        let signInUser = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        
        navigate("/")
        Toastify("Login successful")
    } catch (error) {
        alert("error.message")
    }
 }

 export const userObserver = (setCurrentUser) => {

    onAuthStateChanged(auth, (currentUser) => {
    
    if (currentUser) {
        setCurrentUser(currentUser);
    // ...
    } else {
    // User is signed out
    setCurrentUser(false)
  }
});
}


export const logOut = () =>  {
    signOut(auth);    
    Toastify("Logout successful")
}


//? with Google


export const signInWithGoogle = (navigate) => {
    
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        navigate("/")
        Toastify("Login successful")
    }).catch((error) => {
    alert("Something went wrong")
  });
}


// export const deleteBlog=(blogDetails,id)=>{
//     const db = getDatabase();
//     //remove(ref(db,"baglanti/"))
//     remove(ref(db, "/details/"+id))  
// }

export const editBlog=()=>{
    const db = getDatabase();
}

