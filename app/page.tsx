import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import Title from "@/components/Title/Title";
import Text from "@/components/Text/Text";
import Section from "@/components/Section/Section";
import Card from "@/components/Card/Card";
import LinkCard from "@/components/LinkCard/LinkCard";

export default function Home() {
    const info = {
        about: `Driven by a passion for creating beautiful and functional websites, I'm a Front End developer who is always seeking new challenges and opportunities to expand my skills. With a strong foundation in HTML, CSS, and JavaScript, I bring a creative and innovative approach to every project, constantly striving for excellence in every line of code I write.`,
        experience: [
            {
                id: 0,
                position: "Lecturer",
                company: "Geolab • ჯეოლაბი",
                date: "2023 - Present",
                description: null,
                stack: "HTML ⁞ CSS ⁞ SCSS",
                url: "https://geolab.edu.ge/",
            },
            {
                id: 1,
                position: "Front End Developer",
                company: "Minister of Education and Science of Georgia",
                date: "2019 - 2020",
                description: "Electronic Educational Resources",
                stack: "HTML ⁞ SCSS ⁞ Javascript",
                url: "https://school.emis.ge",
            },
            {
                id: 2,
                position: "Junior Lecturer",
                company: "GeoLab • ჯეოლაბი",
                date: "2019",
                description: `Within the project of the "Geolab Junior", several lectures on Front End Development were given to students of the high school.`,
                stack: "HTML ⁞ CSS ⁞ SCSS",
                url: "https://geolab.edu.ge/",
            },
            {
                id: 3,
                position: "Front End Developer",
                company: "Web Technology S.R.O",
                date: "2019 - Present",
                description: null,
                stack: "HTML ⁞ SCSS ⁞ Javascript ⁞ React.js",
                url: null,
            },
        ],
        projects: [
            {
                id: 0,
                name: "Vako Motors Shop",
                description:
                    "Vako Motors is a car dealership company based in Tbilisi, Georgia.",
                stack: "React.js ⁞ Styled Components",
                url: null,
                status: "Ongoing",
            },
            {
                id: 1,
                name: "WPA Tbilisi Congress",
                description: `"Treatment and Management of Mental Disorders in a Post-Pandemic Era" was held in Tbilisi, Georgia during October 14-16, 2022.`,
                stack: "React.js ⁞ Styled Components",
                url: "https://wpatbilisicongress.com/",
                status: "2022",
            },
            {
                id: 2,
                name: "Referral",
                description: `"Referral" is a marketing company, which is a team of professionals made up of representatives from various fields.`,
                stack: "React.js ⁞ Styled Components",
                url: "https://referrals.ge/",
                status: "2021",
            },
        ],
        links: [
            {
                id: 0,
                platform: "Github",
                name: "nchavchanidze",
                url: "https://github.com/nchavchanidze",
            },
            {
                id: 1,
                platform: "LinkedIn",
                name: "Nikoloz Tchavtchanidze",
                url: "https://www.linkedin.com/in/nikoloztchavtchanidze/",
            },
            {
                id: 2,
                platform: "Email",
                name: "nikolozchavchanidze@gmail.com",
                url: "mailto:nikolozchavchanidze@gmail.com",
            },
        ],
    };

    return (
        <Container>
            <Heading />
            <Section>
                <Title title="About" />
                <Text text={info.about} />
            </Section>
            <Section card>
                <Title title="Work Experience" />
                {info.experience.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            position={item.position}
                            company={item.company}
                            date={item.date}
                            description={item.description}
                            stack={item.stack}
                            url={item.url}
                        />
                    );
                })}
            </Section>
            <Section card>
                <Title title="Side Projects" />
                {info.projects.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            position={item.name}
                            date={item.status}
                            description={item.description}
                            stack={item.stack}
                            url={item.url}
                        />
                    );
                })}
            </Section>
            <Section card>
                <Title title="Links" />
                {info.links.map((item) => {
                    return (
                        <LinkCard
                            key={item.id}
                            platform={item.platform}
                            name={item.name}
                            url={item.url}
                        />
                    );
                })}
            </Section>
        </Container>
    );
}
