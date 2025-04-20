// export default function Header() {
//     return (
//         <header className="flex justify-end h-[50px] bg-blue-500">
//             <nav>
//                 Menu 1 | Menu 2
//             </nav>
//         </header>
//     )
// }

// import { getSession } from "@/utils/loginUser";
import Link from "next/link";
// import { useEffect, useState } from "react";

export default function Header() {
    // const [session, setSession] = useState(null)

    // useEffect(() => {
    //     const gSession = async () => {
    //         const session = await getSession();
    //         console.log("Session: ", session);
    //         setSession(session);
    //     };
    //     gSession();
    // }, []);

    // const session = await getSession()

    return (
        <header className="flex justify-end bg-blue-300 p-4">
            <nav>
                <Link
                    className="mr-2"
                    href="/simple_db"
                >
                    Home
                </Link> |
                <Link
                    className="ml-2"
                    href="/simple_db/login">
                    Login
                </Link> |
                <Link
                    className="ml-2"
                    href="/simple_db/logout">
                    Logout
                </Link> |
                <Link
                    className="ml-2"
                    href="/simple_db/check">
                    Check
                </Link> |
                <Link
                    className="ml-2"
                    href="/simple_db/register">
                    Register
                </Link>
            </nav>
        </header>
    )
}