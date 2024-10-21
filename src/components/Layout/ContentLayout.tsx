import Sidebar from "./Sidebar";

export default function ContentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full max-w-[900px] px-4 my-12 grid grid-cols-[auto_1fr] sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8">
            <Sidebar />
            <div id="Content" className="pl-2 pr-4 sm:pr-12">
                {children}
            </div>
        </div>
    );
}
