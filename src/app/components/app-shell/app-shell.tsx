import Footer from '@/components/footer';
import Header from '@/components/header';

interface Props {
    children?: React.ReactNode;
    isHome?: boolean;
}

const AppShell: React.FC<Props> = ({ children = null, isHome = false }) => {
    return (
        <>
            {/* <Seo post={seo}></Seo> */}
            <Header isHome={isHome}></Header>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default AppShell;