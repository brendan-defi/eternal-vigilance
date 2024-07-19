import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

export default function ContentLayout() {
    return (
        <main className="w-full min-w-[620px] max-w-[900px] px-4 my-12 grid grid-cols-[10rem_1fr] gap-8">
            <Sidebar />
            <div id="Outlet" className="pl-2 pr-12">
                <Outlet />
            </div>
        </main>
    );
}
