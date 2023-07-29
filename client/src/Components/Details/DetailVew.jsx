import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";

//components
import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";
import "./Details.css";

const Component = styled(Box)`
  background: #f2f2f2;
  margintop: 55px;
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

const DetailVew = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) {
      // product is available and is is equal to poduct.id
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);
  console.log(product);

  return (
    <Component>
      {/* loading should betrue and the product object should have >=1 keys only
      then render the following jsx */}
      {!loading && product && Object.keys(product).length && (
        <Grid className="Container" container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8}>
            <ProductDetail className="productDetails" product={product} />
          </RightContainer>
        </Grid>
      )}
    </Component>
  );
};

export default DetailVew;
