import DefaultTemplate from "../../templates/DefaultTemplate";
import Container from "../../components/container";
import CountDown from "../../components/count-down";
import TaskForm from "../../components/task-form";
import { useEffect } from "react";
import { setPageTitle } from "../../utils/setPageTitle";
import { siteConfig } from "../../constants/siteConfig";

function Home() {

  useEffect(()=> {
    setPageTitle(`Home | ${siteConfig.name}`);
  },[]);

  return (
    <>
      <DefaultTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <TaskForm />
        </Container>
      </DefaultTemplate>
    </>
  );
}

export default Home;
