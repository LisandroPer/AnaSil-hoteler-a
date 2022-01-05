let ok = true;

export default function customFetch(duplex){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ok){
                resolve(duplex)
            }else{
                reject("Error...");
            }
        }, 1000)
    }) 

}