import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { NavigationActions,StackActions } from "react-navigation"
import { connect } from "react-redux"
import { signinUser } from "../redux/actions"


class SignIn extends Component {
    state = {
        email: "",
        password:""
    }
    componentDidUpdate() {
        
        if (this.props.user.success) {
            Alert.alert("You successfully logged in.")
            const resetActions=StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName:"Welcome"})]
            })
            this.props.navigation.dispatch(resetActions)
        }
    }
    onChangeHandler = (e, key) => {
        this.setState({
            [key]:e.nativeEvent.text
        })
    }
    onChangeSubmitHandler = () => {
        this.props.signinUser({email:this.state.email,password:this.state.password})
    }
    render() {
        
        return (
            <View style={styles.centeredContainer}>
                <View style={styles.formGroup}>
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <Text style={styles.errorText}>
                        {this.props.user.error ? this.props.user.error.statement : ""}
                        {this.props.user.error ? (<Text style={{textDecorationLine:"underline"}} onPress={() => { this.props.navigation.navigate("SignUp") }}>here</Text>):"" }
                    </Text>
                </View>
                <View style={styles.wrapper}>

                    <View style={styles.formGroup}>
                        <TextInput id="email" placeholderTextColor="white" placeholder="Email" clearButtonMode="while-editing" textContentType="emailAddress" style={styles.formControl} onChange={(e)=>{this.onChangeHandler(e,"email")}}/>
                    </View>
                    <View style={styles.formGroup}>
                        <TextInput id="password" placeholderTextColor="white" placeholder="Password" clearButtonMode="while-editing" textContentType="password" style={styles.formControl} onChange={(e)=>{this.onChangeHandler(e,"password")}}/>
                    </View>
                    
                    <View style={styles.formSubmit}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Not registered yet? Sign-Up <Text style={styles.link} onPress={() => { this.props.navigation.navigate("SignUp") }}>here</Text></Text>
                        </View>

                        <TouchableOpacity onPress={this.onChangeSubmitHandler}>
                            <Text style={styles.formButton}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
        backgroundColor:"#074e84"
    },
    wrapper: {
        width:"80%"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        borderBottomColor: "#13effe",
        borderBottomWidth:1
    },
    formGroup: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        color: "white",
    },
    formControl: {
        color:"white",
        borderBottomWidth: 1,
        borderBottomColor:"white"
    },
    formSubmit: {
        marginTop: "10%",
    },
    formButton: {
        color: "white",
        textAlign: "center",
        backgroundColor: "#2e908c",
        fontWeight: "bold",
        paddingVertical:10,
    },
    link: {
        color: "#2e908c",
        fontSize: 16,
        textDecorationLine: "underline",
        textDecorationColor: "#2e908c",
        
    }
})

const mapStateToProps = (state) => {
    return {
        user:state.userReducer.user
    }
}

export default connect(mapStateToProps, {signinUser})(SignIn)