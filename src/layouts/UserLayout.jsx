import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export default function UserLayout() {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}