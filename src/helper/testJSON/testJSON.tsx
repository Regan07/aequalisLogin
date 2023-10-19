
export const testJSON=(data:string)=>{
    try{
        JSON.parse(data)
        return true
    }
    catch(eroor)
    {
        return false
    }
}