import { ESectionId } from "../types";

export const HERO_IMG_URL = "/images/bg-home.png";
export const HOME_BOTTOM_IMG = "/images/bg-bottom-home.png";

export const SECTION_TITLES: Record<ESectionId, string> = {
    [ESectionId.HOME]: "Trang chủ",
    [ESectionId.VIDEO]: "Video",
    [ESectionId.OVERVIEW]: "Tổng quan dự án",
    [ESectionId.INSPIRATION]: "Cảm hứng",
    [ESectionId.LOCATION]: "Vị trí kết nối",
    [ESectionId.PRIVILEGE]: "Đặc quyền",
    [ESectionId.UTILITIES]: "Tiện ích",
    [ESectionId.GROUND]: "Mặt bằng",
    [ESectionId.APARTMENT]: "Căn hộ",
    [ESectionId.LIBRARY]: "Thư viện",
    [ESectionId.PARTNERS]: "Chủ đầu tư & đối tác",
    [ESectionId.NEWS]: "Tin tức",
    [ESectionId.CONTACT]: "Liên hệ",
};

export const VN_PHONE_REGEX = /^(?:\+?84|0)(3|5|7|8|9)\d{8}$/;
