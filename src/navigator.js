import { StackNavigator } from 'react-navigation';

import Home from './containers/home';
import Page2 from './containers/page2';

const Navigator = StackNavigator(
  {
    Home: { screen: Home },
    Page2: { screen: Page2 },
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
