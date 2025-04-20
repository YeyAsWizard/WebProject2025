import { getSession } from "@/utils/loginUser"


export default async function CheckToken() {

    let session;
    try {
        session = await getSession()
        console.log("Session: ", session)
    }
    catch (e) {
        console.log("Error: ", e)
        session = null
    }   
   
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}