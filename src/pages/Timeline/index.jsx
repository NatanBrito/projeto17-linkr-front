import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TimelineContext } from "../../providers/TimelineProvider";
import { LoadingContext } from "../../providers/LoadingProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import UserPublish from "../../components/UserPublish";

import * as S from "./style";
import { LikeContext } from "../../providers/LikeProvider";

const Timeline = () => {
    const navigate = useNavigate();
    const { DataPosts, catchPosts } = useContext(TimelineContext);
    const { getLikes, filterLikesPost } = useContext(LikeContext);
    const { update, setUpdate } = useContext(LoadingContext);
    useEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else {
            catchPosts();
            getLikes();
        }
    }, [update]);
    return (
        <>
            <Header />
            <S.Main>
                <S.TimelineContainer>{"timeline"}</S.TimelineContainer>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.UserData>timeline</S.UserData>
                        <S.UserPublishContainer>
                            <UserPublish />
                        </S.UserPublishContainer>
                        {DataPosts?.map(
                            ({
                                id,
                                username,
                                userpic,
                                likes,
                                userId,
                                article,
                                link,
                                urlMetadata,
                            }) => (
                                <Post
                                    key={id}
                                    postId={id}
                                    username={username}
                                    userpic={userpic}
                                    userid={userId}
                                    article={article}
                                    usersLikes={filterLikesPost(id)}
                                    likes={likes}
                                    link={link}
                                    urlMetadata={urlMetadata}
                                    update={() => setUpdate(!update)}
                                />
                            ),
                        )}
                    </S.PostsContainer>
                    <S.SidebarContainer>
                        <Trending />
                    </S.SidebarContainer>
                </S.ContentContainer>
            </S.Main>
        </>
    );
};
export default Timeline;
