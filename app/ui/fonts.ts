import { Open_Sans, Roboto, Source_Code_Pro } from "next/font/google";


const openSans = Open_Sans({
    subsets: ['latin'],
    weight: "variable"
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: "variable"
});

export const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    weight: "variable"
});


export const headerFont = roboto;
export const contentFont = openSans;