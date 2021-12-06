import React from 'react'
import { SafeAreaView, TextInput, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './TxInputStyles.scss';

export default class TxInput extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text || ''
        }
    }
    onChangeText = (text) => {
        this.setState({ text: text })
    }
    render () {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChangeText(text)}
                        value={this.state.text}
                        secureTextEntry={this.props.secure}
                    />
                </View>
            </SafeAreaView>
        )
    }
}