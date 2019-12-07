import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const Home = ({ id, go, fetchedUser, fetchedGEO }) => (
  <Panel id={id}>
    <PanelHeader>Welcome Weather App</PanelHeader>
    {fetchedUser && (
      <Group title="Personal Details">
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          description={
            fetchedUser.city && fetchedUser.city.title
              ? fetchedUser.city.title
              : ""
          }
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>
        <Group titel="GEO POS">
          <Cell
          // before={fetchedGEO.available ? <p>{fetchedGEO.available}</p> : null}
          >
            {/* {fetchedGEO.available} */}

          </Cell>
        </Group>
      </Group>
    )}

    <Group title="Button Case">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="persik">
          Show me cat, please
        </Button>
      </Div>
    </Group>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

export default Home;
