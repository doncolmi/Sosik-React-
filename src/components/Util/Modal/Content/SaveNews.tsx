import React, { FC, useEffect, useState } from "react";
import "../ModalInner.css";

import { useToasts } from "react-toast-notifications";
import axios from "axios";

interface Props {
    newsId: string;
    title: string;
}

const SaveNews: FC<Props> = ({ newsId, title }: Props) => {
    const { addToast } = useToasts();
    const [isSaved, setIsSaved] = useState<boolean>(false);

    async function getIsSaved(newsId: string) {
        const { data } = await axios.get(
        `${process.env["REACT_APP_BACKEND_SERVER"]}/save/${newsId}`
        );
        if (typeof data === "boolean") await setIsSaved(data);
    }

    useEffect(() => {
        getIsSaved(newsId);
    }, [newsId, isSaved]);

    async function saveNews(newsId: string, title: string) {
        try{
            const { data } = await axios.post(
            `${process.env["REACT_APP_BACKEND_SERVER"]}/save`,
            { newsId: newsId }
            );
            console.log(data);
            if(data) {
            await setIsSaved(true);
            addToast(`'${title}' 기사를 저장하였습니다!`, {
                appearance: "success",
                autoDismiss: true,
            });
            }
        } catch(e) {
            throw new Error(e);
        }
    }

    async function deleteNews(newsId: string, title:string) {
        try{
            const { data } = await axios.delete(
            `${process.env["REACT_APP_BACKEND_SERVER"]}/save`,
            { data: { newsId: newsId } }
            );
            if(data) {
                await setIsSaved(false);
                addToast(`'${title}' 기사를 저장한 기사에서 삭제하였습니다.`, {
                    appearance: "error",
                    autoDismiss: true,
                });
            }
        } catch(e) {
            throw new Error(e);
        }
    }

    if(isSaved) {
        return <span className="ModalSave" onClick={() => deleteNews(newsId, title)}>저장한 뉴스 삭제하기</span>;
    };

    return (
        <span className="ModalSave" onClick={() => {saveNews(newsId, title)}}>뉴스 저장하기</span>
    );
};

export default SaveNews;
