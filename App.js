import React from 'react';
import { LoginScreen } from './views/login/screenLogin';
import { TestScreen } from './views/test/screenTest';
import { createBottomTabNavigator, createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import {StyleSheet, View, Text, StatusBar, ImageBackground, Dimensions} from 'react-native'
/*
const tabNavitor = createBottomTabNavigator(
    {
        Login: LoginScreen,
        Test: TestScreen,
    },
);

export default createAppContainer(tabNavitor);*/


const BG_IMAGE = require('./assets/bg_screen1.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class App extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
                    <View style={styles.container}>
                        <StatusBar
                            barStyle="light-content"
                            backgroundColor="#4F6D7A"
                        />
                        <Text style={styles.welcome}>
                            Click on the Button to continue!
                        </Text>
                        <Button
                            title="Get Started"
                            buttonStyle={{
                                height: 50,
                                width: 250,
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 15,
                            }}
                            containerStyle={{ marginVertical: 20 }}
                            titleStyle={{ fontWeight: 'bold', color: 'white', fontSize: 22 }}
                            onPress={() => this.props.navigation.navigate('Login')}
                        />
                        <Button
                            title="View Another Examples"
                            buttonStyle={{
                                height: 50,
                                width: 250,
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 15,
                            }}
                            containerStyle={{ marginVertical: 20 }}
                            titleStyle={{ fontWeight: 'bold', color: 'white', fontSize: 22 }}
                            onPress={() => this.props.navigation.navigate('Test')}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const RootNavigator = createSwitchNavigator(
    {
        Home: App,
        Login: LoginScreen,
        Test: TestScreen,
    },
    {
        initialRouteName: "Home"
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#F5FCFF',
    },
    bgImage: {
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    }
});

export default createAppContainer(RootNavigator);