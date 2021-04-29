import React from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../components/header/header'
import Footer from '../components/footer/footer'
import Gifts from '../components/gifts-form/gifter'

const GiftPage = () => (
  <>
    <Header/>
    <Gifts/>
    <Footer/>
  </>
)

export default GiftPage;