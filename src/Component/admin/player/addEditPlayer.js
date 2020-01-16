import React, { Component } from 'react';
import { validate } from "../../ui/misc";
import { firebasePlayer, firebaseDB, firebase } from "../../../firebase";

import AdminLayout from "../../../Hoc(Hight order component)/AdminLayout";
import FormField from "../../ui/formFields";

class AddEditPlayer extends Component {

  state = {
    playerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: '',
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Player Name",
          name: "name_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },

      lastname: {
        element: "input",
        value: "",
        config: {
          label: "Player Last Name",
          name: "lastname_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },

      number: {
        element: "input",
        value: "",
        config: {
          label: "Player number",
          name: "number_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },

      position: {
        element: "select",
        value: "",
        config: {
          label: "Select a position",
          name: "select_position",
          type: "select",
          options: [
            {key: "Keeper",value: "Keeper"},
            {key: "Defence",value: "Defence"},
            {key: "Midfield",value: "Midfield"},
            {key: "Striker",value: "Striker"}
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
    }
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;

    if (!playerId) {
      // Add player
      this.setState({
        formType: 'Add player'
      })


    } else {
      // Edit Player
    }
  }

  updateForm(element) {
    // Clone form data
    const newFormData = { ...this.state.formdata };
    const newElement = { ...newFormData[element.id] };

    //Get value and valiData from form data
    newElement.value = element.event.target.value;
    let validData = validate(newElement);

    //Set data to newElement
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    // Set data newFormData form newElement
    newFormData[element.id] = newElement;

    //Set data to state
    this.setState({
      formError: false,
      formdata: newFormData
    });
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }



    if (formIsValid) {

    } else {
      this.setState({
        formError: true
      });
    }
  }

  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>
            {this.state.formType}
          </h2>
          <div>
            <form onSubmit={(e) => this.submitForm(e)}>

              <FormField
                id={"name"}
                formdata={this.state.formdata.name}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={"lastname"}
                formdata={this.state.formdata.lastname}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={"number"}
                formdata={this.state.formdata.number}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={"position"}
                formdata={this.state.formdata.position}
                change={element => this.updateForm(element)}
              />

              <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ? (
                <div className="error_label">Something is wrong </div>
              ) : (
                " "
              )}

              <div className="admin_submit">
                <button onClick={event => this.submitForm(event)}>
                  {this.state.formType}
                </button>
              </div>


            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }

}

export default AddEditPlayer;
