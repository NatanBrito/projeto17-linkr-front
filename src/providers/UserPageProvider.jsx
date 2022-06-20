/* eslint-disable no-undef */
/* eslint-disable no-console */

import { createContext, useState } from "react";
import axios from "axios";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
    const [usersSearchBar, setUsersSearchBar] = useState([]);
    const [userPosts, setUserPosts] = useState({});
    const authHeader = authorizationHeader(getUserData()?.token);

    const getUserPosts = (userId) => {
        axios
            .get(`${process.env.REACT_APP_URI}/user/${userId}`, authHeader)
            .then(({ data }) => {
                setUserPosts(data);
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };

    const getUsersSearchBar = async (search) => {
        try {
            const users = await axios.get(
                `${process.env.REACT_APP_URI}/user/?search=${search}`,
                authHeader,
            );
            setUsersSearchBar(users.data);
        } catch {
            console.log("Error");
        }
    };

    return (
        <UserPageContext.Provider
            value={{
                usersSearchBar,
                getUsersSearchBar,
                userPosts,
                getUserPosts,
            }}
        >
            {children}
        </UserPageContext.Provider>
    );
};
