import React from 'react';
import { StyleSheet, Text, View, ScrollView, AppRegistry } from 'react-native';
import { ButtonCustom } from '../../components/ButtonCustom';
import { Button, Avatar, Badge, Icon, withBadge, ButtonGroup, ListItem, Card, Image, CheckBox, Input, PricingCard, SocialIcon, Tooltip  } from 'react-native-elements';

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
];

export class TestScreen extends React.Component {
    constructor () {
        super();
        this.state = {
            selectedIndex: 2
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['Hello', 'World', 'Buttons'];
        const {selectedIndex} = this.state;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                    <ButtonCustom onPress={() => console.log('button pressed!')}> Create Account </ButtonCustom>
                    <Button
                        raised
                        icon={{name: 'home', size: 32}}
                        buttonStyle={{backgroundColor: '#00aeef', borderRadius: 10}}
                        textStyle={{textAlign: 'center'}}
                        title={`Welcome to\nReact Native Elements`}
                    />
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />

                    <Avatar
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}
                        showEditButton
                    />
                    <Avatar rounded icon={{name: 'home'}}/>
                    <Avatar rounded title="MD"/>
                    <Badge value="99+" status="error"/>
                    <Badge value={<Text>My Custom Badge</Text>}/>

                    <PricingCard
                        color="#4f9deb"
                        title="Free"
                        price="$0"
                        info={['1 User', 'Basic Support', 'All Core Features']}
                        button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
                    />

                    <Button
                        title="Outline button"
                        type="outline"
                    />

                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height: 50}}
                    />

                    <Card title="CARD WITH DIVIDER">
                        {
                            users.map((u, i) => {
                                return (
                                    <View key={i} style={styles.user}>
                                        <Image
                                            style={styles.image}
                                            resizeMode="cover"
                                            source={{uri: u.avatar}}
                                        />
                                        <Text style={styles.name}>{u.name}</Text>
                                    </View>
                                );
                            })
                        }
                    </Card>

                    <Tooltip popover={<Text>Info here</Text>}>
                        <Text>Press me</Text>
                    </Tooltip>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <SocialIcon
                            type='twitter'
                        />
                        <SocialIcon
                            type='twitter'
                        />
                        <SocialIcon
                            type='twitter'
                        />
                    </View>

                    <Input
                        placeholder='INPUT WITH ERROR MESSAGE'
                        errorStyle={{color: 'red'}}
                        errorMessage='ENTER A VALID ERROR HERE'
                    />

                    <CheckBox
                        center
                        title='Click Here'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                    />

                    <CheckBox
                        title='Click Here'
                        checked={this.state.checked}
                    />

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
    'AwesomeProject',
    () => IScrolledDownAndWhatHappenedNextShockedMe);