import React, { Component, Fragment } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

//title, artwork image, short description, rental price
// const genre = response.data.results[0].primaryGenreName

class MovieCard extends Component {
    render() {
        const {
            movie 
        } = this.props
        const artwork = movie.artworkUrl100.split('100x100bb.jpg')[0] + '300x300bb.jpg'
        const description = movie.shortDescription ? (
            movie.shortDescription + '...'
        ) : movie.longDescription ? (
            movie.longDescription.substring(0, 100) + '...'
        ) : (
            null
        )

        const price = movie.trackRentalPrice ? (
            '$' + movie.trackRentalPrice
        ) : ( 
            'No Rental Option'
        )
      
        return (
            <Card 
                href="/"
                raised>
            <Image src={artwork}/>
            <Card.Content>
                <Card.Header> {movie.trackName} </Card.Header>
                <Card.Meta> {price}   </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
                {/* <Card.Content extra>
            
                    <a>
                        <Icon name='user'/>
                        10 Friends
                    </a>
                </Card.Content> */}
            </Card.Content>
            </Card>
        )
    }
}

export default MovieCard;
