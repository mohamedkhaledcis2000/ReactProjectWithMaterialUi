import "./items.css"
import {
  Typography,
  AppBar,
  Card,
  CardAction,
  CssBaseline,
  CardContent,
  Grid,
  Button,
  Container,
  Toolbar,
  ButtonGroup,
  CardMedia,
  CardActions,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
function App() {
  
  const cards =[1,2,3,4,5,6,7,8,9]
  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon style={{ marginRight: "20px" }} />
          <Typography variant="h5">Best Allbum</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              My New Allbum
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              this is my new allbum to try material ui
            </Typography>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="success"
                  style={{ marginRight: "50px" }}
                >
                  See All Photos
                </Button>
                <Button variant="contained" color="secondary">
                  Do Action{" "}
                </Button>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="md">
            <Grid className="main" container spacing={4} direction="row" rowSpacing="20px">
              <Grid className="items" item>
                {
                  cards.map((card)=>(
                    <Card sx={{ maxWidth: 345 }} >
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww&w=1000&q=80"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>

                  ))
                 
                }
                
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
