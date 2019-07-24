import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
} from 'react-native';

export default class CheckinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: '',
      projects: [
        {name: 'Proyecto 1', value: 'y'},
        {name: 'Proyecto 2', value: 'x'},
        {name: 'Proyecto 3', value: 'z'},
        {name: 'Proyecto 4', value: 'a'}
      ]
    };
  }

  loadProjects() {
    return this.state.projects.map((project, i) => (
      <Picker.Item key={i} label={project.name} value={project.value} />
    ));
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.currentProject}
        style={{ height: 20, width: '100%' }}
        iosHeader='...'
        mode='dropdown'
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ currentProject: itemValue })
        }>
        {this.loadProjects()}
      </Picker>
    );
  }
}