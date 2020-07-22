import React, { useEffect, useState } from "react";
import { useFormik, Formik, Field, Form } from "formik";
import styled from "styled-components";

import Footer from "./Footer";
import axios from "axios";

function VolunteerForm(props) {
  const [volunteer, setVolunteer] = useState({});
  const [isLoaded, setisLoaded] = useState(false);

  const getvolunteer = async () => {
    try {
      const resp = await axios.get(`/get_form/5f17fe3a65f8aa18a993b86a`);
      console.log("1", resp.data);
      await setVolunteer(resp.data);
      setisLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getvolunteer();
  }, []);

  return (
    <>
      <AddBlogContainer>
        <div className="container-form">
          <h2>Volunteer Form</h2>
          {isLoaded ? (
            <Formik
              initialValues={{
                form: "5f17fe3a65f8aa18a993b86a",
                name: "",
                age: "",
                answers: [],
              }}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
                axios
                  .post("/volunteer", values)
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              }}
            >
              <Form className="form-about-bio">
                <label htmlFor="name">Name:</label> <Field name="[name]" />
                <br />
                <label htmlFor="age">Age:</label> <Field name="[age]" />
                {isLoaded ? (
                  <>
                    {" "}
                    {volunteer.questions.map((m, index) => (
                      <>
                        <br />
                        <label htmlFor="answers">{m}:</label>
                        <Field name={`answers.${index}`} />
                      </>
                    ))}
                  </>
                ) : (
                  <>Error</>
                )}
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          ) : (
            <>error</>
          )}
          {/* <form className="form-about-bio" onSubmit={form.handleSubmit}>
            <label htmlFor="title">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              onChange={form.handleChange}
              value={form.values.name}
            />
            <br />
            <br />
            <label htmlFor="author">Age:</label>
            <br />
            <input
              type="number"
              id="age"
              name="age"
              onChange={form.handleChange}
              value={form.values.age}
            />
            <br />
            <br />
            {isLoaded ? (
              <>
                {volunteer.questions.map((m, index) => (
                  <div>
                    <label htmlFor="title">{m.question}</label>
                    <br />
                    <input
                      type="text"
                      id="questions"
                      name="questions"
                      onChange={form.handleChange}
                      value={form.values.questions[index].answer}
                    />
                    <br />
                    <br />
                  </div>
                ))}
              </>
            ) : (
              <>{volunteer.FormNumber}</>
            )} */}
          {/* {volunteer.questions.map((m) => (
              <>
                <label htmlFor="title">{m.question}</label>
                <br />
                <input
                  type="text"
                  id="question"
                  name="question"
                  onChange={form.handleChange}
                  value={form.values.m.answer}
                />
                <br />
                <br />
              </>
            ))} */}

          {/* <input
            type="textarea"
            id="description"
            name="text"
            placeholder={User.lastName}
            className="desc"
            cols="30"
            rows="10"
          /> */}
          {/* <br />
          <br />
          <label for="fname">I IDENTIFY AS</label>
          <br />
          <select className="gender-list">
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">It's complicated</option>
          </select> */}
          {/* <br />
          <br />
          <label for="fname">Description</label>
          <br />
          <input type="text" id="desc" name="desc" placeholder="XD" /> */}
          {/* <br />
            <input className="submit-btn" type="submit" name="submit" />
          </form> */}
        </div>

        {/* <div className="container-form">
        <h2>About Me</h2>
        <div>
          <form className="form-about-bio">
            <label for="fname">BIO</label>
            <br />
            <input type="text" name="fname" className="about-input" />
            <br />
            <br />
            <label for="fname">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
            />
            <br />
            <br />
            <label for="fname">Phone Number</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please attach your area code as well"
            />
            <br />
            <input className="submit-btn" type="submit" name="submit" />
          </form>
        </div>
      </div>
      {/* <h2 style={{ margin: "auto" }}>Thank you for Donating!</h2> */}
        {/* <div className="bill-cards">
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      </div> */}
        <Footer />
      </AddBlogContainer>
    </>
  );
}
export default VolunteerForm;

const AddBlogContainer = styled.div`
  background: #f5f2d0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  margin-top: 0;
  margin-bottom: 0;
  h2 {
    font-weight: 400;
  }
  .container-form {
    margin: 1rem auto;
    margin-bottom: 5vh;
    margin-top: 15vh;
  }
  .form-about-bio {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: white;
    margin: 3rem auto;
    margin-top: 1.5rem;
    margin-bottom: 0;
    border-radius: 12px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
  label {
    font-size: 1rem;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.7);
  }
  input {
    height: 2.75rem;
    width: 100%;
    font-size: large;
    border-radius: 6px;
    border: 1px;
    background: #f5f5f5;
    padding-left: 0.85rem;
  }
  .textarea {
    border-radius: 6px;
    background: #f5f5f5;
  }
  // .desc{
  //   height: 5rem;
  //   cols:30;
  //   rows:5;
  // }
  .about-input {
    height: 10.5rem;
  }

  .gender-list {
    font-family: Avenir Roman;
    height: 2.75rem;
    background: #f5f5f5;
    font-size: large;
    border-radius: 6px;
  }
  .submit-btn {
    border: none;
    &:hover {
      background: #863547;
      color: white;
    }
    margin: auto;
    width: 15rem;
  }
  .bill-cards {
    margin: 1rem auto;
    display: flex;
  }
`;
