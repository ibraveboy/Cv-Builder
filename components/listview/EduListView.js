import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from "react-native-ui-kitten"

class EduListView extends Component {
    render() {
        return (
            <View style={styles.ListView}>
                <View>
                    <Text category="p1" style={styles.listBoldText}>
                        BS Software Engineering
                    </Text>
                </View>
                <View>
                    <Text category="s1">
                        University of Gujrat Lahore Sub Campus,
                    </Text>
                </View>
                <View>
                    <Text category="p1">
                        Lahore{" "}
                        <Text category="label">
                            (2013-2017)
                        </Text>
                    </Text>
                </View>
                <View>
                    <Text category="label" style={styles.listBoldText}>
                        Percentage Or CGPA 3.4
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

export default EduListView