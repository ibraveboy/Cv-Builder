import React, { Component } from 'react'
import { View,TouchableOpacity,StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import { connect } from "react-redux"
import { toggleModal } from "../../redux/actions"

class AddButton extends Component {
    render() {
        return (
            <View style={styles.addButton}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.toggleModal(this.props.modalName,true)
                    }}
                >
                    <Icon name="add-circle" color="#074e84" size={40} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addButton: {
        marginVertical: 20,
        justifyContent: "center",
        alignItems:"center"
    }
})

const mapStateToProps = (state) => {
    return {
        modalEduVisible:state.userReducer.modalEduVisible,
        modalExpVisible:state.userReducer.modalExpVisible
    }
}

export default connect(mapStateToProps, {toggleModal})(AddButton)