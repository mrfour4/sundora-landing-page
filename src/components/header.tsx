import { CallButton } from "./call-button";
import { Logo } from "./logo";
import { Sidebar } from "./sidebar";

export const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-14">
            <Logo />
            <div className="flex items-center gap-6">
                <CallButton />
                <Sidebar />
            </div>
        </header>
    );
};
