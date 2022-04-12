import * as React from "react";
import { 
  Layout, 
  Cover, 
  Summary, 
  Header, 
  Videos, 
  Photos, 
  Clients,
  Container 
} from "../components";


const indexPage = () => {

  return (
    <>
      <Layout>
        <Cover />
        <Summary />
        <Header>Our Work</Header>
        <Videos />
        <Header>Product Photography</Header>
        <Photos />
        <Header>Our Clients</Header>
        <Clients />
      </Layout> 
    </>
  )
}

export default indexPage