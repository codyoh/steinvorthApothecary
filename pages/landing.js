import Head from 'next/head';

import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import LandingSection from '../components/LandingSection';
import Footer from '../components/Footer';

export default function Landing({ data }) {
    console.log(data)
    return (
        <Layout>
            <Head>
                <title>
                    {data.title}
                </title>
            </Head>
            <Nav />
            {/* render the list of sections to appear on the landing page */}
            {
                data.sections.map((sectionData) => {
                    return <LandingSection sectionData={sectionData} />
                })
            }
            <Footer />
        </Layout>
    )
}

export async function getStaticProps() {
    const data = {
        title: "Steinvorth Apothecary | Welcome",
        sections: [
            {
                id: 1,
                header: "Large header",
                subtext: "Some subtext to explain more",
                callToAction: {
                    text: "Button text here",
                    link: "/products"
                },
                backgroundImage: "/images/SA_18.jpg"
            },
            {
                id: 2,
                header: "Large header 2",
                subtext: "Some subtext to explain more",
                callToAction: {
                    text: "see the product",
                    link: "/products"
                },
                backgroundImage: "/images/SA_56.jpg"
            },
            {
                id: 3,
                header: "Large header 3",
                subtext: "Some subtext to explain more",
                callToAction: {
                    text: "Button text",
                    link: "/products"
                },
                backgroundImage: "/images/apothecary_crest_logo.png"
            }
        ]
    }

    return {
        props: {
            data
        }
    };
}