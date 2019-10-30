export async function getArticles(source, apiKey) {
    try {
        let responce = await fetch(`https://newsapi.org/v2/top-headlines?sourceS=${source}&apiKey=${apiKey}`, { mode: 'cors' });
        let data = await responce.json();
        return data;
    } catch (error) {
        throw new Error(`We don't have articles`)
    }
}
