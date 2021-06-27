import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, Card, Label, Button } from 'semantic-ui-react'
import { removeToFavorite } from '../store/actions/favoriteActions'

export default function FavoriteSummary() {

    const { favoriteItems } = useSelector(state => state.favorite)

    const dispatch = useDispatch()

    const handleRemoveToFavorite=(jobPosting)=>{
        dispatch(removeToFavorite(jobPosting))
    }

    return (
        <div>
            <Dropdown style={{ maxHeight: "2em" }} item text="Favorites">
                <Dropdown.Menu>
                    {
                        favoriteItems.map((favoriteItem) => (
                            <Dropdown.Item>
                                <Label>{favoriteItem.jobPosting.employerUser?.companyName}</Label>
                                <Card.Meta size="tiny">{favoriteItem.jobPosting.jobPosition?.position}
                                <Button style={{margin:"5px",padding:"5px",fontSize:"13px"}} onClick={()=>handleRemoveToFavorite(favoriteItem.jobPosting)} color="red" >Sil</Button></Card.Meta>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item to="/cart">Go to favorites</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
