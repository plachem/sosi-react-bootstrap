import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
export async function getStaticProps() {
  const res = await fetch('https://api.sosivip.com/api/v1/get_news')
  const json = await res.json()
  console.log(json)
  console.log(JSON.parse(json.hot_news_big))
  return {
    props: {
      hot: await JSON.parse(json.hot_news_big),
      medium: await JSON.parse(json.hot_news_medium)
    ,
    }
  }
}
export default function Home({hot, medium}) {
  return (
    <Container className="md-container">
      <Head>
        <title>react sosIvip</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <Container>
          <Row className="justify-content-md-between">
            <Card className="bml-card">
              <Card.Body>
                <Card.Img variant="top" src={"https://api.sosivip.com" + hot.image.big.url} />
                <Card.Title>{hot.name}</Card.Title>
                <Card.Text>
                  {hot.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className="justify-content-md-between">
          {medium.map(item =>
            <Card className="sml-card">
              <Card.Body>
                <Card.Img variant="top" src={"https://api.sosivip.com" + item.image.url} />
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.text}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Deploy</Card.Title>
                <Card.Text>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
                >
                  More &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>
      <footer className="cntr-footer">
      </footer>
    </Container>
  )
}
