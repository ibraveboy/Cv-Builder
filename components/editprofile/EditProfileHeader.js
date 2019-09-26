import React, { Component } from 'react'
import { View,TouchableOpacity,StyleSheet } from 'react-native'
import { Thumbnail } from "native-base"
import Icon from "react-native-vector-icons/MaterialIcons"
import ImagePicker from "react-native-image-picker"
import { withNavigation } from "react-navigation"


class EditProfileHeader extends Component {

    //Image Picker Module
    selectAvatar = () => {
        ImagePicker.launchImageLibrary({tintColor:"black"}, (photo) => {
            console.log(photo)
        })
    }

    //Drawer Toggler

    toggleSidebar = () => {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <View style={styles.editProfileHeader}>
                    
                <TouchableOpacity onPress={this.toggleSidebar} style={styles.menuIcon}>
                    <Icon name="menu" color="white" size={35} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.selectAvatar}
                    style={{ position: "relative" }}
                    >
                    <Thumbnail
                        large
                        source={
                            {
                                uri: "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg"
                            }
                        }
                        />
                    <Icon color="white" style={styles.editProfilePicIcon} name="add-a-photo" size={30} />
                </TouchableOpacity>

                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.formControl}
                        textContentType="name"
                        defaultValue="Ameer Hamza"
                        
                        />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    editProfileHeader: {
        height: 180,
        backgroundColor: "#074e84",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    menuIcon: {
        position: "absolute",
        top: 20,
        left: 20,
    },
    editProfilePicIcon: {
        position: "absolute",
        bottom: -10,
        right:0
    },
    formGroup: {
        marginVertical: 5,
    },
    formControl: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white"
    },
})

export default withNavigation(EditProfileHeader)