

import Profile from '../Profile/Profile';
import user from '../../data/userData.json';

// import Statistics from '../Statistics/Statistics';
// import data from '../../data/data.json';

import { FriendList } from '../FriendList/FriendList';
import friends from '../../data/friends.json';

import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <>
        <div className={css.wrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}         
      />        
      <FriendList friends={friends}
      />
      </div>
      <TransactionHistory
        items={transactions} />; 
      </>
      </div>
    );  
}
















// import { useState } from 'react'
// import reactLogo from './assets/react.svg';
// import userData from "../../userData.json";
// import './App.css'
// import { Profile } from "../Profile/Profile";

// export const App = () => {
//   return (
//     <>
//       <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />

//       {/* <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//        */}
//     </>
//   );
// };