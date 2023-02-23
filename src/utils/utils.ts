export const getArticleTime = (timeStamp: string) =>{
    const articleDateTime = new Date(timeStamp);
    return `${articleDateTime.getHours()}:${articleDateTime.getMinutes()}`;
}