import React, { Component } from 'react'
import { View, StyleSheet,TextInput,ScrollView } from 'react-native'
import { Text,Button } from "react-native-ui-kitten"
import { connect } from "react-redux"
import { toggleModal } from "../../redux/actions"

class ExperienceForm extends Component {
    state = {
        institutionName:""
    }
    onInputChangeHandler = (e, name) => {
        
    }
    render() {
        return (
            <View style={styles.modalContainer}>
                <ScrollView>
                    <View style={styles.eduTitleWrapper}>
                        <Text
                            category="h6"
                            style={styles.eduTitle}
                        >
                            Experience Form
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <View>
                                <Text style={styles.label}>
                                    Job Title
                                </Text>
                            </View>
                            <TextInput
                                onChange={(e)=>{this.onInputChangeHandler(e,"jobTitle")}}
                                style={{...styles.formContro,...styles.formControlDark}}
                                placeholder="Web Developer etc"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <View>
                                <Text style={styles.label}>
                                    Organization Name
                                </Text>
                            </View>
                            <TextInput
                                onChange={(e)=>{this.onInputChangeHandler(e,"organizationName")}}
                                style={{...styles.formContro,...styles.formControlDark}}
                                placeholder="Systems,Microsoft etc"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <View>
                                <Text style={styles.label}>
                                    Job Duration
                                </Text>
                            </View>
                            <View style={styles.formInline}>
                                <TextInput
                                    onChange={(e)=>{this.onInputChangeHandler(e,"yearStart")}}
                                    style={{...styles.formContro,...styles.formControlDark,width:"45%"}}
                                    placeholder="2011"
                                />
                                <TextInput
                                    onChange={(e)=>{this.onInputChangeHandler(e,"yearEnd")}}
                                    style={{...styles.formContro,...styles.formControlDark,width:"45%"}}
                                    placeholder="2013"
                                />
                            </View>
                        </View>
                        <View style={styles.formGroup}>
                            <View>
                                <Text style={styles.label}>
                                    City
                                </Text>
                            </View>
                            <TextInput
                                onChange={(e)=>{this.onInputChangeHandler(e,"experienceCity")}}
                                style={{...styles.formContro,...styles.formControlDark}}
                                placeholder="California etc"
                            />
                        </View>
                        <View style={styles.formBtns}>
                            <View style={styles.formGroup}>
                                <Button size="small" >
                                    Save
                                </Button>
                            </View>
                            <View style={styles.formGroup}>
                                <Button 
                                    size="small" 
                                    status="white"
                                    onPress={()=>{
                                        this.props.toggleModal("modalExpVisible",false)
                                    }}
                                >
                                    Cancel
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        marginTop:10,
        paddingHorizontal: 20,
        flex:1
    },
    eduTitleWrapper: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor:"#074e84"
    },
    eduTitle: {
        color:"#074e84",
        textTransform:"uppercase",
        fontWeight:"bold"
    },
    form: {
        paddingVertical:10,
    },
    formGroup: {
        marginVertical: 5,
    },
    label: {
        color: "#A1A8B7",
        fontSize: 12,
        textTransform:"uppercase",
        marginBottom:5
    },
    labelDark: {
        color: "black"
    },
    formControl: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white",
    },
    formControlDark: {
        borderColor: "#BEBDBD",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal:20,
        color: "black",
        fontWeight:"bold",
        width: "100%",
        borderBottomColor: "#BEBDBD",
        borderBottomWidth: 1,
        borderRadius:5,
    },
    formInline:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    formBtns:{
        marginTop:20,
    },
    inputStyle:{
        borderWidth: 1,
        borderColor: "#F7F9FC",
        borderRadius: 3,
        paddingLeft: 5,
        paddingVertical:10,
        backgroundColor:"#F7F9FC"
    },
});

const mapStateToProps = (state) => {
    return {
        modalEduVisible:state.userReducer.modalEduVisible,
        modalExpVisible: state.userReducer.modalExpVisible
    } 
}

export default connect(mapStateToProps, {toggleModal})(ExperienceForm)