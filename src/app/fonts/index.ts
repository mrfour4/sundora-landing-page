import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
    subsets: ["vietnamese"],
});

export const albra = localFont({
    src: "./albraDisplay-light.woff2",
});

export const sparkling = localFont({
    src: "./sparkling-horizon.woff2",
});
