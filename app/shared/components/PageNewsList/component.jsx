import React from 'react'
// import { Link } from 'react-router-dom'
import Masthead from '../Masthead/component.jsx'
import Grid from '../Grid/component.jsx'
import GridCol from '../GridCol/component.jsx'
import Heading from '../Heading/component.jsx'
import Footer from '../Footer/component.jsx'
import Main from '../Main/component.jsx'
import Accent from '../Accent/component.jsx'
import Pagination from '../Pagination/component.jsx'
import Article from '../Article/component.jsx'
import GA from '../GoogleAnalytics/component.jsx'

export default class PageNewsList extends React.Component {
  handlePageChange (current) {
    console.log(current)
  }

  render () {
    console.log(props.list[5])
    return (
      <React.Fragment>
        <Masthead path={props.location}/>
        <Accent className='accent--shallow'>
          <Heading type='h1' className='h2 spacing-left spacing--single'
                   text={props.title}/>
        </Accent>
        <Main>
          <Grid>
            <GridCol className='col-12 col-sm-10 offset-sm-1'>
              <ul
                className='list-unstyled list-offset'>
                {props.list && props.list
                  .map((item, i) => {
                    item['type'] = 'li'
                    return <Article {...item} key={item.sys.id}/>
                  })}
              </ul>
              <Pagination
                pageCount={total / 10}
                onPageChange={this.handlePageChange}
              />
            </GridCol>
          </Grid>
        </Main>
        <Footer/>
        <GA/>
      </React.Fragment>
    )
  }
}
