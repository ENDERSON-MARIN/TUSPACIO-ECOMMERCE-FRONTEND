import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBrands, getCategories, getProductTypes, addNewCategory, getDetail, putChangeProduct, cleanOrderDetail, cleanProductDetail } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import LogoIMG from '../../assets/images/img_logo.png';
import { Box, Button, Chip, Fab, FormControl, FormHelperText, Grid, 
    Grow, IconButton, InputAdornment, InputLabel,makeStyles, Select, Slider, 
    TextField } from '@material-ui/core';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import { ToastContainer, toast } from 'react-toastify';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        width: "150px",
    },
    margin: {
        margin: theme.spacing(1),
        width: '216px'
    },
    rating: {
        display:"block",
        marginTop: "10px"
    },
    imageBox: {
        margin: 'auto',
        position: 'relative'
    },
    select: {
        width: 250,
    },
    image: {
        position: "relative",
        height: "100px",
        margin: "20px"
    },
    textField: {
        width: '25ch',
    },
    colors: {
        margin: theme.spacing(1),
        width: '10px',
    },
    fab: {
        margin: theme.spacing(1),
    },
}));

export default function ChangeProduct({product, setOneProduct}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const allCategories = useSelector((state) => state.categories);
    const allProductTypes = useSelector((state) => state.producTypes);
    const allBrands = useSelector((state) => state.brands);
    const [errors, setErrors] = useState({});
    const [ input, setInput ] = useState({
        brand: product.brand, 
        name: product.name, 
        price: product.price, 
        price_sign: product.price_sing,
        currency: product.currency, 
        image_link: product.image_link, 
        description: product.description, 
        rating: product.rating, 
        product_type: product.product_type, 
        stock: product.stock, 
        categories: product.cateogories
    })
    const [newCateg,setNewCateg] = useState({
        add: false,
        value: "",
        selectValue: ""
    })
    const [categories, setCategories] = useState(product?.categories?.map(c => c.name) || []);
    // console.log(id)
    // const [colors, setColors] = useState({
    //     azul: 0,
    //     rojo: 0,
    //     verde: 0,
    // });
    // const [addColors, setAddColors] = useState(product?.products_colors?.map(c => c.hex_value) || []);
    
    useEffect ( () => {
        dispatch(getCategories())
        dispatch(getAllBrands())
        dispatch(getProductTypes())
        // setCharge(true)
    }, [] )
    
    

    // let fColor = `#${parseInt(colors.rojo).toString(16)}${parseInt(colors.verde).toString(16)}${parseInt(colors.azul).toString(16)}`
    
    // function handlerColors(colors) {
    //     if (parseInt(colors.azul) >= 256 || parseInt(colors.verde) >= 256 || parseInt(colors.rojo) >= 256 ||
    //         parseInt(colors.azul) < 0 || parseInt(colors.verde) < 0 || parseInt(colors.rojo) < 0 ) { 
    //         return alert("The value of the colors must be a number between 0 and 255");
    //     }
    //     let hexAzul = parseInt(colors.azul).toString(16);
    //     let hexRojo = parseInt(colors.rojo).toString(16);
    //     let hexVerde = parseInt(colors.verde).toString(16);
    //     let newColor = `#${hexRojo}${hexVerde}${hexAzul}`
    //     if (addColors.includes(newColor)) return alert("Color already added");
    //     setAddColors([...addColors, newColor])
    //     setColors({azul: 0,rojo: 0,verde: 0});
    // } 
        
    function validation(input) {
        let errors = {};
        if(!input.name || typeof input.name !== "string") {   
            errors.name = "Please insert the name of your product"; }
        if(!input.brand || typeof input.brand !== "string") {   
            errors.brand = "Please insert the brand of your product"; }
        if(!input.description || typeof input.description !== "string") {   
            errors.description = "Please insert the description of your product"; }
        if(!input.product_type || typeof input.product_type !== "string") {   
            errors.product_type = "Please insert the type of your product"; }
        if (!input.categories.length) {
            errors.categories = "Please select at least one category"; }
        if (!input.price || input.price < 0 ) {
            errors.price = "The price cannot be null or negative"; } 
        if (!input.stock || input.stock < 0) {
            errors.stock = "The price cannot be null or negative"; }
        if (!input.rating) {
            errors.rating = "The rating cannot be null"; } 
        if (!input.image_link || typeof input.image_link !== "string" ) {
            errors.image_link = "Please insert a valid url image"; }
        return errors;
    }

    function handleChange(e) {
        e.preventDefault()
        let valor = e.target.value
        let nombre = e.target.name
        if (nombre === "price" || nombre === "stock") valor = parseInt(valor)
        setInput({
            ...input,
            [nombre] : valor
        })
        setErrors(validation({
            ...input,
            [nombre] : valor,
            categories: categories
        }))
    }

    const handleChangeRating = (event, newValue) => {
        setInput({
            ...input,
            rating : newValue
        })
        setErrors(validation({
            ...input,
            rating : newValue,
            categories: categories
        }))
    };

    function handleDelete(category) {
        console.log(category)
        setCategories(categories.filter(c => c !== category))
    }

    function handelAddNewCategory() {
        let newCategory = newCateg.value;
        dispatch(addNewCategory({name: newCategory}))
        handleCategories({target: {value: newCategory}})
        setNewCateg({add: false, value: "", selectValue: ""})
    }

    let handleCategories = (e) => {
        e.preventDefault()
        let category = e.target.value.toString()
        setNewCateg({...newCateg, selectValue: category, add: false})
        if (category === "add") return setNewCateg({...newCateg, add: true});
        if (!categories.length) {
            setCategories([category])
            setErrors(validation({...input, categories: [category]}))
        } else if (!categories.includes(category)) {
            if (categories.length === 2) {
                return alert("Please delete one of the added categories to add a new one. Only a maximum of 2 categories per product is allowed")
                // categories.pop()
                // setCategories([...categories, category]) 
                // setErrors(validation({...input, categories: categories}))    
            } 
            setCategories([...categories, category])
            setErrors(validation({...input, categories: categories}))
            } else if (categories.includes(category)) {
                return alert("This category is already added")
                // setCategories(categories.filter(c => c !== category))
                // setErrors(validation({...input, categories: categories}))
            }
        // console.log(categories) 
    }

    // function handlerDeleteColor(color) {
    //     setAddColors(addColors.filter(c => c!==color))
    // }
    
    function handleSubmit(e){
        if ( !input.brand || !input.name || !input.price || !input.image_link || !input.description ||
            !input.rating || !input.product_type || !input.stock || !categories.length ) {
            return notifyLessInfo()    
        }
        if (errors.name || errors.categories || errors.description ||
            errors.image_link || errors.price || errors.brand 
            || errors.stock || errors.rating || errors.product_type) {
            return notifyLessInfo()
        }
        input.categories = categories;
        dispatch(putChangeProduct(product.id,input))
        return notifyProductCreated()
        // backToProducts()
    }

    const notifyLessInfo= () => 
        toast.error("Can't update. Missing data", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
    });

    const notifyProductCreated= () => 
        toast.success("Product update successfully!!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
    });

    function backToProducts() {
        setOneProduct({id: null, vista: ""})
    }

    return (
        <Box className={classes.root}>
            <IconButton 
                onClick={() => backToProducts()}
            >
                <ArrowBackIcon /> Go Back
            </IconButton>
            <Box
                position= 'relative'
                width= '100%'
                py={2}
                m={0}
                display= "flex"
                flexWrap= "wrap"
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                // bgcolor={"rgba(235, 234, 156, 0.589)"}                
            >
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                        py={1}
                    >
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={(e) => handleSubmit(e)}
                        > Load changes </Button>
                    </Grid>
                    <ToastContainer />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="outlined-helperText"
                        name="id"
                        label="Product ID"
                        defaultValue={product.id}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                        className={classes.formControl}
                    />
                </Grid>
                <Box
                    position="relative"
                    width='250px'
                    // bgcolor={"rgba(235, 156, 180, 0.589)"}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    marginX={3}
                >
                    <div key='divName'>
                        <TextField
                            required
                            id="outlined-helperText"
                            name="name"
                            label="Name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
                        />
                        {
                            errors.name && (
                                <FormHelperText>{errors.name}</FormHelperText>
                            )
                        }
                    </div>
                    
                    <div key='divBrand'>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel htmlFor="filled-age-native-simple">Select Brand</InputLabel>
                            <Select
                                native
                                className={classes.select}
                                name="brand"
                                value={input.brand}
                                onChange={(e) => handleChange(e)}
                            >
                                <option aria-label="None" value="" />
                            {
                                allBrands.map( b =>
                                <option value={`${b}`}>{`${b}`}</option> )
                            }
                            </Select>
                        </FormControl>
                        {
                            errors.brand && (
                                <FormHelperText>{errors.brand}</FormHelperText>
                            )
                        }
                    </div>
                    <Box className='typeBox' key='typeBox'>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel htmlFor="filled-age-native-simple">Select Categories</InputLabel>
                            <Select
                                className={classes.select}
                                native
                                value={newCateg.selectValue}
                                onChange={(e) => handleCategories(e)}
                            >
                                <option aria-label="None" value="" />
                            {
                                allCategories.map( category =>
                                <option value={`${category.name}`}>{`${category.name}`}</option> )
                            }
                                <option value="add">Add new category...</option>
                            </Select>
                        </FormControl>
                        <Box>
                            {
                                categories.length 
                                    ? categories.map( c =>
                                        <Chip 
                                            label={`${c}`}
                                            value={`${c}`}
                                            onDelete={() => handleDelete(`${c}`)} 
                                            color="primary" /> 
                                        )
                                    : <></>
                            }
                            {
                                errors.categories && (
                                    <FormHelperText>{errors.categories}</FormHelperText> 
                                )
                            }
                        </Box>
                    </Box>
                    {
                        newCateg.add &&
                        <Grow in={newCateg.add}>
                            <Box key='newCategory' className={classes.newCategory}>
                                <TextField
                                    id="outlined-helperText"
                                    name="newCategory"
                                    label="Name new category"
                                    value={newCateg.value}
                                    onChange={(e) => setNewCateg({...newCateg, value: e.target.value})}
                                    variant="filled"
                                />
                                <Fab size="small" color="primary" aria-label="add" className={classes.fab}>
                                    <AddIcon onClick={() => handelAddNewCategory()}/>
                                </Fab>
                            </Box>
                        </Grow>
                    }  
                </Box>
                <Box
                    // bgcolor={"rgba(156, 177, 235, 0.589)"}
                    width='250px'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    marginX={3}
                >
                    <Box className={classes.range} key={`divPrice`}>
                        <TextField
                            label="Price *"
                            id="filled-start-adornment"
                            type="number"
                            min={0}
                            name="price"
                            value={input.price}
                            onChange={(e) => handleChange(e)}
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            variant="filled"
                        />
                        {
                            errors.price && (
                                <FormHelperText>{errors.price}</FormHelperText>
                            )
                        }
                    </Box>
                    <div key='divStock'>
                        <TextField
                            required
                            id="outlined-helperText"
                            type="number"
                            min={0}
                            name="stock"
                            label="Stock"
                            value={input.stock}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
                        />
                        {
                            errors.stock && (
                                <FormHelperText>{errors.stock}</FormHelperText>
                            )
                        }
                    </div>
                    <Box key='divStock'>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel htmlFor="filled-age-native-simple">Select Product Type</InputLabel>
                            <Select
                                native
                                className={classes.select}
                                name="product_type"
                                value={input.product_type}
                                onChange={(e) => handleChange(e)}
                            >
                                <option aria-label="None" value="" />
                            {
                                allProductTypes.map( pt =>
                                <option value={`${pt.product_type}`}>{`${pt.product_type}`}</option> )
                            }
                            </Select>
                        </FormControl>
                        {
                            errors.product_type && (
                                <FormHelperText>{errors.product_type}</FormHelperText>
                            )
                        }
                    </Box>                  
                </Box>
                <Box
                    // display="block"
                    // position="relative"
                    width='250px'
                    height='250px'
                    // bgcolor={"rgba(156, 235, 162, 0.589)"}
                    // p={4}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    marginX={3}
                >
                    <Box key='divImg'>
                        <TextField
                            required
                            id="outlined-helperText"
                            name="image_link"
                            label="Image URL"
                            value={input.image_link}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
                        />
                        {
                            errors.image_link && (
                                <FormHelperText>{errors.image_link}</FormHelperText>
                            )
                        }
                    </Box>
                    <Box className={classes.formControl}>
                        <img src={input.image_link || LogoIMG} className={classes.image} alt="imagen de prueba" />
                        {/* {
                            input.image_link && (
                                <FormHelperText>Image preview</FormHelperText> 
                                )
                        } */}
                    </Box>
                </Box>
                <Box
                    position="relative"
                    width='300px'
                    // bgcolor={"rgba(156, 230, 235, 0.589)"}
                    boxSizing='border-box'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    px={2}
                >
                    <Box className='typeBox' key='divDesc'>
                        <TextField
                            required
                            id="outlined-helperText"
                            name="description"
                            label="Description"
                            value={input.description}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
                        />
                        {
                            errors.description && (
                                <FormHelperText>{errors.description}</FormHelperText>
                            )
                        }
                    </Box>
                    <Box className={classes.rating} key={`divRating`}>
                        <InputLabel htmlFor="filled-age-native-simple">Rating</InputLabel>
                        <Slider
                            aria-labelledby="discrete-slider-small-steps"
                            step={1}
                            marks
                            min={0}
                            max={5}
                            valueLabelDisplay="auto"
                            value={parseInt(input.rating)}
                            name="range"
                            onChange={handleChangeRating}
                        /> 
                    </Box>
                </Box>
                {/* <Box
                    display="flex"
                    flexWrap="wrap"
                    alignContent="center"
                    alignItems="center"
                    py={2}
                    // bgcolor={"rgba(235, 156, 156, 0.589)"}
                >
                    <Box
                        border={1}
                        width="40px"
                        height="40px"
                        borderColor="primary.main"
                        borderRadius="50%"
                        bgcolor={fColor} 
                    />
                    <Button 
                        className={clsx(classes.margin, classes.textField, classes.colorButton)}
                        variant="contained" 
                        color="primary"
                        onClick={() => handlerColors(colors)}
                    > Add color </Button>
                    <TextField
                        label=""
                        id="outlined-start-adornment"
                        value={colors.azul}
                        name="azul"
                        onChange={(e)=> {
                            setColors({...colors, [e.target.name]: e.target.value })
                            console.log(fColor)
                        }}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Azul</InputAdornment>,
                            step: 1,
                            min: 0,
                            max: 255,
                            type: 'number',
                            'aria-labelledby': 'input-slider'
                        }}
                        variant="outlined"
                    />
                    <TextField
                        label=""
                        id="outlined-start-adornment"
                        value={colors.rojo}
                        name="rojo"
                        onChange={(e)=> {
                            setColors({...colors, [e.target.name]: e.target.value })
                            console.log(fColor)
                        }}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Rojo</InputAdornment>,
                            step: 1,
                            min: 0,
                            max: 255,
                            type: 'number',
                            'aria-labelledby': 'input-slider'
                        }}
                        variant="outlined"
                    />
                    <TextField
                        label=""
                        id="outlined-start-adornment"
                        value={colors.verde}
                        name="verde"
                        onChange={(e)=> {
                            let valor = e.target.value;
                            setColors({...colors, [e.target.name]: valor })
                            console.log(fColor)
                        }}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Verde</InputAdornment>,
                            step: 1,
                            min: 0,
                            max: 255,
                            type: 'number',
                            'aria-labelledby': 'input-slider'
                        }}
                        variant="outlined"
                    />
                    <Box
                        display='flex'
                    >
                        {
                            addColors.length 
                                ? addColors.map(color => {
                                    const ColorButton = withStyles((theme) => ({
                                        root: {
                                        backgroundColor: `${color}`,
                                        margin:"8px",
                                        border:"2px",
                                        borderColor:"primary",
                                        width:"10px",
                                        height:"25px",
                                        '&:hover': {
                                            backgroundColor: `${color}`,
                                        },
                                        },
                                    }))(Button);
                                    
                                    return <ColorButton 
                                            variant="contained" 
                                            color="primary"
                                            onClick={() => handlerDeleteColor(color)}
                                            className={classes.margin} >
                                        x
                                        </ColorButton>
                                    }
                                    )
                                : <FormHelperText>No color added yet</FormHelperText>
                        }
                    </Box> 
                </Box> */}
            </Box>
        </Box>
    )
}

                        