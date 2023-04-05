import { BotHeader } from "./topHeader/BottomHeader";
import { TopHeader } from "./topHeader/TopHeader";

export const Header = () => {
    return (
        <div>
            <TopHeader />
            <BotHeader />
        </div>
    );
}