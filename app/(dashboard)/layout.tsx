import { UserButton } from "@clerk/nextjs"

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen w-screen relative">
            <aside className="absolute left-0 top-0 h-full w-[200px] border-r border-black/10">
                <div className="px-4 my-4">
                    <span className="text-3xl">MOOD</span>
                </div>
            </aside>
            <div className="ml-[200px] ">
                <header className="h-[60px] border-b border-black/10">
                    <nav className="px-4 h-full">
                        <div className="h-full w-full px-6 flex items-center justify-end">
                            <UserButton />
                        </div>
                    </nav>
                </header>
                <div className="h-[calc(100vh-60px)]">{children}</div>
            </div>
        </div>
    )
}

export default DashboardLayout