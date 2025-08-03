import { ESectionId, TravelGroup } from "../types";

export const HERO_IMG_URL = "/images/bg-home.png";
export const HOME_BOTTOM_IMG = "/images/bg-bottom-home.png";
export const OVERVIEW_IMG = "/images/bg-overview.png";
export const INSPIRATION_IMG = "/images/bg-inspiration.png";
export const LOCATION_IMG = "/images/bg-location.png";

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

export const EXCEPTIONS: ESectionId[] = [
    ESectionId.PRIVILEGE,
    ESectionId.APARTMENT,
    ESectionId.PARTNERS,
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

export const TRAVEL_NEARBY_DATA: TravelGroup[] = [
    {
        duration: "03 PHÚT",
        locations: [
            { name: "Công viên Như Nguyệt", distance: "0.58 km" },
            { name: "UBND Phường Thuận Phước", distance: "0.6 km" },
            { name: "Trường Tiểu học Võ Thị Sáu", distance: "0.65 km" },
        ],
    },
    {
        duration: "05 PHÚT",
        locations: [
            { name: "RMIT Vietnam", distance: "0.75 km" },
            { name: "Bệnh viện Đa khoa Hải Châu", distance: "1.5 km" },
            { name: "Trường THCS Lê Thánh Tôn", distance: "0.95 km" },
            { name: "Quận ủy Hải Châu", distance: "1.5 km" },
            { name: "Công viên Đầm Rong II", distance: "1 km" },
            { name: "Trường Đại học Sư phạm Kỹ thuật", distance: "1.6 km" },
            { name: "Trường THCS Lê Hồng Phong", distance: "1.1 km" },
            { name: "BV Đà Nẵng", distance: "1.7 km" },
            { name: "Trường Tiểu học Trần Thị Lý", distance: "1.3 km" },
            { name: "BV Giao thông Vận tải 5", distance: "1.8 km" },
            { name: "Trường tư thục Sakura Olympia", distance: "1.3 km" },
            { name: "Đại học Mở", distance: "1.9 km" },
        ],
    },
    {
        duration: "10 PHÚT",
        locations: [
            { name: "Nhà hát Trưng Vương", distance: "2 km" },
            { name: "Tượng Cá Chép Hóa Rồng", distance: "4 km" },
            { name: "Bệnh viện Y học Cổ truyền", distance: "2.3 km" },
            { name: "DANA Show", distance: "4.2 km" },
            { name: "Nhà hát Tuồng", distance: "2.5 km" },
            { name: "Bảo tàng Hồ Chí Minh", distance: "4.3 km" },
            { name: "Bảo tàng Điêu khắc Chăm", distance: "2.7 km" },
            { name: "Bãi biển Mỹ Khê", distance: "5 km" },
            { name: "TTTM Vincom Plaza Đà Nẵng", distance: "3.9 km" },
        ],
    },
    {
        duration: "20 PHÚT",
        locations: [
            { name: "Vòng quay Mặt Trời", distance: "6 km" },
            { name: "Furama Resort Đà Nẵng", distance: "7 km" },
            { name: "Chùa Nam Sơn", distance: "11 km" },
            { name: "Bán đảo Sơn Trà", distance: "15 km" },
        ],
    },
];

export const UTILITIES_DATA: string[] = [
    "Khối đế thương mại sôi động",
    "Tổ hợp văn phòng thời thượng",
    "Căn hộ lưu trú cao cấp",
    "Chuỗi tiện ích sức khoẻ",
    "Khu thư giãn và làm đẹp",
];
