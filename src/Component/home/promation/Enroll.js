import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { validate } from "../../ui/misc";
import { firebasePromations } from "../../../firebase";

import FormField from "../../ui/formFields";

class Enroll extends Component {
  state = {
    formError: false,
    formSucces: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm(element) {
    // Clone form data
    const newFormData = { ...this.state.formdata };
    const newElement = { ...newFormData[element.id] };

    //Get value from form data
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

  resetFormSucces(type) {
    // Clone formdata
    const newFormData = { ...this.state.formdata };

    //Set somedata to clon
    for (let key in newFormData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";
    }

    //Set again data to state
    this.setState({
      formError: false,
      formdata: newFormData,
      formSucces: type ? "Congratulation" : "Already on the database"
    });

    this.succesMessage();
  }

  succesMessage() {
    setTimeout(() => {
      this.setState({
        formSucces: ""
      });
    }, 2000);
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    //
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      //Kiem tra du lieu da co trong database chua (Firebase)
      firebasePromations
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            firebasePromations.push(dataToSubmit);
            this.resetFormSucces(true);
          } else {
            this.resetFormSucces(false);
          }
        });
    } else {
      this.setState({
        formError: true
      });
    }
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">Something is wrong,try again</div>
              ) : null}
              <div className="success_label">{this.state.formSucces}</div>
              <button onClick={event => this.submitForm(event)}>Enroll</button>
              <div className="enroll_discl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                illo repellendus error amet eos ipsa vel ducimus voluptas neque
                soluta nam asperiores odio et sit culpa eum, vitae recusandae,
                iusto.
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
