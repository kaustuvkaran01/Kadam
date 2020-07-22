// import React, { useState, Fragment } from "react";
// import ReactDOM from "react-dom";

// import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";
// import BloodyPure from "../pages/BloodyPure";

// const Volunteer = () => {
//   const [questions, setInputFields] = useState([{ question: "" }]);
//   const [campaign, setCampaign] = useState([]);

//   const handleAddFields = () => {
//     const values = [...questions];
//     values.push({ question: "" });
//     setInputFields(values);
//   };
//   const change = (event) => {
//     const values = event.target.value;
//     setCampaign(values);
//   };

//   const handleRemoveFields = (index) => {
//     const values = [...questions];
//     values.splice(index, 1);
//     setInputFields(values);
//   };

//   const handleInputChange = (index, event) => {
//     const values = [...questions];
//     if (event.target.name === "question") {
//       values[index].question = event.target.value;
//     }
//     Object.assign({}, values);
//     setInputFields(values);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("questions", questions);
//     axios
//       .post("/volunteer", { campaign, questions })
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <h1>Volunteer</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="form-group col-sm-6">
//             <label htmlFor="campaign">Campaign</label>
//             <input
//               type="text"
//               className="form-control"
//               id="campaign"
//               name="campaign"
//               value={campaign}
//               onChange={(event) => change(event)}
//             />
//           </div>
//           {questions.map((inputField, index) => (
//             <Fragment key={`${inputField}~${index}`}>
//               <div className="form-group col-sm-6">
//                 <label htmlFor="question">Questions</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="question"
//                   name="question"
//                   value={inputField.question}
//                   onChange={(event) => handleInputChange(index, event)}
//                 />
//               </div>
//               {/* <div className="form-group col-sm-4">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="lastName"
//                   name="lastName"
//                   value={inputField.lastName}
//                   onChange={(event) => handleInputChange(index, event)}
//                 />
//               </div> */}
//               <div className="form-group col-sm-2">
//                 <button
//                   className="btn btn-link"
//                   type="button"
//                   onClick={() => handleRemoveFields(index)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className="btn btn-link"
//                   type="button"
//                   onClick={() => handleAddFields()}
//                 >
//                   +
//                 </button>
//               </div>
//             </Fragment>
//           ))}
//         </div>
//         <div className="submit-button">
//           <button
//             className="btn btn-primary mr-2"
//             type="submit"
//             onSubmit={handleSubmit}
//           >
//             Save
//           </button>
//         </div>
//         <br />
//         <pre>{JSON.stringify(questions, null, 2)}</pre>
//       </form>
//     </>
//   );
// };

// export default Volunteer;

import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";

const Volunteer = () => (
  <div>
    <h1>MAKE A FORM</h1>

    <Formik
      initialValues={{ title: "", campaign: "", questions: [] }}
      onSubmit={(values) => {
        console.log("questions", values.questions);
        axios
          .post("/form", values)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }}
      render={({ values }) => (
        <Form>
          <Field name="title" />
          <Field name="campaign" />
          <FieldArray
            name="questions"
            render={(arrayHelpers) => (
              <div>
                {values.questions && values.questions.length > 0 ? (
                  values.questions.map((question, index) => (
                    <div key={index}>
                      <Field name={`questions.${index}`} />

                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>

                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    ADD QUESTIONS
                  </button>
                )}

                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default Volunteer;
