import ContentPage from "../components/content/ContentPage";
import ContentImage from "../components/content/ContentImage";
import aboutImage from "../images/about-me.jpg";
export default function About() {
    return (
        <ContentPage title="About Me" byline="Andrei Baicus">
            <>
                <p>
                    My name is Andrei Baicus (Băicuș if you’re into diacritics). I live in Bucharest, Romania,
                    and I’m 28 years old. I work as a Full Stack Web Developer on the awesome <a
                    target="_blank"
                    href="https://themeisle.com"
                    rel="noreferrer noopener">Themeisle</a> island.
                </p>

                <h2>What’s the deal with me?</h2>

                <div className="relative my-20">
                    <div className="absolute h-full w-1/2 z-10 r-0 mix-blend-multiply bg-sky-400 -rotate-45 -right-10 opacity-100 rounded-lg"/>

                    <ContentImage src={aboutImage} alt="Me holding a photo camera"/>
                </div>

                <p>
                    I’ve studied Film Editing and Sound Design here in Bucharest. Even though my interests and
                    profession
                    might have changed, I’m still pretty into movies and everything that implies creative output.
                </p>
                <p>
                    I love the Adobe Suite, which I’ve been learning since somewhere around ’08-’09. Oh wow, I noticed
                    you could write those years like that without referring to the nineteen hundreds – damn that makes
                    me feel old. I’m proficient with most programs from their creative suite – Photoshop, Lightroom,
                    Premiere, After Effects, and Illustrator.
                </p>
                <p>
                    I’ve always loved photography, videography, and computers, hence the interest in filmmaking and
                    editing. Unfortunately, the industry I found once I tried getting into the work field was very
                    different from what I expected.
                </p>
                <p>
                    I’ve started working for ThemeIsle in 2015 as a front end developer and graphic designer and learned
                    everything hands-on as I kept burning the midnight oil after-hours at home. I couldn’t have asked
                    for a better job.
                </p>

                <h2>Hobbies</h2>

                <p>
                    I enjoy photography, even though I haven’t given it much attention in the past few years. Which
                    reminds me I should get back into it. I’ve got a bunch of gear that I hate to carry around with me,
                    but I’d love to put more conscious effort into it.
                </p>


                <p>
                    I’m an eternal learner in the field of guitar playing. I feel like I’ve been making some progress
                    lately, thank god. I’ve found some excellent material. To sum it up, finally, somebody told me to
                    learn the notes on the first two strings. Who would have thought?
                </p>


                <p>
                    I love comedy and follow a lot of local and foreign performers in the field. It has unfortunately
                    extended to me buying a bunch of books on how to write and perform comedy. All these efforts only
                    yielded a ton of bad jokes that my buddies have to endure haphazardly.
                </p>
                <p>
                    I’ve recently started tinkering with ethical hacking and penetration testing, but without much
                    success. It’s a field I’ve been mesmerized by in the recent quarantine period. But who hasn’t taken
                    up on new stuff during this whole mess?
                </p>
                <p>
                    I’d consider whining one of my main hobbies. But I might be wrong. Who knows?!
                </p>
                <h2>Conclusions</h2>
                <p>
                    I enjoy what I do a great deal, and I hope further to evolve my interests and hobbies into something
                    palpable.
                </p>
                <p>
                    I’m my most significant proof that life happens, and opportunity, coupled with hard work, pays off.
                    You have to do more of that hard work.
                </p>
            </>
        </ContentPage>
    );
}
