import { UserButton } from "@clerk/nextjs"

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen w-screen relative">
            <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
                <div className="px-4 my-4">
                    <span className="text-3xl">MOOD</span>
                </div>
            </aside>
            <div className="ml=[200px]">
                <header className="h-[60px] border-b border-black/10">
                    <div className="h-full w-full px-6 flex items-center justify-end">
                        <UserButton />
                    </div>
                </header>
                <div className="h-[calc(100vh-60px)]">{children}</div>
            </div>
        </div>
    )
}

export default DashboardLayout