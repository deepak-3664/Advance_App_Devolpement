import '../../assets/css/card.css';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

const Carde = () => {
    return (
      <div className='mc'>
            <div className='Oc2'>
            <h3 className='Oc'>OUR COLLEGES</h3>
            </div>
            <div className="row">
              <div className='column'>
                <Card sx={{ maxWidth: 345, height:300   }}>
                    <CardMedia sx={{ height: 140 }} image="https://www.srikrishna.ac.in/images/Slider/Slide1.jpg" title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">SKCET</Typography>
                        <Typography variant="body2" color="text.secondary">
                            SRI KRISHNA COLLEGE OF ENGINNERING AND TECHNOLOGY
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to='/college'>Learn More</Link></Button>
                    </CardActions>
                </Card>
                </div>
              <div className='column'>
                <Card sx={{ maxWidth: 345, height:300  }}>
                    <CardMedia sx={{ height: 140 }} image="https://images.collegedunia.com/public/college_data/images/campusimage/14795614881479553285sri1.jpg" title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">SKCT</Typography>
                        <Typography variant="body2" color="text.secondary">
                           SRI KRISHNA COLLEGE OF TECHNOLOGY
                        </Typography>
                    </CardContent>
                    <br/>
                    <CardActions>
                        <Button size="small"><Link to='/college'>Learn More</Link></Button>
                    </CardActions>
                </Card>
                </div>
              <div className='column'>
                <Card sx={{ maxWidth: 345, height:300  }}>
                    <CardMedia sx={{ height: 140 }} image="https://www.srikrishna.ac.in/images/gallery/18_img.jpg" title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">SKASC</Typography>
                        <Typography variant="body2" color="text.secondary">
                            SRI KRISHNA ARTS AND SCIENCE COLLEGE
                        </Typography>
                    </CardContent>
                    <br/>
                    <CardActions>
                        <Button size="small"><Link to='/college'>Learn More</Link></Button>
                    </CardActions>
                </Card>
                </div>
             </div>
             </div>
  )
}

export default Carde