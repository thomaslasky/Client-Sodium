import React from "react";
import CardDeckCustomPart from "../components/CardDeckCustomPart/CardDeckCustomPart";
import PreorderPersonalInfoForm from "../components/PreorderPersonalInfoForm/PreorderPersonalInfoForm";
import {Form, Button} from "reactstrap";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";

export default class Preorder extends React.Component {
    handlePreorderSubmit(formInputs) {
        let preorder = new URLSearchParams();
        let filteredFormInputs = formInputs.filter(
            input => !(input.type === "radio" && input.checked === false)
        );
        
        let inputsToString = filteredFormInputs.map(inputObject =>
                                                        JSON.stringify(inputObject)
        );
        
        let inputsWithSeparator = inputsToString.join("|");
        
        preorder.append("inputs", inputsWithSeparator);
        
        axios
            .post("http://localhost:8000/preorder", preorder)
            .then(function (response) {
                if (response.data["Response"] === true) {
                    return toast.success("Email envoyé !", {
                        position       : "bottom-right",
                        autoClose      : 5000,
                        hideProgressBar: true,
                        closeOnClick   : true,
                        pauseOnHover   : true,
                        draggable      : true
                    });
                } else {
                    return toast.warn("Une erreur est survenu, veuillez reessayer", {
                        position       : "bottom-right",
                        autoClose      : 5000,
                        hideProgressBar: true,
                        closeOnClick   : true,
                        pauseOnHover   : true,
                        draggable      : true
                    });
                }
            })
    }
    
    render() {
        return (
            <div className="container-fluid mt-2">
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        const fields = Object.values(e.target.elements).map(input => ({
                            name   : input.name,
                            value  : input.value,
                            checked: input.checked,
                            type   : input.type
                        }));
                        this.handlePreorderSubmit(fields);
                    }}
                >
                    {this.props.customParts ? (
                        this.props.customParts.map(customPart => (
                            <div className="row mb-2" key={customPart.id}>
                                <CardDeckCustomPart customPart={customPart} />
                            </div>
                        ))
                    ) : (
                        <div className="row mb-2">No Customizable Parts available</div>
                    )}
                    <div className="row">
                        <div className="offset-md-3 col-md-6">
                            <PreorderPersonalInfoForm />
                        </div>
                    </div>
                    <Button className="m-auto d-block">Submit</Button>
                </Form>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </div>
        );
    }
}
