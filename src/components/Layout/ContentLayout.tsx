import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

export default function ContentLayout() {
    return (
        <main className="w-full max-w-[900px] px-4 my-12 grid grid-cols-[auto_1fr] sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8">
            <Sidebar />
            <div id="Outlet" className="pl-2 pr-4 sm:pr-12">
                <Outlet />
            </div>
        </main>
    );
}
