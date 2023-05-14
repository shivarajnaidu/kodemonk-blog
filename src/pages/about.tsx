import AppShell from '@/components/app-shell/app-shell';
import About from '@/components/pages/about';
import SEO from '@/components/seo';

const seo = {
  title: 'About | KodeMonk | Yuvaraj V',
  description: 'Freelancer | Lead Software Engineer | Blogger | Linux Fan Boy',
  date: new Date(),
  path: '/about',
  image: '',
};

// markup
const AboutPage = () => {
  return (
    <AppShell>
      <SEO {...seo} />
      <About />
    </AppShell>
  )
}

export default AboutPage
