export default function useFetch(path) {
    try{
        const fetchReq = await fetch(`${path}`);
        const fetchResponse = await fetchReq.json();
        return fetchResponse;
    }
    catch{
        console.log("xFtchErr");
    }
}