import { Grid, Card, CardActionArea,CardMedia,CardContent,Typography,CardActions,Button } from "@material-ui/core";
import NextLink from 'next/link';
import Layout from "../components/Layout";
import data from "../utilities/data";
import useStyles from "../utilities/styles";

export default function Home({ children }) {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h3 className={classes.secTittle}>Products</h3>

        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
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
                </NextLink>
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
