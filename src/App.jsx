// import Detail from "./components/Detail/Detail";
// import List from "./components/List/List";
// import Chat from "./components/Chat/Chat";
// import Login from "./components/login/Login";
// import Notification from "./components/notification/Notification";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./components/lib/firebase";
// import { useUserStore } from "./components/lib/userStore";

// const App = () => {
  
//   const{currentUser, isLoading, fetchUserInfo} = useUserStore()

//   useEffect(()=>{
//     const unSub = onAuthStateChanged(auth,(user)=>{
//       fetchUserInfo(user?.uid)
//     })

//     return()=> {
//       unSub();
//     }
//   },[fetchUserInfo]);

//   console.log(currentUser)



//   if(isLoading) return <div className="loading">Loading...</div>
//   return (
//   <div className='container'>
//     {currentUser ? ( 
//       <>
//     <List/>
//     <Chat/>
//     <Detail/>
//     </>) : (<Login/>)}
//     <Notification/>
   
//   </div>
//   )
// }

// export default App;


import { useEffect } from "react";
import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";
import List from "./components/List/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/lib/firebase";
import { useUserStore } from "./components/lib/userStore";
import { useChatStore } from "./components/lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;