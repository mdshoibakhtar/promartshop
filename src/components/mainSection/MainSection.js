import { Arrivals } from "./arrivals/Arrivals"
import { AudiosVideos } from "./audios&videos/AudiosVidieos"
import { Camera } from "./camera/Camera"
import { DealDay } from "./dealOfTheDay/DealDay"
import { ElecCate } from "./electronicCategories/ElecCate"
import { Gaming } from "./gaming/Gaming"
import { Laptop } from "./laptopAccessories/laptopAccess"
import { LedTv } from "./ledTv/LedTv"
import { MobileAcceocries } from "./mobAss/MobileAsoc"
import { NorWrap } from "./normalWrap/NorWrap"
import { Recomended } from "./recomededSale/Recomended"
import { Wrapper } from "./wrapper/Wrapper"

export const MainSection = () => {
    return (
        <div>
            <Wrapper />
            <NorWrap />
            <ElecCate />
            <LedTv />
            <Recomended />
            <Arrivals />
            <DealDay />
            <MobileAcceocries />
            <Laptop />
            <Gaming />
            <AudiosVideos />
            <Camera />
        </div>
    )
}