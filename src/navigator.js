import { StackNavigator } from 'react-navigation';

import Home from './containers/home';
import Page2 from './containers/page2';
import Events from './containers/events';
import EventsMain from './containers/eventsmain';

const Navigator = StackNavigator(
  {
    Home: { screen: Home },
    Page2: { screen: Page2 },
    Events: { screen: Events },
		EventsMain: { screen: EventsMain },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        shadowOpacity: 0,
      },
    },
  }
);

export default Navigator;
