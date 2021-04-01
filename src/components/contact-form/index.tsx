import React, { useState } from "react"
import {
  Button,
  createStyles,
  FormHelperText,
  makeStyles,
  TextField,
  Theme,
  withStyles,
} from "@material-ui/core"
import { useForm, RegisterOptions } from "react-hook-form"

/* ---------------- styles --------------- */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contactForm: {
      display: "flex",
      flexDirection: "column",
      "& .MuiFormHelperText-root": {
        fontSize: "0.85rem",
        marginBottom: theme.spacing(1.5),
      },
    },
  })
)

const ContactTextField = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "2px solid",
          borderColor: theme.palette.primary.light,
        },
      },
    },
  })
)(TextField)

const ContactSubmitBtn = withStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: theme.typography.fontWeightBold,

      "&.MuiButton-contained.Mui-disabled": {
        color: theme.palette.text.disabled,
        backgroundColor: theme.palette.secondary.light,
      },
      marginBottom: theme.spacing(2),
    },
  })
)(Button)

/* ------------- end: styles ------------- */

interface FormValues {
  name: string
  email: string
  msg: string
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    msg: "",
  })
  const [isIncomplete, setIncomplete] = useState(true)
  const [isSent, setSent] = useState(false)
  const { handleSubmit, register, errors } = useForm<FormValues>()
  const classes = useStyles()
  /* -------------- validation ------------- */
  const emailValidator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  /* ----------- end: validation ----------- */

  /* --------------- netlify --------------- */

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const netlifyFetch = (form: FormValues) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...form,
      }),
    })
      .then(() => setSent(true))
      .then(() => console.log(form))
      .catch(error => alert(error))
  }
  /* --------------- netlify --------------- */

  /* ---------- component methods ---------- */
  const checkBlankFields = () => {
    let k: keyof FormValues
    let fields = []
    const isBlank = (el: string) => el === ""
    for (k in formValues) {
      fields.push(formValues[k])
    }
    if (fields.some(isBlank)) return setIncomplete(true)
    return setIncomplete(false)
  }
  const handleChange = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [field]: e.currentTarget.value })
    checkBlankFields()
  }

  const handleSubmitForm = () => {
    netlifyFetch(formValues)
  }

  const buildForm = () => {
    type field = {
      fieldName: keyof FormValues
      fieldLabel: string
      placeholderVal: string
      type?: string
      formRegister?: RegisterOptions
    }
    const fields: field[] = [
      {
        fieldName: "name",
        fieldLabel: "Name",
        placeholderVal: "Eddie",
        type: "text",
        formRegister: {
          maxLength: {
            value: 20,
            message: "Your name must be from 2 - 20 characters long.",
          },
          minLength: {
            value: 2,
            message: "Your name must be from 2 - 20 characters long.",
          },
        },
      },
      {
        fieldName: "email",
        fieldLabel: "Email",
        placeholderVal: "eddie@example.com",
        type: "email",
        formRegister: {
          pattern: {
            value: emailValidator,
            message: `Invalid email address. A valid email address should look like "yourname@mailclient.com" `,
          },
        },
      },
      {
        fieldName: "msg",
        fieldLabel: "Message",
        placeholderVal: "How about having a small chat?",
        formRegister: {
          maxLength: {
            value: 1600,
            message: "Please keep your message short (180 - 200 words). ",
          },
        },
      },
    ]
    return (
      <form
        className={classes.contactForm}
        noValidate
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <p style={{ display: "none" }}>
          <label>
            Humans don't fill this out:
            <input name="bot-field" />
          </label>
        </p>

        {fields.map(
          ({ fieldName, fieldLabel, placeholderVal, type, formRegister }) => (
            <React.Fragment key={fieldName}>
              <ContactTextField
                required
                multiline={fieldName !== "msg" ? false : true}
                rows={fieldName !== "msg" ? 1 : 4}
                name={fieldName}
                type={type}
                label={fieldLabel}
                variant="outlined"
                placeholder={placeholderVal}
                onChange={handleChange(fieldName)}
                onBlur={() => checkBlankFields()}
                inputRef={register(formRegister)}
                // error={!errors[fieldName] ? false : true}
                helperText={errors[fieldName]?.message}
              />
            </React.Fragment>
          )
        )}
        <ContactSubmitBtn
          color="primary"
          variant="contained"
          size="large"
          disabled={isIncomplete}
          type="submit"
        >
          submit
        </ContactSubmitBtn>
        <FormHelperText>(*): Required field</FormHelperText>
      </form>
    )
  }
  /* -------- end: component methods ------- */

  return buildForm()
}

export default ContactForm
