import ContentLayout from "../components/Layout/ContentLayout";
import TopBar from "../components/Layout/TopBar";

export default function App() {
    return (
        <div
            id="App"
            className="flex flex-col items-center min-h-screen w-full mt-8 px-1 sm:mt-16 sm:px-12 md:px-20"
        >
            <TopBar />
            <ContentLayout />
        </div>
    );
}
