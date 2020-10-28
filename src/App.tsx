// @ts-nocheck
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { IStackProps, Overlay, Image, ImageFit, Stack, loadTheme, createTheme, Persona, IPersonaSharedProps, PersonaSize, PersonaPresence, Text, IStyleSet, Pivot, PivotItem, Label, ILabelStyles } from 'office-ui-fabric-react';
import { useMediaQuery } from 'react-responsive'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
const examplePersona: IPersonaSharedProps = {
  imageUrl: './images/propic.jpg',
  imageInitials: 'MM',
  text: 'hiitsmax',
  secondaryText: 'trying to envision the world',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
};

const myTheme = createTheme({
  palette: {
    themePrimary: '#0073ff',
    themeLighterAlt: '#00050a',
    themeLighter: '#001229',
    themeLight: '#00224d',
    themeTertiary: '#004599',
    themeSecondary: '#0065e0',
    themeDarkAlt: '#1981ff',
    themeDark: '#3d94ff',
    themeDarker: '#70b0ff',
    neutralLighterAlt: '#0b0b0b',
    neutralLighter: '#151515',
    neutralLight: '#252525',
    neutralQuaternaryAlt: '#2f2f2f',
    neutralQuaternary: '#373737',
    neutralTertiaryAlt: '#595959',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#000000',
  }
});


export const App: React.FunctionComponent = () => {
  const [selectedKey, setSelectedKey] = React.useState('');
  const history = useHistory();
  const location = useLocation();

  switch (location.pathname) {
    case '/':
      if (selectedKey !== "hello") {
        setSelectedKey("hello");
      }
      break
    case '/projects':
      if (selectedKey !== "projects") {
        setSelectedKey("projects");

        console.log('bro');
      }
      break
  }

  const handleLinkClick = (item: PivotItem) => {
    //setSelectedKey(item.props.itemKey);
    if (item.props.itemKey === "hello") {
      history.push("/");
    } else if (item.props.itemKey === "projects") {
      history.push("/projects");
    } else if (item.props.itemKey === "vision") {
      history.push("/vision");
    } else if (item.props.itemKey === "about") {
      history.push("/about");
    }
  };

  const getTabId = (itemKey: string) => {
    return `ShapeColorPivot_${itemKey}`;
  };

  const isMobile = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  loadTheme(myTheme);

  return (
    <div>
      <Stack className="titleWrapper" style={{ padding: '1em' }} {...isMobile ? { horizontal: true } : { vertical: true }} horizontalAlign="space-between" verticalAlign="center">

        <Persona
          style={{ marginRight: '1em' }}
          {...examplePersona}
          size={PersonaSize.size56}

          //presence={PersonaPresence.away}
          hidePersonaDetails={false}
        />

        <Pivot
          aria-label="Separately Rendered Content Pivot Example"
          style={{ ...!isMobile ? { paddingTop: '1em' } : {} }}
          // eslint-disable-next-line react/jsx-no-bind
          onLinkClick={handleLinkClick}
          headersOnly={true}
          selectedKey={selectedKey}
          getTabId={getTabId}
        >
          <PivotItem headerText="hello" itemKey="hello" />
          <PivotItem headerText="the projects" itemKey="projects" />
          <PivotItem headerText="the vision" itemKey="vision" />
          <PivotItem headerText="about me" itemKey="about" />

        </Pivot>

      </Stack>
      <Switch>
        <Route path="/projects">
          <Stack vertical>
            <Stack horizontal horizontalAlign="center">
              <Text style={{ color: "white" }} variant="xLargePlus">it's gonna be one hell of a ride</Text>
            </Stack>
            <Stack style={{paddingLeft:'2em', paddingTop:'2em'}}>
              <div style={{width:'8em', height:'8em', backgroundColor:'red'}}>

              </div>
            </Stack>
          </Stack>
        </Route>
        <Route path="/">
          <Carousel className="car" infiniteLoop={true} showArrows={true} showIndicators={true} showThumbs={false} autoPlay={true} dynamicHeight={true} >
            <div>
              <Image className="slideWrapper" imageFit={ImageFit.cover} maximizeFrame={true} src="./images/slides/1.jpg" />
            </div>
            <div>
              <Image className="slideWrapper" imageFit={ImageFit.cover} maximizeFrame={true} src="./images/slides/2.jpg" />
            </div>
            <div>
              <Image className="slideWrapper" imageFit={ImageFit.cover} maximizeFrame={true} src="./images/slides/3.jpg" />
            </div>
            <div>
              <Image className="slideWrapper" imageFit={ImageFit.cover} maximizeFrame={true} src="./images/slides/4.jpg" />
            </div>
            <div>
              <Image className="slideWrapper" imageFit={ImageFit.cover} maximizeFrame={true} src="./images/slides/5.jpg" />
            </div>
          </Carousel>
        </Route>
      </Switch>
    </div>

  );
};

