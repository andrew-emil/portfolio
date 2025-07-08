"use client";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box, CircularProgress, TextField } from "@mui/material";
import { useReducer } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { sendContactMessage } from "@/app/_apiCalls/contactApis";

const initialState = {
	values: {
		fullName: "",
		email: "",
		subject: "",
		message: "",
	},
	errors: {},
	touched: {},
	loading: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "SET_VALUE":
			return {
				...state,
				values: { ...state.values, [action.name]: action.value },
			};
		case "SET_ERROR":
			return {
				...state,
				errors: { ...state.errors, ...action.errors },
			};
		case "SET_TOUCHED":
			return {
				...state,
				touched: { ...state.touched, ...action.touched },
			};
		case "SET_LOADING":
			return {
				...state,
				loading: action.loading,
			};
		case "RESET":
			return initialState;
		default:
			return state;
	}
}

export default function ContactForm() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { values, errors, touched, loading } = state;

	const validate = (fieldValues = values) => {
		let temp = { ...errors };
		if ("fullName" in fieldValues)
			temp.fullName = fieldValues.fullName ? "" : "Full name is required.";
		if ("email" in fieldValues) {
			temp.email = fieldValues.email
				? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
					? ""
					: "Email is not valid."
				: "Email address is required.";
		}
		if ("subject" in fieldValues)
			temp.subject = fieldValues.subject ? "" : "Subject is required.";
		if ("message" in fieldValues)
			temp.message = fieldValues.message ? "" : "Message is required.";
		dispatch({ type: "SET_ERROR", errors: temp });
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: "SET_VALUE", name, value });
		validate({ [name]: value });
	};

	const handleBlur = (e) => {
		const { name } = e.target;
		dispatch({ type: "SET_TOUCHED", touched: { [name]: true } });
		validate({ [name]: values[name] });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "SET_LOADING", loading: true });
		dispatch({
			type: "SET_TOUCHED",
			touched: { fullName: true, email: true, subject: true, message: true },
		});
		validate();
		if (
			Object.values(errors).every((x) => x === "") &&
			Object.values(values).every((x) => x !== "")
		) {
			try {
				await sendContactMessage(values);
				toast.success("message sent successfully!");
				dispatch({ type: "RESET" });
			} catch (e) {
				toast.error(e.message);
			} finally {
				dispatch({ type: "SET_LOADING", loading: false });
			}
		} else {
			dispatch({ type: "SET_LOADING", loading: false });
		}
	};

	const inputStyles = {
		"& .MuiInputBase-root": {
			backgroundColor: "rgba(44,28,67,0.2)",
			color: "var(--foreground)",
			borderRadius: "var(--border-radius)",
		},
		"& .MuiInputBase-input": {
			color: "var(--foreground)",
		},
		"& .MuiFormLabel-root": {
			color: "var(--foreground)",
			opacity: 0.7,
		},
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: "var(--card-border)",
		},
		"&:hover .MuiOutlinedInput-notchedOutline": {
			borderColor: "var(--accent-primary)",
		},
		"& .Mui-error": {
			color: "#ff5252",
		},
	};

	return (
		<form onSubmit={handleSubmit}>
			<Box
				display="flex"
				gap={2}
				mb={2}
				flexDirection={{ xs: "column", sm: "row" }}>
				<TextField
					name="fullName"
					label="Full name"
					variant="outlined"
					fullWidth
					required
					value={values.fullName}
					onChange={handleInputChange}
					onBlur={handleBlur}
					error={touched.fullName && Boolean(errors.fullName)}
					helperText={touched.fullName && errors.fullName}
					sx={inputStyles}
				/>
				<TextField
					name="email"
					label="Email address"
					variant="outlined"
					fullWidth
					required
					value={values.email}
					onChange={handleInputChange}
					onBlur={handleBlur}
					error={touched.email && Boolean(errors.email)}
					helperText={touched.email && errors.email}
					sx={inputStyles}
				/>
			</Box>
			<Box mb={2}>
				<TextField
					name="subject"
					label="Subject"
					variant="outlined"
					fullWidth
					required
					value={values.subject}
					onChange={handleInputChange}
					onBlur={handleBlur}
					error={touched.subject && Boolean(errors.subject)}
					helperText={touched.subject && errors.subject}
					sx={inputStyles}
				/>
			</Box>
			<Box mb={2}>
				<TextField
					name="message"
					label="Your Message"
					variant="outlined"
					fullWidth
					required
					multiline
					minRows={5}
					value={values.message}
					onChange={handleInputChange}
					onBlur={handleBlur}
					error={touched.message && Boolean(errors.message)}
					helperText={touched.message && errors.message}
					sx={inputStyles}
				/>
			</Box>
			<Box display="flex" justifyContent="flex-end">
				<button
					type="submit"
					className="button-primary"
					disabled={loading}
					style={{
						minWidth: 160,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					{loading ? (
						<CircularProgress
							size={22}
							sx={{ color: "var(--button-primary-text)", marginRight: 1 }}
						/>
					) : (
						<SendRoundedIcon sx={{ marginRight: 1 }} />
					)}
					{loading ? "Sending..." : "Send Message"}
				</button>
			</Box>
			<ToastContainer
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				theme="dark"
				transition={Bounce}
			/>
		</form>
	);
}
