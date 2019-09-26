import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from "react-native-ui-kitten"

class ExpListView extends Component {
    render() {
        return (
            <View style={styles.ListView}>
                <View>
                    <Text category="p1" style={styles.listBoldText}>
                        Web Devloper
                    </Text>
                </View>
                <View>
                    <Text category="s1">
                        AUWDtech
                    </Text>
                </View>
                <View>
                    <Text category="p1">
                        Lahore{" "}
                        <Text category="label">
                            (2017-2018)
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ListView: {
        marginBottom:10,
    },
    listBoldText: {
        fontWeight:"bold"
    },
})

export default ExpListView