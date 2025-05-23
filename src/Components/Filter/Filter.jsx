import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box, Button, Grid, Hidden, IconButton } from '@material-ui/core';
import { getAllBrands, getCategories, setCurrentHomePage, orderCombine, getAllProducts } from '../../actions';
import { useNavigate } from "react-router-dom";
import BathtubIcon from '@material-ui/icons/Bathtub';
import Tooltip from '@material-ui/core/Tooltip';
import LocationDisabledIcon from '@material-ui/icons/LocationDisabled';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    margin: {
        margin: 10
    },
    margin2: {
        marginTop: 25,
        marginLeft: 10,
        backgroundColor: "#257558",
        color: "#ffffff"
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function Filter({ setOrder, filters, setFilters }) {
    const navigate = useNavigate()
    let categories = useSelector((state) => state.categories)
    let brands = useSelector((state) => state.brands)
    const classes = useStyles();

    const dispatch = useDispatch();

    const { alpha, category, price, brand, rating } = filters;

    useEffect(() => {
        dispatch(categories = getCategories(filters.brand))
        dispatch(brands = getAllBrands(filters.category))
    }, [filters.brand, filters.category])

    function handlefilter(e) {
        e.preventDefault();
        dispatch(orderCombine({ ...filters, [e.target.name]: e.target.value }));
        dispatch(setCurrentHomePage(1))
        let { alpha, category, price, brand, rating } = filters
        setOrder(`filters by ${alpha},${category},${price},${brand},${rating}`)
    }

    function limpiandoFiltros() {
        dispatch(getAllProducts());
        setFilters({
            "alpha": "",
            "category": "",
            "price": "",
            "brand": "",
            "rating": ""
        })
    }

    if (alpha || category || price || brand || rating) dispatch(orderCombine({ ...filters }))

    return (
        <Box
            bgcolor='#37af84'
            boxShadow='0px 5px 8px 0px rgba(37,117,88,0.18)'
            position='fixed'
            top={60}
            left={0}
            zIndex={700}
            width="100%"
        >
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Grid item xs='auto'>
                    <Hidden xsDown>
                        {/* Filter by Brands */}
                        <FormControl className={classes.formControl}>
                            <InputLabel>Brands</InputLabel>
                            <Select
                                native
                                name="brand"
                                value={filters.brand}
                                onChange={(e) => {
                                    setFilters({ ...filters, "brand": e.target.value });
                                    handlefilter(e)
                                }}
                            >
                                <option aria-label="None" value="" />
                                {
                                    brands.length &&
                                    brands.map(b => <option value={`${b}`}>{`${b.toUpperCase()}`}</option>)
                                }
                            </Select>
                        </FormControl>


                        {/* Filter by Categories */}
                        <FormControl className={classes.formControl}>
                            <InputLabel>Categories</InputLabel>
                            <Select
                                native
                                value={filters.category}
                                name="category"
                                onChange={(e) => {
                                    setFilters({ ...filters, "category": e.target.value });
                                    handlefilter(e)
                                }}
                            >
                                <option aria-label="None" value="" />
                                {
                                    categories?.length &&
                                    categories.map(c => <option value={`${c.name}`}>{`${c.name.toUpperCase()}`}</option>)
                                }
                            </Select>
                        </FormControl>
                    </Hidden>

                    <Hidden smDown>
                        {/* Orden alfabetico */}
                        <FormControl className={classes.formControl}>
                            <InputLabel>Sort by Name</InputLabel>
                            <Select
                                native
                                value={filters.alpha}
                                name="alpha"
                                onChange={(e) => {
                                    setFilters({ ...filters, "alpha": e.target.value });
                                    handlefilter(e)
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value="asc">A to Z</option>
                                <option value="desc">Z to A</option>
                            </Select>
                        </FormControl>


                        {/* Orden por Precio */}
                        <FormControl className={classes.formControl}>
                            <InputLabel>Order by Price</InputLabel>
                            <Select
                                native
                                value={filters.price}
                                name="price"
                                onChange={(e) => {
                                    setFilters({ ...filters, "price": e.target.value });
                                    handlefilter(e)
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value='asc'>Low to High</option>
                                <option value='desc'>High to Low</option>
                            </Select>
                        </FormControl>

                        {/* Order por Rating */}
                        <FormControl className={classes.formControl}>
                            <InputLabel>Order by Rating</InputLabel>
                            <Select
                                native
                                value={filters.rating}
                                name="rating"
                                onChange={(e) => {
                                    setFilters({ ...filters, "rating": e.target.value });
                                    handlefilter(e)
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value='desc'>5...1</option>
                                <option value='asc'>1...5</option>
                            </Select>
                        </FormControl>
                    </Hidden>
                    <Hidden mdDown>
                        <Button
                            variant="outlined"
                            onClick={() => limpiandoFiltros()}
                            color="primary"
                            size="small"
                            className={classes.margin2}
                        >
                            Clean Filters
                        </Button>
                    </Hidden>
                    <Hidden lgUp xsDown>
                        {/* <Grid item xs='auto'> */}
                        <Tooltip title="Clean Filters" placement="bottom">
                            <IconButton color="inherit" onClick={() => limpiandoFiltros()}>
                                <LocationDisabledIcon />
                            </IconButton>
                        </Tooltip>
                        {/* </Grid> */}
                    </Hidden>
                </Grid>
                <Hidden mdDown>
                    <Grid item xs='auto'>
                        <Button
                            onClick={() => navigate('/service')}
                            variant="contained"
                            color="primary"
                            className={classes.margin}
                        >
                            Beuthy Services
                        </Button>
                    </Grid>
                </Hidden>
                <Hidden lgUp xsDown>
                    {/* <Grid item xs='auto' className={classes.margin}> */}
                    <Tooltip title="Beuthy Services" placement="bottom">
                        <IconButton color="inherit" className={classes.margin} onClick={() => navigate('/service')}>
                            <BathtubIcon />
                        </IconButton>
                    </Tooltip>
                    {/* </Grid> */}
                </Hidden>
            </Grid>
        </Box>
    );
}