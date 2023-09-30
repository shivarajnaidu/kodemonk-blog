import AppShell from '@/components/app-shell/app-shell';

interface Props {
    children: React.ReactNode;
}

export default function AboutLayout({ children }: Props) {
    return (
        <AppShell>
            {children}
        </AppShell>
    )
}