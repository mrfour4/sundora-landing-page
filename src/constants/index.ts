import { ESectionId } from "../types";

export const HERO_IMG_URL = "/images/bg-home.png";
export const HOME_BOTTOM_IMG = "/images/bg-bottom-home.png";
export const OVERVIEW_IMG = "/images/bg-overview.png";
export const INSPIRATION_IMG = "/images/bg-inspiration.png";

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

export const SECONDARY_IN_VIEWS: ESectionId[] = [
    ESectionId.VIDEO,
    ESectionId.OVERVIEW,
    ESectionId.LOCATION,
    ESectionId.APARTMENT,
    ESectionId.LIBRARY,
    ESectionId.CONTACT,
];

export const PROJECT_INFO = [
    { label: "Tên Dự Án", value: "Sundora Tower" },
    { label: "Diện tích xây dựng dự án", value: "1.270,4m²" },
    {
        label: "Chủ Đầu Tư",
        value: "Công Ty Cổ Phần Tập Đoàn Phúc Hoàng Nguyên",
    },
    { label: "Số tầng nổi", value: "28 tầng" },
    {
        label: "Vị Trí Dự Án",
        value: "Lô A1-6, Dự Án Bên Sông Hàn, Thuận Phước, Hải Châu, Đà Nẵng",
    },
    { label: "Số tầng hầm", value: "02 tầng" },
    { label: "Tổng diện tích khu đất", value: "2.647,8m²" },
    { label: "Số lượng căn hộ", value: "236 căn" },
    { label: "Tổng diện tích Thương mại dịch vụ", value: "3.109,27m²" },
    { label: "Loại hình căn hộ", value: "1PN, 2PN, 3PN, Duplex, Penthouse" },
    { label: "Tổng diện tích Văn phòng cho thuê cao cấp", value: "4.195,15m²" },
    { label: "Dự kiến bàn giao", value: "Quý I/2027" },
];

export const RICH_LOGO_IN_VIEWS: ESectionId[] = [
    ESectionId.INSPIRATION,
    ESectionId.PRIVILEGE,
    ESectionId.UTILITIES,
    ESectionId.GROUND,
    ESectionId.APARTMENT,
    ESectionId.NEWS,
];
