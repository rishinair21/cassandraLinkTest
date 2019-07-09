import React from 'react'
import { graphql } from 'gatsby'
import { Container, Alert, Row, Col } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroSearch from '../components/heroSearch'
import FeaturedVideos from '../components/featuredVideos'
import FeaturedArticles from '../components/featuredArticles'
import FeaturedRepo from '../components/featuredRepo'
import NewsLetterBox from '../components/newsletterBox'
import NewsFeeds from '../components/newsFeeds'

function IndexPage({ data }) {
    const videoList = data.videoList.nodes
    const wallabagList = data.wallabagList.nodes
    const openSourceList = data.openSourceList.nodes
    const newsFeeds = data.newsFeeds.nodes
    return (
        <Layout>
            <SEO title="Cassandra Links | Anant Corporation Project" />
            <Container>
                <HeroSearch />
                <Row>
                    <Col md="3">
                        <NewsFeeds newsFeeds={newsFeeds} />
                        <br />
                        <FeaturedVideos videoList={videoList} />
                    </Col>
                    <Col>
                        <FeaturedArticles wallabagList={wallabagList} />
                    </Col>
                    <Col md="3">
                        <NewsLetterBox />
                        <FeaturedRepo openSourceList={openSourceList} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query IndexQuery {
        wallabagList: allCassandraLinks(
            filter: { domain_name: { ne: "github.com" }, content: { ne: null } }
            sort: { fields: created_at, order: DESC }
            limit: 24
        ) {
            nodes {
                is_archived
                is_starred
                user_name
                user_email
                user_id
                is_public
                alternative_id
                uid
                title
                url
                created_at
                updated_at
                published_at
                mimetype
                language
                reading_time
                domain_name
                preview_picture
                tags {
                    label
                    slug
                    alternative_id
                }
            }
        }
        videoList: allCassandraLinks(
            filter: { domain_name: { regex: "/youtube/" }, content: { ne: null } }
            sort: { fields: created_at, order: DESC }
            limit: 6
        ) {
            nodes {
                is_archived
                is_starred
                user_name
                user_email
                user_id
                is_public
                alternative_id
                uid
                title
                url
                created_at
                updated_at
                published_at
                mimetype
                language
                reading_time
                domain_name
                preview_picture
                tags {
                    label
                    slug
                    alternative_id
                }
            }
        }
        openSourceList: allCassandraLinks(
            filter: { domain_name: { regex: "/github.com/" }, content: { ne: null } }
            sort: { fields: created_at, order: DESC }
            limit: 12
        ) {
            nodes {
                is_archived
                is_starred
                user_name
                user_email
                user_id
                is_public
                alternative_id
                uid
                title
                url
                created_at
                updated_at
                published_at
                mimetype
                language
                reading_time
                domain_name
                preview_picture
                tags {
                    label
                    slug
                    alternative_id
                }
            }
        }

        newsFeeds: allFeedTtrs(limit: 6) {
            nodes {
                link
                title
                pubDate
                id
                author
            }
        }
    }
`
