import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, act } from "@testing-library/react";
import render from "../../utils/jest-context-helper";
import ContactPage from "./ContactPage";

describe("ContactPage Component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<ContactPage />);
    const element = getByTestId("contactpage");
    expect(element).toBeTruthy();
  });

  it("matches with snapshot", () => {
    const { getByTestId } = render(<ContactPage />);
    const element = getByTestId("contactpage");
    expect(element).toMatchSnapshot();
  });

  it("initializes an empty form", () => {
    const { getByPlaceholderText } = render(<ContactPage />);
    const nameinput = getByPlaceholderText(/name/i);
    const emailinput = getByPlaceholderText(/email/i);
    const subjectinput = getByPlaceholderText(/subject/i);
    const messageinput = getByPlaceholderText(/message/i);
    expect(nameinput).toHaveValue("");
    expect(emailinput).toHaveValue("");
    expect(subjectinput).toHaveValue("");
    expect(messageinput).toHaveValue("");
  });

  it("handles Name input correctly", async () => {
    const { getByPlaceholderText } = render(<ContactPage />);
    const input = getByPlaceholderText(/name/i);
    let sample = "Sample Name";
    await fireEvent.change(input, { target: { value: sample } });
    expect(input).toHaveValue(sample);
    expect(input).toBeValid();
    await fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("");
    expect(input).toBeInvalid();
  });

  it("handles Email input correctly", async () => {
    const { getByPlaceholderText } = render(<ContactPage />);
    const input = getByPlaceholderText(/email/i);
    let sample = "sample email";
    await fireEvent.change(input, { target: { value: sample } });
    expect(input).toHaveValue(sample);
    expect(input).toBeInvalid();
    sample = "correctemail@gmail.com";
    await fireEvent.change(input, { target: { value: sample } });
    expect(input).toHaveValue(sample);
    expect(input).toBeValid();
  });

  it("handles Subject input correctly", async () => {
    const { getByPlaceholderText } = render(<ContactPage />);
    const input = getByPlaceholderText(/subject/i);
    let sample = "Sample Subject";
    await fireEvent.change(input, { target: { value: sample } });
    expect(input).toHaveValue(sample);
    expect(input).toBeValid();
    await fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("");
    expect(input).toBeInvalid();
  });

  it("handles Message input correctly", async () => {
    const { getByPlaceholderText } = render(<ContactPage />);
    const input = getByPlaceholderText(/message/i);
    let sample = "Sample Message hehe";
    await fireEvent.change(input, { target: { value: sample } });
    expect(input).toHaveValue(sample);
    expect(input).toBeValid();
  });

  it("will clear the form when submit is success", async () => {
    const { getByPlaceholderText, getByRole, findByPlaceholderText } = render(
      <ContactPage />
    );
    const nameinput = getByPlaceholderText(/name/i);
    const emailinput = getByPlaceholderText(/email/i);
    const subjectinput = getByPlaceholderText(/subject/i);
    const messageinput = getByPlaceholderText(/message/i);
    const button = getByRole("button", {
      name: /send/i,
    });

    await act(async () => {
      await fireEvent.change(nameinput, { target: { value: "Test Name" } });
      await fireEvent.change(emailinput, {
        target: { value: "test@gmail.com" },
      });
      await fireEvent.change(subjectinput, {
        target: { value: "Test Subject" },
      });
      await fireEvent.change(messageinput, {
        target: { value: "Test Message" },
      });
      await fireEvent.click(button);

      await new Promise((r) => setTimeout(r, 2000));

      const newname = await findByPlaceholderText(/name/i);
      const newemail = await findByPlaceholderText(/email/i);
      const newsubject = await findByPlaceholderText(/subject/i);
      const newmessage = await findByPlaceholderText(/message/i);
      expect(newname).toHaveValue("");
      expect(newemail).toHaveValue("");
      expect(newsubject).toHaveValue("");
      expect(newmessage).toHaveValue("");
    });
  });

//   it("will NOT clear the form when submit is failed", async () => {
//     const { getByPlaceholderText, getByRole, findByPlaceholderText } = render(
//       <ContactPage />
//     );
//     const nameinput = getByPlaceholderText(/name/i);
//     const emailinput = getByPlaceholderText(/email/i);
//     const subjectinput = getByPlaceholderText(/subject/i);
//     const messageinput = getByPlaceholderText(/message/i);
//     const button = getByRole("button", {
//       name: /send/i,
//     });

//     const samplename = "Test Name";
//     const sampleemail = "";
//     const samplesubject = "Test Subject";
//     const samplemsg = "Test Message";

//     await act(async () => {
//       await fireEvent.change(nameinput, { target: { value: samplename } });
//       await fireEvent.change(emailinput, { target: { value: sampleemail } });
//       await fireEvent.change(subjectinput, { target: { value: samplesubject } });
//       await fireEvent.change(messageinput, { target: { value: samplemsg } });
//       await fireEvent.click(button);

//       await new Promise((r) => setTimeout(r, 2000));

//       const newname = await findByPlaceholderText(/name/i);
//       const newemail = await findByPlaceholderText(/email/i);
//       const newsubject = await findByPlaceholderText(/subject/i);
//       const newmessage = await findByPlaceholderText(/message/i);
//       expect(newname).toHaveValue(samplename);
//       expect(newemail).toHaveValue(sampleemail);
//       expect(newemail).toBeInvalid();
//       expect(newsubject).toHaveValue(samplesubject);
//       expect(newmessage).toHaveValue(samplemsg);
//     });
//   });
});
