import ContentLayout from "../components/Layout/ContentLayout";
import TopBar from "../components/Layout/TopBar";

export default function App() {
    return (
        <div id="App" className="min-h-screen flex flex-col items-center">
            <TopBar />
            <ContentLayout />
        </div>
    );
}
