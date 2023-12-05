import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaSlack } from "react-icons/fa"
import Logo from './components/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  logoLink: "/",
  project: {
    link: 'https://github.com/willisjordancc/documentation-starter-kit',
  },
  chat: {
    link: 'https://combinedcuriosity.slack.com/archives/C042JJE86AH',
    icon: <FaSlack style={{ width: "25px", height: "25px" }} />,
  },
  docsRepositoryBase: 'https://github.com/willisjordancc/documentation-starter-kit/blob/main',
  footer: {
    component: <span/>,
  },
}

export default config