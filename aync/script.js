const API_URL = "https://api.github.com/users/shadabibrahim";

async function handleUser() {
    try {
        let dataRes = await fetch(API_URL)
        const jsonVal = await dataRes.json();

        for (const i in jsonVal) {
            console.log(i ,":", jsonVal[i])
        }
        
    }
    catch (err) {
        console.log(err);
    }
}
handleUser();

// older method to resolve  promise
// let data = fetch(API_URL)
// .then((pr)=>pr.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))
