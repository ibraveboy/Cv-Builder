import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import Icon from "react-native-vector-icons/MaterialIcons"

class Welcome extends Component {
  toggleSidebar = () => {
    this.props.navigation.toggleDrawer();
  }
  render() {
    return (
      <Layout style={styles.container}>
      <ScrollView>
          <Layout
            style={styles.card}
            >
            <TouchableOpacity onPress={this.toggleSidebar} style={styles.menuIcon}>
              <Icon name="menu" color="white" size={35} />
            </TouchableOpacity>
            
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderImageWrapper}>
                <Image
                  style={styles.fullWidthImage}
                  source={{
                    uri:
                      'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg',
                  }}
                  resizeMethod="resize"
                  resizeMode="cover"
                />
              </View>
              <Button
                size="tiny"
                appearance="outline"
                style={styles.cardHeaderButton}>
                New Resume
              </Button>
            </View>
            <View style={styles.cardBody}>
              <Text category="h5" style={{color:"white"}}>Ameer Hamza</Text>
              {/* <Text
                category="s2"
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.cardLeftDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                accusamus quod odit ipsam neque adipisci non vitae obcaecati
                sunt! .
              </Text> */}
              <Text category="c2" style={styles.textMuted}>
                City,
                <Text category="label" style={styles.textMuted} >
                  {' '}
                  Country{' '}
                </Text>
              </Text>
            </View>
          </Layout>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
            }}>
            <View
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 2,
              }}>
              <Text category="h1">500+</Text>
            </View>
            <View
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text category="h1">New</Text>
              <Text category="h1">Templates</Text>
            </View>
          </View>

          <View>
            <View style={styles.headerTitle}>
              <Text category="s1">Popular Tags</Text>
            </View>
            <View style={{...styles.card,backgroundColor:"white",flexDirection:"row"}}>
              <Button style={styles.popularTag} size="tiny" status="primary">
                Computer Science
              </Button>
              <Button style={styles.popularTag} size="tiny" status="primary">
                Teaching
              </Button>
              <Button style={styles.popularTag} size="tiny" status="primary">
                Developer
              </Button>
            </View>
          </View>


          <View>
            <View style={styles.headerTitle}>
              <Text category="s1">Recent Templates</Text>
            </View>

            <View>
              <ScrollView horizontal={true} >
                <TouchableOpacity style={styles.templateImageWrapper}>
                  <Image
                    style={styles.fullWidthImage}
                    source={{
                      uri:
                        'http://gdj.graphicdesignjunction.com/wp-content/uploads/2015/10/001_free_CV_Resume_template.jpg',
                    }}
                    resizeMethod="resize"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.templateImageWrapper}>
                  <Image
                    style={styles.fullWidthImage}
                    source={{
                      uri:
                        'http://gdj.graphicdesignjunction.com/wp-content/uploads/2015/10/001_free_CV_Resume_template.jpg',
                    }}
                    resizeMethod="resize"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.templateImageWrapper}>
                  <Image
                    style={styles.fullWidthImage}
                    source={{
                      uri:
                        'http://gdj.graphicdesignjunction.com/wp-content/uploads/2015/10/001_free_CV_Resume_template.jpg',
                    }}
                    resizeMethod="resize"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
      </ScrollView>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent',
    paddingBottom: 5,
    minHeight: '100%',
    
  },
  card: {
    display: 'flex',
    paddingHorizontal: '5%',
    flexDirection: 'column',
    backgroundColor: '#074e84',
  },
  menuIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50,
  },
  cardBody: {
    display: 'flex',
    alignItems:"center",
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  cardHeaderImageWrapper: {
    maxHeight: 200,
    minHeight:150,
    width:150,
    minWidth: 150,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  fullWidthImage: {
    height: '100%',
    borderRadius: 10,
  },
  cardHeaderButton: {
    width: 140,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  headerTitle: {
      marginVertical: 10,
      
  },
  textMuted: {
    color: 'white',
  },
  templateImageWrapper: {
    width: 150,
    height: 150,
  },
  popularTag: {
    marginHorizontal: 5,
  },
});

export default Welcome;
