import React, { Component } from 'react'
import {  View, ScrollView, StyleSheet,TouchableOpacity } from 'react-native'
import { HeaderBackButton, withNavigation } from "react-navigation"
import { Avatar, Text } from "react-native-ui-kitten"
import SidebarIcon from "./SidebarIcon"

class SideBar extends Component {
    state = {
        currentRouteName:""
    }
    render() {

        const listItems = this.props.navigation.state.routes.map((route,index) => {
            const routeName = this.state.currentRouteName || ((this.props.navigation.state.routeName == "Welcome") ? "Home" : this.props.navigation.state.routeName)
            
            return (
                <TouchableOpacity
                    key={index}
                    style={(routeName==route.routeName)?styles.activeBarListItem:styles.barListItem}
                    onPress={() => {
                        this.props.navigation.toggleDrawer();
                        this.props.navigation.navigate(route.routeName)
                        this.setState({currentRouteName:route.routeName})
                    }}>
                    <View>
                        <SidebarIcon routeName={routeName} route={route} />
                    </View>
                    <View style={styles.barLabelWrapper}>
                        <Text
                            category="h6"
                            style={(routeName==route.routeName)?styles.activeBarLabel:styles.barLabel}>
                            {(route.routeName=="EditProfile")?"Edit Profile":route.routeName}
                        </Text>
                    </View>

                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.barHeader}>
                        <HeaderBackButton onPress={()=>this.props.navigation.toggleDrawer()} title="back" tintColor="white" backTitleVisible={false} />
                    </View>
                    <View style={styles.barProfileWrapper}>
                        <View>
                            <Avatar
                                source={
                                    {
                                        uri: "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg"
                                    }
                                }
                                size="large"
                                style={styles.barAvatar}
                            />
                        </View>
                        <View style={styles.barLabelWrapper}>
                            <Text category="h6" style={styles.barLabel}>
                                Ameer Hamza
                            </Text>
                            <Text category="s2" style={styles.barLabel}>
                                hamza.butt32@hotmail.com
                            </Text>
                        </View>
                    </View>
                    <View style={styles.barList}>
                        {listItems}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default withNavigation(SideBar)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#074e84",
        paddingHorizontal:10
    },
    barHeader: {
        width:50,
        overflow:"hidden"
    },
    barProfileWrapper: {
        display: "flex",
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        
    },
    barList: {
        marginTop: 20,
    },
    barListItem: {
        display: "flex",
        flexDirection: "row",
        height: 50,
        paddingLeft:15,
        alignItems: "center",
        
    },
    barLabelWrapper: {
        marginLeft:10
    },
    barLabel: {
        color: "white",
        fontWeight:"bold"
    },
    activeBarListItem: {
        display: "flex",
        flexDirection: "row",
        height: 50,
        paddingLeft:15,
        alignItems: "center",
        backgroundColor: "white",
        
    },
    activeBarLabel: {
        color: "#074e84",
        fontWeight:"bold"
    }
})

