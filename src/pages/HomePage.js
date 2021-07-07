import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Form,
  Image,
  List,
  Segment,
  Visibility,
  Card,
  Popup
} from 'semantic-ui-react'
import CityList from './CityList'
import JobPostingService from '../services/jobPostingService'
import { useDispatch } from 'react-redux'
import { addToFavorite } from '../store/actions/favoriteActions'

export default function HomePage() {

  const dispatch = useDispatch()

  const [jobPostings, setJobPosting] = useState([])

  useEffect(() => {
    let jobPostingService = new JobPostingService()
    jobPostingService.getJobPosting().then(result => setJobPosting(result.data.data))
  }, [])

  const handleAddToFavorite = (jobPosting) => {
    dispatch(addToFavorite(jobPosting))
  }

  const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: '1em',
}

  return (
    <div>
      <Visibility>
        <Segment
          inverted
          secondary
          textAlign='center'
          style={{ minHeight: 500, background: "#22a2dd" }}
          vertical
        >
          <Container>
            <Form style={{ marginTop: "6em" }} >
              <Form.Group widths='equal'>
                <Form.Input width={10} placeholder='Search job...' />
                <CityList></CityList>
                <Form.Button style={{ width: "5em" }} width={1} icon="search"></Form.Button>
              </Form.Group>
            </Form>
            <Image style={{ width: "40em", margin: " 4em auto" }} src='https://res.cloudinary.com/dogukanozgurylmz/image/upload/v1623356932/hrmslogo.fw_q77xao.png' size='large' rounded />
          </Container>
        </Segment>
      </Visibility>

      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">
                <Header.Content style={{ color: "#22a2dd" }} >Job Postings</Header.Content>
              </Header>
              <Card.Group itemsPerRow={3}>
                {
                  jobPostings.slice(0, 3).map(jobPosting => (
                    <Card key={jobPosting.id}>
                      <Popup style={style} inverted content='Add to favorites' trigger={<Button color="black" style={{background:"#22a2dd"}} onClick={() => handleAddToFavorite(jobPosting)} icon='like' />} />
                      <Card.Content>
                        <Card.Header>{jobPosting.employerUser.companyName}</Card.Header>
                        <Card.Meta>{jobPosting.employerUser.webAddress}</Card.Meta>
                      </Card.Content>
                      <Card.Content >{jobPosting.jobPosition.position}</Card.Content>
                      <Card.Content >Salary: {jobPosting.minSalary} - {jobPosting.maxSalary} TL</Card.Content>
                      <Card.Content >City: {jobPosting.city.cityName}</Card.Content>
                      <Card.Content >Application Deadline: {jobPosting.applicationDeadline}</Card.Content>
                      <Card.Content extra>
                        <div className='ui one buttons'>
                          <Button basic color='green'>
                            Apply for a job
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                  ))
                }
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button style={{ marginTop: '4em' }} as={NavLink} to="/jobpostings" basic size='huge'>See job postings</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image avatar src='/images/avatar/large/nan.jpg' />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have learned how to master the
            art of doing nothing by providing massive amounts of whitespace and generic content that
            can seem massive, monolithic and worth your attention.
          </p>
          <Button as='a' size='large'>
            Read More
          </Button>

          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Case Studies</a>
          </Divider>

          <Header as='h3' style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
            it's really true. It took years of gene splicing and combinatory DNA research, but our
            bananas can really dance.
          </p>
          <Button as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
    </div>
  )
}