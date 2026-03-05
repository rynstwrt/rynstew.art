import "./home.css";


export default function Home() {
    return (
        <section id="landing">
            <main>
                <h1>Ryn<br />Stewart
                </h1>

                <p id="byline">Artist and full-stack developer in<br />Dallas, Texas.
                </p>

                <div id="links-container">
                    {/*<IconButton*/}
                    {/*:icon="LinkedInIcon"*/}
                    {/*url="https://www.linkedin.com/in/rynstwrt/" />*/}

                    {/*<IconButton*/}
                    {/*:icon="GitHubIcon"*/}
                    {/*url="https://github.com/rynstwrt" />*/}

                    {/*<IconButton*/}
                    {/*    id="portfolio-btn"*/}
                    {/*:icon="ResumeIcon"*/}
                    {/*url="/portfolio"*/}
                    {/*text="Design Portfolio"*/}
                    {/*useRouter="true" />*/}

                    {/*<IconButton*/}
                    {/*    id="resume-btn"*/}
                    {/*:icon="ResumeIcon"*/}
                    {/*url="/resume"*/}
                    {/*text="View Resumé"*/}
                    {/*useRouter="true" />*/}
                </div>
            </main>

            {/*<DownChevron v-if="!PLACEHOLDER_MODE" />*/}
        </section>
    );
}