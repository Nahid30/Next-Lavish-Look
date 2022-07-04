import { Grid, Card, CardActionArea,CardMedia,CardContent,Typography,CardActions,Button } from "@material-ui/core";
import Layout from "../components/Layout";
import data from "../utilities/data";

export default function Home({ children }) {
  return (
    <Layout>
      <div>
        <h3>Welcome to Lavish Look</h3>

        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>
                    ${product.price}
                  </Typography>
                  <Button size="small" color="secondary">Add To Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
