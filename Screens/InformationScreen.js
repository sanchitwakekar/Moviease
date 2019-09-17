/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import React, { Fragment } from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    Button,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { connect } from 'react-redux';
import { GetDetails, SaveinWatchlist, DeletefromWatchlist } from '../Actions/GetDetailsAction';

let mydata;
const Realm = require('realm');
const Movie = {
    name: 'Movie',
    properties: {
        imdbID: 'string',
        Year: 'string',
        Released: 'string',
        Title: 'string',
        Runtime: 'string',
        Actors: 'string'
    }
}
class InformationScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log('schema created');
    }

    static navigationOptions = {
        headerTransparent: true
    };

    componentDidMount() {
        const { navigation } = this.props;
        const imdbID = navigation.getParam('imdbID', 'NO-ID');
        this.props.register_user(imdbID);
    }

    save = async () => {
        try {
            Realm.open({ schema: [Movie] })
                .then(realm => {
                    realm.write(() => {
                        var ID = realm.objects('Movie').length + 1;
                        realm.create('Movie', {
                            imdbID: this.props.DETAILS.Details.imdbID,
                            Year: this.props.DETAILS.Details.Year,
                            Released: this.props.DETAILS.Details.Released,
                            Title: this.props.DETAILS.Details.Title,
                            Runtime: this.props.DETAILS.Details.Runtime,
                            Actors: this.props.DETAILS.Details.Actors,
                            Poster: this.props.DETAILS.Details.Poster
                        })
                    });
                });
            console.log('added');

        } catch (e) { }
    };
    delete = async () => {
        try {

            Realm.open({ schema: [Movie] })
                .then(realm => {
                    mydata = realm.objects('Movie');
                    console.log(mydata[1]);
                    console.log(realm.objects('Movie').length);
                })
        } catch (e) { }
    };
    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView >
                        <View>
                            <Image
                                style={{ width: '100%', height: '50%' }}
                                source={{ uri: this.props.DETAILS.Details.Poster }}
                            />
                            <View style={{ marginTop: 10, alignSelf: 'flex-end', flexDirection: 'row' }}>
                                <TouchableOpacity onPress={this.save} style={styles.submitButton}>
                                    <Image
                                        style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                                        source={require('../Assets/heart.png')}

                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.delete} style={styles.submitButton}>
                                    <Image
                                        style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                                        source={require('../Assets/delete.png')}
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.sectionTitle}>{this.props.DETAILS.Details.Title}</Text>
                            <Text style={styles.sectionTitle}>{this.props.DETAILS.Details.Year}</Text>
                            <Text style={styles.sectionTitle}>{this.props.DETAILS.Details.Released}</Text>
                            <Text style={styles.sectionTitle}>{this.props.DETAILS.Details.Runtime}</Text>
                            <Text style={styles.sectionTitle}>{this.props.DETAILS.Details.Actors}</Text>

                            <FlatList
                                data={mydata}
                                renderItem={({ item }) => {
                                    //        console.log(item);
                                    return (
                                        <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
                                            <TouchableOpacity>

                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                                //Setting the number of column
                                numColumns={2}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        margin: 5,
        fontSize: 24,
        color: '#FF3345',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    input: {
        margin: 15,
        height: 40,
        padding: 5,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        bottom: 10,
        right: 10,
    },

});
function mapStatetoProps(state) {
    console.log(state);

    return {
        DETAILS: state.DETAILS,
    }
}
function mapDispatchtoProps(dispatch) {
    return {
        register_user: (imdbID) => {
            dispatch(GetDetails(imdbID));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(InformationScreen);

