export async function getSources(apiKey) {
    try {
        let responce = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`, { mode: 'cors' });
        let data = await responce.json();
        return data;
    } catch (error) {
        throw new Error('Sorry, we have problem with data')
    }
}
