import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Form,
  Image,
  Segment,
  Visibility,
  Card,
  Popup,
} from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'
import { useDispatch } from 'react-redux'
import { addToFavorite } from '../store/actions/favoriteActions'
import CityService from "../services/cityService";
import JobPositionService from '../services/jobPositionService'

export default function HomePage() {

  const dispatch = useDispatch()

  const [jobPostings, setJobPosting] = useState([])
  const [cities, setCities] = useState([])
  const [jobPositions, setJobPositions] = useState([])

  useEffect(() => {
    let jobPostingService = new JobPostingService()
    jobPostingService.getJobPosting().then(result => setJobPosting(result.data.data))
    let cityService = new CityService();
    cityService.getCity().then(result => setCities(result.data.data))
    let jobPositionService = new JobPositionService()
    jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
  }, [])

  const handleAddToFavorite = (jobPosting) => {
    dispatch(addToFavorite(jobPosting))
  }

  const citiesOptions = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id
  }))

  const jobPositionOptions = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.position,
    value: jobPosition.id
  }))

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
          style={{ minHeight: 400, background: "#22a2dd" }}
          vertical
        >
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width="8">
                  <Form style={{ marginTop: "10em" }} >
                    <Form.Group>
                      <Form.Dropdown multiple width="8" required placeholder="Select City" selection search options={citiesOptions} />
                      <Form.Dropdown multiple width="8" fluid required placeholder="Select Job Position" selection search options={jobPositionOptions} />
                    </Form.Group>
                    <Form.Button inverted color='black' size="small" fluid icon="search"></Form.Button>
                  </Form>
                </Grid.Column>
                <Grid.Column width="8">
                  <Image style={{ margin: " 0 auto", marginTop: "5em" }} circular src='https://res.cloudinary.com/dogukanozgurylmz/image/upload/v1625773040/hrms_gmmuea.jpg' size='large' rounded />
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
              <Card.Group itemsPerRow="4" centered>

                {
                  jobPostings.slice(0, 3).map(jobPosting => (
                    <Card centered key={jobPosting.id}>
                      <Popup style={style} inverted content='Add to favorites' trigger={<Button color="black" style={{ background: "#22a2dd" }} onClick={() => handleAddToFavorite(jobPosting)} icon='like' />} />
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
                          <Card.Content extra>
                            <Button fluid><Link to={`/jobPosting/${jobPosting.id}`}>Apply for a job</Link></Button>
                          </Card.Content>
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
    </div >
  )
}