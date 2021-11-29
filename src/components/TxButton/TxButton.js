import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'

import styles from './TxButton.scss'

export default class TxButton extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        onPress: PropTypes.func
    }
    click () {
        this.props.onPress()
    }
    render () {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.click()}>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}