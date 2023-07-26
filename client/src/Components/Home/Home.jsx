import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { fetchProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // getProducts(); we cant call a reducer function like this as then the value of dispatch will be null, thus
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.getProducts); // this getProducts is from store.js
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggested items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Seasons Top Picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals On Acessories"
          timer={false}
        />
      </Container>
    </>
  );
};

export default Home;
