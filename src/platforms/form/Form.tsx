import { Box } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { initialValues, checkoutSchema } from "../../schema/formSchemaValidation";
import InitialValueProps from "../../types";
import FormView from "../../components/FormView";


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSumit = (values: InitialValueProps) => {
        console.log(values);
    }

    return (
        <>
            <Box m="20px">
                <Header title="FORM" subtitle="Create a New User Profile" />

                <Formik
                    onSubmit={handleFormSumit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit
                    }) => (
                        <FormView
                            values={values}
                            touched={touched}
                            errors={errors}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            isNonMobile={isNonMobile}
                        />
                    )}
                </Formik>
            </Box>
        </>
    )
}

export default Form;