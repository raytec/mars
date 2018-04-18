import React from 'react';
import {TabNavigator} from 'react-navigation';
import ItemsListContainer from '../containers/ItemsListContainer';
import ItemDetailsContainer from '../containers/ItemDetailsContainer';

export default Tabs = TabNavigator(
    {
        HomeTab: {
            screen: ItemsListContainer,
            navigationOptions: {
                tabBarLabel: 'Mars photos list',
            }
        },
        DetailsTab: {
            screen: ItemDetailsContainer,
            navigationOptions: {
                tabBarLabel: 'Photo details',
            }
        }
    }, {
        swipeEnabled: true,
        animationEnabled: true
    }
);
