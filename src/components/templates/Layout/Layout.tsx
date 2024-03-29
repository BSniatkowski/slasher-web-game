import { useIntl } from 'react-intl'

import Footer from '../../organisms/Footer/Footer'
import messages from './Layout.messages'
import { SLayout } from './Layout.style'
import { ILayout } from './Layout.types'

const Layout: React.FC<ILayout> = ({ children }) => {
    const intl = useIntl()

    const siteLinks = [
        { children: intl.formatMessage(messages.home), href: '#home' },
        { children: intl.formatMessage(messages.about), href: '#about' },
    ]
    const myLinks = [
        { children: 'LinkedIn', href: 'https://www.linkedin.com/in/bartlomiej-sniatkowski/' },
        { children: 'Github', href: 'https://github.com/BSniatkowski' },
        {
            children: intl.formatMessage(messages.repository),
            href: 'https://github.com/BSniatkowski/z-nosem-w-piwie-react',
        },
        {
            children: intl.formatMessage(messages.figma),
            href: 'https://www.figma.com/file/7sIhgDCOUo9jGmuUOFngF9/Z-Nosem-W-Piwie?type=design&node-id=0-1&mode=design&t=RaFAvIdMTLGsTKoS-0',
        },
    ]

    return (
        <SLayout>
            {children}
            <Footer siteLinks={siteLinks} myLinks={myLinks} />
        </SLayout>
    )
}

export default Layout
