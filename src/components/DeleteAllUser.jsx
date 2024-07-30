import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
const dispatch = useDispatch()
    const deleteAll = () => {
dispatch(deleteUsers())
    }
    return( <>
    <button onClick={deleteAll}>
      Delete all User
    </button>
    </>)
};

export default DeleteAllUser;