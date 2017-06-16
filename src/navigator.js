import { StackNavigator } from 'react-navigation';

import Home from './containers/home';
import Page2 from './containers/page2';
import Page3 from './containers/page2s';

const Navigator = StackNavigator(
  {
    Home: { screen: Home },
    Page2: { screen: Page2 },
		Page3: { screen: Page3 },
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
