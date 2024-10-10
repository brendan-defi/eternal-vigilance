import TopBar from "@/src/components/Layout/TopBar";
import ContentLayout from "@/src/components/Layout/ContentLayout";

export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col items-center min-h-screen w-full mt-8 px-1 sm:mt-16 sm:px-12 md:px-20">
            <TopBar />
            <ContentLayout>{children}</ContentLayout>
        </div>
    );
}
