import React, { Component } from 'react'
import { View, StyleSheet, ScrollView,TouchableOpacity,TextInput,Modal } from 'react-native'
import { Input,Text } from "react-native-ui-kitten"
import { DatePicker, Label } from "native-base"
import EducationForm from "../components/modal/EducationForm"
import AddButton from '../components/modal/AddButton'
import EduListView from '../components/listview/EduListView'
import ExpListView from '../components/listview/ExpListView'
import ExperienceForm from '../components/modal/ExperienceForm'
import EditProfileHeader from '../components/editprofile/EditProfileHeader'
 
class EditProfile extends Component {
    state = {
        name: "",
        email: "hamza.butt32@hotmail.com",
        city: "",
        country:"",
        dob: "",
    }
    
    onInputChangeHandler = (e, name) => {
        console.log(e.nativeEvent.text)
        this.setState({
            [name]:e.nativeEvent.text
        })
    }
    onDateChangeHandler = (selectedDate) => {
        this.setState({
            dob:selectedDate
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <EditProfileHeader />
                <ScrollView>
                    <View style={styles.editProfileBody}>
                        <View style={styles.eduTitleWrapper}>
                            <Text
                                category="h6"
                                style={styles.eduTitle}
                            >
                                Personal Details
                            </Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Input
                                label="Email"
                                size="small"
                                defaultValue={this.state.email}
                                onChange={(e) => {
                                    this.onInputChangeHandler(e,"email")
                                }}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Input
                                label="City"
                                size="small"
                                defaultValue={this.state.city}
                                placeholder="Lahore etc"
                                onChange={(e) => {
                                    this.onInputChangeHandler(e,"city")
                                }}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Input
                                label="Country"
                                size="small"
                                defaultValue={this.state.country}

                                onChange={(e) => {
                                    this.onInputChangeHandler(e,"country")
                                }}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Label style={styles.label}>
                                Birthday
                            </Label>
                            <View style={styles.inputStyle}>
                                <DatePicker
                                    placeHolderTextStyle={{color:"#999999",fontSize:12}}
                                    placeHolderText="No Date Selected"
                                    textStyle={{ fontSize: 12 }}
                                    onDateChange={this.onDateChangeHandler}
                                />
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.eduTitleWrapper}>
                                <Text
                                    category="h6"
                                    style={styles.eduTitle}
                                >
                                    Education
                                </Text>
                            </View>
                            <EduListView />
                            <AddButton modalName="modalEduVisible"/>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.eduTitleWrapper}>
                                <Text
                                    category="h6"
                                    style={styles.eduTitle}
                                >
                                    Experience
                                </Text>
                            </View>
                            <ExpListView/>
                            <AddButton modalName="modalExpVisible" />
                        </View>
                    </View>
                </ScrollView>
                <Modal
                    visible={this.props.modalEduVisible}
                    animationType="slide"
                >
                    <EducationForm />
                </Modal>
                <Modal
                    visible={this.props.modalExpVisible}
                    animationType="slide"
                >
                    <ExperienceForm/>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    editProfileBody: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    eduTitleWrapper: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#074e84",
        marginBottom:10,
    },
    eduTitle: {
        color:"#074e84",
        textTransform:"uppercase",
        fontWeight:"bold"
    },
    
    formGroup: {
        marginVertical: 5,
    },
    label: {
        color: "#A1A8B7",
        fontSize: 14
    },
    labelDark: {
        color: "black"
    },
    formControl: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white"
    },
    formControlDark: {
        borderColor: "black",
        borderWidth: 1,
        paddingVertical: 0,
        color: "black",
        width: "100%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    inputStyle:{
        borderWidth: 1,
        borderColor: "#F7F9FC",
        borderRadius: 3,
        paddingLeft: 5,
        paddingVertical:10,
        backgroundColor:"#F7F9FC"
    },
    section: {
        marginVertical:10
    },
    
})


export default EditProfile;