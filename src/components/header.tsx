import { CallButton } from "./call-button";
import { Logo } from "./logo";

export const Header = () => {
    return (
        <header className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-8">
            <Logo />
            <CallButton />
        </header>
    );
};
