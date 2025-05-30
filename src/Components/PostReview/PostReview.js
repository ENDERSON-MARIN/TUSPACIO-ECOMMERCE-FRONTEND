import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { getDetail, postReview, updateRating } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormHelperText, Grid, makeStyles,
    TextField, Typography } from '@material-ui/core'; // Select - InputLabel - FormControl se saco por que no se usaba
import defaultImage from "../../assets/images/not_found.png";
import Rating from '@material-ui/lab/Rating';
import { ToastContainer, toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: 300,
        marginTop: 50,
        marginBottom: 50
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20em',
        },
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        marginRight: 100
    },
    data: {
        width: 400
    },
    button: {
        marginTop: 30
    },
    image: {
        border: '1px solid #ced4da',
        borderRadius: 10,
        padding: 20,
        marginTop: 20
    }
}));

export default function PostReview() {
    const { id } = useParams();
    const item = useSelector((state) => state.productDetail?.dbInfo)
    const id_user = useSelector((state) => state.infoUser.id)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch])

    const [input, setInput] = useState({
        user_id: id_user,
        title: "",
        text: "",
        score: 0,
        product_id: parseInt(id)
    });

    function validation(input) {
        let errors = {};
        if (!input.title || typeof input.title !== "string") {
            errors.title = "Please insert the title of your review";
        }
        if (!input.text || typeof input.text !== "string") {
            errors.text = "Please insert the text of your review";
        }
        if (!input.score || typeof input.score !== "number") {
            errors.score = "Please insert the score of your review";
        }
        return errors;
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value,
        }))
    }

    const handleChangeScore = (event, newValue) => {
        setInput({
            ...input,
            score: newValue
        })
        setErrors(validation({
            ...input,
            score: newValue,
        }))
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.title || !input.text || !input.score) {
            return notifyLessInfo()
        }
        if (errors.title || errors.text) {
            return notifyLessInfo()
        }
        dispatch(postReview(input))
        dispatch(updateRating(id))
        notifyReviewCreated();
        setTimeout(() => {
            navigate(`/profile`)
        }, 1500);
    }

    const notifyLessInfo= () => 
        toast.error("Can't post a Review. Missing data", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
    });

    const notifyReviewCreated= () => 
        toast.success("Thanks you for your review", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
    });

    return (
        <div className={classes.container}>
            <form className={classes.root} noValidate autoComplete="off">
                <Box
                    display='flex'
                    flexWrap='wrap'
                    position='relative'
                    width='100%'
                    py={2}
                >
                    <Grid
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent='center'

                    >
                        <Box
                            display='flex'
                            flexWrap='wrap'
                            position='relative'
                            width='100%'
                            py={2}
                        >
                        </Box>

                        <div className={classes.item}>
                            <h4>You are Reviewing:</h4>
                            <Typography color="textPrimary">{item?.name}</Typography>
                            <img src={item?.image_link || defaultImage} width='250px' height='250px' className={classes.image} />
                        </div>


                        <div className={classes.data}>

                            <div className={classes.review}>
                                <Grid item xs={4}>
                                    <div className='range' key={`divRating`}>
                                        <div>
                                            <Box component="fieldset" mb={3} borderColor="transparent">
                                                <Typography component="legend">Score</Typography>
                                                <Rating
                                                    name="simple-controlled"
                                                    value={input.score}
                                                    onChange={handleChangeScore}
                                                />
                                            </Box>
                                        </div>
                                    </div>
                                </Grid>
                            </div>


                            <div key='divName'>
                                <TextField
                                    id="outlined-name"
                                    label="Title"
                                    name="title"
                                    value={input.title}
                                    onChange={(e) => handleChange(e)}
                                    variant="filled"
                                    fullWidth='true'
                                    margin='normal'
                                />
                                {
                                    errors.title && (
                                        <FormHelperText>{errors.title}</FormHelperText>
                                    )
                                }
                            </div>



                            <div key='divDesc' >
                                <TextField
                                    id="outlined-name"
                                    label="Text"
                                    name="text"
                                    value={input.text}
                                    onChange={(e) => handleChange(e)}
                                    variant="filled"
                                    fullWidth='true'
                                />
                                {
                                    errors.text && (
                                        <FormHelperText>{errors.text}</FormHelperText>
                                    )
                                }
                            </div>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={(e) => handleSubmit(e)}> POST REVIEW
                            </Button>
                            <ToastContainer 
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss={false}
                                draggable
                                pauseOnHover={false}
                            />
                        </div>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}
