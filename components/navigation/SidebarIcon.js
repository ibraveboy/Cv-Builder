import React, { Component } from 'react'
import { StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

export default class SidebarIcon extends Component {
    render() {
        const IconName = (() => {
            if (this.props.route.routeName == "Home") {
                return "home"
            }
            else if (this.props.route.routeName == "EditProfile") {
                return "edit"
            }
            else if (this.props.route.routeName == "Settings") {
                return "settings"
            }
        })()
        
        return (
            <Icon
                name={IconName}
                size={25}
                style={(this.props.routeName==this.props.route.routeName)?styles.activeBarLabel:styles.barLabel} />
        )
    }
}

const styles = StyleSheet.create({
    barLabel: {
        color: "white",
        fontWeight:"bold"
    },
    activeBarLabel: {
        color: "#074e84",
        fontWeight:"bold"
    }
})