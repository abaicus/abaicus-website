import '../styles/global.css';
import DocumentHead from "../components/DocumentHead";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <DocumentHead/>
            <div className="wrap flex flex-col h-full">
            <Header/>
            <Component {...pageProps} />
            <Footer/>
            </div>
        </>
    )
}
