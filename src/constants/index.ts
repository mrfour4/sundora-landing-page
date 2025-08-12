import { Icons } from "@/components/icons";
import { Globe, Phone } from "lucide-react";
import {
    ESectionId,
    TAparment,
    TContact,
    TContactLocation,
    TGround,
    TNews,
    TPartner,
    TTravelGroup,
    TUtility,
} from "../types";

export const BREAKPOINTS = [1536, 1280, 1024];

export const HERO_IMG_URL = "/images_avif/bg-home.avif";
export const HOME_BOTTOM_IMG = "/images_avif/bg-bottom-home.avif";
export const OVERVIEW_IMG = "/images_avif/bg-overview.avif";
export const INSPIRATION_IMG = "/images_avif/bg-inspiration.avif";
export const LOCATION_IMG = "/images_avif/bg-location.avif";
export const PRIVILEGE_IMG = "/images_avif/bg-privilege.avif";
export const APARTMENT_IMG = "/images_avif/bg-apartment.avif";
export const PARTNER_IMG = "/images_avif/bg-partner.avif";
export const CONTACT_IMG = "/images_avif/bg-contact.avif";

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

export const TRAVEL_NEARBY_DATA: TTravelGroup[] = [
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

export const UTILITIES_DATA: TUtility[] = [
    {
        name: "Khối đế thương mại sôi động",
        imageUrl: "/images_avif/utilities-1.avif",
    },
    {
        name: "Tổ hợp văn phòng thời thượng",
        imageUrl: "/images_avif/utilities-2.avif",
    },
    {
        name: "Căn hộ lưu trú cao cấp",
        imageUrl: "/images_avif/utilities-3.avif",
    },
    {
        name: "Chuỗi tiện ích sức khoẻ",
        imageUrl: "/images_avif/utilities-4.avif",
    },
    {
        name: "Khu thư giãn và làm đẹp",
        imageUrl: "/images_avif/utilities-5.avif",
    },
];

export const PARTNERS: TPartner[] = [
    {
        imageUrl: "/images_avif/partner-1.avif",
        title: "Đơn vị \nquản lý vận hành",
        href: "#!",
    },
    {
        imageUrl: "/images_avif/partner-2.avif",
        title: "Đơn vị \nthiết kế nội thất",
        href: "#!",
    },
    {
        imageUrl: "/images_avif/partner-3.avif",
        title: "Đơn vị \nthiết kế cảnh quan",
        href: "#!",
    },
    {
        imageUrl: "/images_avif/partner-4.avif",
        title: "Ngân hàng \nbảo lãnh dự án",
        href: "#!",
    },
];

export const NEWS: TNews[] = [
    {
        imageUrl: "/images_avif/news-1.avif",
        title: "Sống trọn từng khoảnh khắc tại Sundora Tower",
        href: "#!",
    },
    {
        imageUrl: "/images_avif/news-2.avif",
        title: "Sống trọn từng khoảnh khắc tại Sundora Tower",
        href: "#!",
    },
    {
        imageUrl: "/images_avif/news-3.avif",
        title: "Sống trọn từng khoảnh khắc tại Sundora Tower",
        href: "#!",
    },
    {
        imageUrl: "/images_avif/news-4.avif",
        title: "Sống trọn từng khoảnh khắc tại Sundora Tower",
        href: "#!",
    },
];

export const CONTACT_LOCATIONS: TContactLocation[] = [
    {
        office: "Văn phòng Đà Nẵng",
        address: "K77A/7 Lê Độ, Phường Thanh Khê, Thành phố Đà Nẵng, Việt Nam",
    },
    {
        office: "Văn phòng Hà Nội",
        address:
            "Tòa nhà Bình Minh, 81 Đàm Quang Trung, Phường Long Biên, Thành phố Hà Nội",
    },
    {
        office: "Văn phòng Hồ Chí Minh",
        address:
            "Biệt thự số 10, Đường 56, Phường An Khánh, Thành phố Hồ Chí Minh",
    },
];

export const CONTACTS: TContact[] = [
    {
        icon: Phone,
        href: "tel:0984868463",
        label: "HOTLINE",
        content: "0984 868 463",
    },
    {
        icon: Icons.mail,
        href: "mailto:info@sundoratower.com",
        label: "Email",
        content: "info@sundoratower.com",
    },
    {
        icon: Globe,
        href: "https://sundoratower.vn",
        label: "Website",
        content: "https://sundoratower.vn",
    },
];

export const GROUNDS_DATA: TGround[] = [
    {
        name: "TRUNG TÂM THƯƠNG MẠI",
        imageUrl: "/images_avif/shopping-center-floor-3.avif",
    },
    {
        name: "VĂN PHÒNG CAO CẤP",
        imageUrl: "/images_avif/premium-office-floor-4.avif",
    },
    {
        name: "CĂN HỘ TẦNG 11-15",
        imageUrl: "/images_avif/apartment-floor-11-15.avif",
    },
    {
        name: "CĂN HỘ TẦNG 16",
        imageUrl: "/images_avif/apartment-floor-16.avif",
    },
    {
        name: "CĂN HỘ TẦNG 17-24",
        imageUrl: "/images_avif/apartment-floor-17-24.avif",
    },
    {
        name: "DUPLEX TẦNG 25",
        imageUrl: "/images_avif/duplex-floor-25.avif",
    },
    {
        name: "DUPLEX TẦNG 26",
        imageUrl: "/images_avif/duplex-floor-26.avif",
    },
];

export const GROUND_FLOORS: string[] = [
    "TẦNG 11",
    "TẦNG 12",
    "TẦNG 13",
    "TẦNG 14",
    "TẦNG 15",
];

export const APARTMENTS: TAparment[] = [
    { name: "STUDIO", imageUrls: ["/images_avif/studio-plan.avif"] },
    { name: "2PN", imageUrls: ["/images_avif/2br-plan.avif"] },
    { name: "3PN", imageUrls: ["/images_avif/3br-plan.avif"] },
    {
        name: "DUPLEX",
        imageUrls: [
            "/images_avif/duplex-floor-01.avif",
            "/images_avif/duplex-floor-02.avif",
        ],
    },
    {
        name: "PENTHOUSE",
        imageUrls: [
            "/images_avif/penthouse-floor-01.avif",
            "/images_avif/penthouse-floor-02.avif",
        ],
    },
];
