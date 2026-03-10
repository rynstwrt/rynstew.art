import { redirect, notFound } from "next/navigation";


const REDIRECT_ROUTES: any = {
    "resume": "/resume.pdf",
    "portfolio": "/portfolio.pdf"
};


export default async (props: any) => {
    const slug = (await props.params)?.slug;
    const redirectLocation = REDIRECT_ROUTES[slug[0]]

    if (!redirectLocation)
        notFound();

    redirect(redirectLocation);
};