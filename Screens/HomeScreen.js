import React from "react";

import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { GetMovies } from "../Actions";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.props.search_movies(this.state.search);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput
          style={{ height: 40, borderWidth: 1 }}
          onChangeText={search => this.setState({ search })}
          placeholder="   Search"
          placeholderTextColor="#090909"
          color="#FF3345"
          onSubmitEditing={this.fetchData}
          value={this.state.search}
        />
        <FlatList
          data={this.props.movies}
          //onPress={() => this.props.navigation.navigation(Information)}

          renderItem={({ item }) => {
        //    console.log(item);
            return (
              <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
                <TouchableOpacity
                  onPress={() =>
                    navigate("Information", {
                      imdbID: item.imdbID
                    })
                  }
                >
                  <Image
                    style={styles.imageThumbnail}
                    source={{ uri: item.Poster }}
                  />
                  <Text style={styles.TextStyle}>{item.Title} </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    marginTop: 20,
    fontSize: 18,
    margin: 20,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 5,
    height: 120
  },
  TextStyle: {
    alignContent: "center",
    textAlign: "center",
    fontSize: 15,
    padding: 1
  }
});

function mapStatetoProps(state) {
  return {
    search: state.movies.search,
    movies: state.movies.movies
  };
}
function mapDispatchtoProps(dispatch) {
  return {
    search_movies: search => {
      dispatch(GetMovies(search));
    }
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(HomeScreen);
