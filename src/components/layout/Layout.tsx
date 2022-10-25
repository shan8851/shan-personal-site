import React, { ReactNode } from 'react'
import { Footer } from '../Footer/Footer'
import { Nav } from '../Nav/Nav'
import s from './Layout.module.scss'

type Props = {
  children?: ReactNode
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={s.wrapper}>
      <Nav />
      <div className={s.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
