import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>Denne side findes ikke</h1>
    <Link to="/">Tilbage til forsiden</Link>
  </Layout>
)

export default NotFoundPage
