
import React, { createContext,Component } from "react";
import axios from 'axios';
export const MyContext = createContext();
const Axios = axios.create({
    baseURL: 'http://localhost:7882/react-blogs/',
});

class MyContextProvider extends Component{

  userlistall  = async () => {
    const userlistalls = await Axios.get(`all.php`);
    return userlistalls.data;
  }
  deleteUserall  = async (id) => {
    const deleteUseralls = await Axios.post(`delete.php`,{
      userid: id,
    });
    return deleteUseralls.data;
  }
  insertUser  = async (userInfo) => {
    const insertUsers = await Axios.post(`add.php`,{
      name: userInfo.name,
      prof: userInfo.prof,
      des: userInfo.des,
    });
    return insertUsers.data;
  }
  fetchUserall  = async (id) => {
    const fetchUseralls = await Axios.post(`edit.php`,{
      userid: id,
    });
    return fetchUseralls.data;
  }
  updateUser  = async (userInfo,id) => {
    const updateUsers = await Axios.post(`client-update.php`,{
      name: userInfo.name,
      prof: userInfo.prof,
      des: userInfo.des,
      userid: id,
    });
    return updateUsers.data;
  }
        
render(){
  const contextValue = {
    userlistall:this.userlistall,
    deleteUserall:this.deleteUserall,
    insertUser:this.insertUser,
    fetchUserall:this.fetchUserall,
    updateUser:this.updateUser,
  }
  return(
    <MyContext.Provider value={contextValue}>
      {this.props.children}
    </MyContext.Provider>
  )
}

}

export default MyContextProvider;