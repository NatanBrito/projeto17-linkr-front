import axios from "axios";
import { createContext, useContext } from "react";

import { LoadingContext } from "./LoadingProvider";

import authorizationHeader from "../utils/authorizationHeader";
import getUserData from "../utils/getUserData";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const { update, setUpdate } = useContext(LoadingContext);
    const authHeader = authorizationHeader(getUserData()?.token);
    const likePost = (postId) => {
        axios
            .post(
                `${process.env.REACT_APP_URI}/likes/${postId}`,
                {},
                authHeader,
            )
            .then(() => setUpdate(!update))
            .catch((err) => console.log(err, "//viana faça"));
    };

    const buildTooltipMessage = (userLiked, countLikes, usersLikes) => {
        countLikes = parseInt(countLikes);
        if (userLiked) {
            const message =
                countLikes === 1
                    ? "Você"
                    : `Você, ${usersLikes[0]?.username} and other 
                    ${countLikes - 2} people`;
            return message;
        } else {
            const message =
                countLikes === 1
                    ? `${usersLikes[0]?.username}`
                    : `${usersLikes[0]?.username}, 
                    ${usersLikes[1]?.username} e outras 
                    ${countLikes - 2} pessoas`;
            return message;
        }
    };

    return (
        <LikeContext.Provider
            value={{
                likePost,
                buildTooltipMessage,
            }}
        >
            {children}
        </LikeContext.Provider>
    );
};
