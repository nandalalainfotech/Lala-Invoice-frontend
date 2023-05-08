/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from "react";

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { makeStyles, Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { StyleSheet } from "@react-pdf/renderer";
import Axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { InvoceDetails, InvoiceListDetails } from '../actions/InvoiceActions';
import "./styles.css";

const useStyle = makeStyles({
    Headers: {
        color: "red", fontSize: "14px", alignItems: "center", justifyContent: "center", marginLeft: 60
    }
});

const theme = createTheme({
    direction: 'rtl',
    resize: {
        fontSize: 150
    },// Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const renderIcon = () => {
    return (
        <div>Function called</div>
    )
}

function InvoiceScree() {
    const {
        handleSubmit,
        register,
        control
    } = useForm({
        defaultValues: {
            test: [{ Desc: "", qty: "", Rating: "", Amount: "", }, { Desc: "", qty: "", Rating: "", Amount: "", }]
        }
    });

    const style = useStyle()

    const dispatch = useDispatch();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "test",
    });
    const handleappendupdate = () => {
        append({

        });
    };
    const classes = useStyle();
    const [state, setstate] = useState("");
    const [selectedFilenew, setSelectednew] = useState();


    // Satates *********************************************************************************

    const [Invoicefrom, setInvoicefrom] = useState("");
    const [billto, setBillto] = useState("Bill To");
    const [Shipto, setShipto] = useState("Ship to");
    const [Invoiceto, setInvoiceto] = useState("");
    const [Optional, setOptional] = useState("");
    const [Invoice, setInvoice] = useState("Invoice");
    const [Invoicesmal, setInvoicesmal] = useState("");
    const [Date, setDate] = useState("Date");
    const [Datevalue, setDatevalue] = useState("");
    const [Payment, setPayment] = useState("Payment Terms");
    const [Paymentvalue, setPaymentvalue] = useState("");
    const [Duedate, setDuedate] = useState("Daue Date");
    const [Duedatevalue, setDuedatevalue] = useState("");
    const [Ponumber, setPonumber] = useState("PO Number");
    const [Ponumbervalue, setPonumbervalue] = useState("");
    const [Desc, setDesc] = useState("");
    const [qty, setqty] = useState("");
    const [Rating, setRating] = useState("");
    const [Amount, setAmount] = useState("");
    const [Notes, setNotes] = useState("Notes");
    const [Noterelavent, setNoterelavent] = useState("");
    const [Terms, setTerms] = useState("Terms");
    const [Termscon, setTermscon] = useState("");
    const [subTotal, setSubTotal] = useState("subTotal");
    const [Discount, setDiscount] = useState("Discount");
    const [Disvalue, setDisvalue] = useState("");
    const [Tax, setTax] = useState("Tax");
    const [Taxvalue, setTaxvalue] = useState("");
    const [Shipping, setShipping] = useState("Shipping");
    const [Shippingvalue, setShippingvalue] = useState("");
    const [Total, setTotal] = useState("Total");
    const [Amountpaid, setAmountpaid] = useState("Amount Paid");
    const [Paidvalue, setPaidvalue] = useState("");
    const [Balencedue, setBalencedue] = useState("Balance Due");
    const [TableInvoice, setTableInvoice] = useState("Invoice");
    const [Tableqty, setTableqty] = useState("Quanty");
    const [TableRating, setTableRating] = useState("Rating");
    const [TableAmount, setTableAmount] = useState("Amount");
    const [Subvalue, setSubvalue] = useState("");
    const [duevalue, setBalenceduevalue] = useState("");
    const [Totalvalue, setTotalvalue] = useState("")

    const [errorUpload, setErrorUpload] = useState("");
    const submitHandler = async (data) => {
        try {
            // const fd = new FormData();
            // fd.append("image", selectedFilenew[0]);
            // const { data } = await Axios.post("/api/uploads", fd, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //         // Product: `Bearer ${product}`,
            //     },
            // });
            dispatch(
                InvoceDetails({
                    // fileId: data.image._id,
                    Invoicefrom: Invoicefrom,
                    billto: billto,
                    Shipto: Shipto,
                    Invoiceto: Invoiceto,
                    Optional: Optional,
                    Invoice: Invoice,
                    Invoicesmal: Invoicesmal,
                    Date: Date,
                    Datevalue: Datevalue,
                    Payment: Payment,
                    Paymentvalue: Paymentvalue,
                    Duedate: Duedate,
                    Duedatevalue: Duedatevalue,
                    Ponumber: Ponumber,
                    Ponumbervalue: Ponumbervalue,
                    tablelist: data.test,
                    Notes: Notes,
                    Noterelavent: Noterelavent,
                    Terms: Terms,
                    Termscon: Termscon,
                    subTotal: subTotal,
                    Discount: Discount,
                    Disvalue: Disvalue,
                    Tax: Tax,
                    Taxvalue: Taxvalue,
                    Shipping: Shipping,
                    Shippingvalue: Shippingvalue,
                    Total: Total,
                    Amountpaid: Amountpaid,
                    Paidvalue: Paidvalue,
                    Balencedue: Balencedue,
                    tableinvoice: TableInvoice,
                    tableqty: Tableqty,
                    tablerating: TableRating,
                    tableamount: TableAmount,
                    Subvalue: Subvalue,
                    duevalue: duevalue,
                    totalvalue: Totalvalue

                })
            )
        } catch (error) {
            setErrorUpload(error.message);
        }
    }






    const InvoiceList = useSelector((state) => state.InvoiceList);
    const { invoicedeatail } = InvoiceList;


    console.log("invoicedeatail", invoicedeatail);



    const Download = () => {
        Axios.get(`/api/invoices/downloadALLPDF/`, {
            responseType: 'blob', headers: {
                'Content-Type': 'application/pdf',
            },
        }).then(response => {
            const link = document.createElement('a');

            link.href = window.URL.createObjectURL(response.data);
            link.download = `${"invoice.pdf"}`;
            link.click();
        })

    }

    var loadFile = (e) => {
        if (event.target.files) {
            setstate(URL.createObjectURL(e.target.files[0]));
            console.log(URL.createObjectURL(e.target.files[0]));
            setSelectednew(e.target.files);
        }
    };


    useEffect(() => {
        dispatch(InvoiceListDetails());
        // const fetct = async () => {
        //     const { data } = await Axios.get(`/api/invoices/downloadCurrent/`);
        //     console.log(data);
        // }
        // fetct()
    }), [dispatch,]

    return (
        <Box sx={{ display: "flex" }} component="form" onSubmit={handleSubmit(submitHandler)}>
            <Box sx={{ maxWidth: 975, bgcolor: "#fff", Height: 875, ml: 3 }}>
                <Card variant="outlined" >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box sx={{ maxWidth: 200, ml: 1 }}>
                                    <Card variant="outlined">

                                        <CardContent>
                                            <Grid container justify="center" alignItems="center">
                                                <input
                                                    accept="image/*"
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                    onChange={loadFile}
                                                    style={{ display: "none" }}
                                                />
                                                {state ? (
                                                    <img
                                                        className={classes.image}
                                                        id="output"
                                                        width="200"
                                                        alt="test"
                                                        src={state}
                                                    />
                                                ) : (
                                                    <label htmlFor="contained-button-file">
                                                        <Fab component="span" >
                                                            <AddIcon />
                                                        </Fab>
                                                    </label>
                                                )}


                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" onChange={(e) => setInvoicefrom(e.target.value)} placeholder='Who is this invoice from?(required)' />
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '22ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            InputProps={{
                                                style: {
                                                    height: 35,
                                                    padding: '0 14px',

                                                },
                                            }}
                                            id="outlined-size-normal" onChange={(e) => setBillto(e.target.value)} size='small' defaultValue='Bill To' />
                                    </Box>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '22ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            sx={{
                                                '& .MuiInput-underline:hover:before':
                                                {
                                                    border: 'none !important'
                                                },
                                            }}
                                            InputProps={{
                                                style: {
                                                    height: 35,
                                                    padding: '0 14px',
                                                    '*.Mui-focused': {
                                                        borderColor: 'transparent',
                                                        outline: 'none',
                                                    },

                                                    border: 'none !important'

                                                },
                                            }}
                                            id="standard-basic" size='small' variant="outlined" onChange={(e) => setShipto(e.target.value)} defaultValue='Ship to' />
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '22ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField sx={{ mt: 0.9, }} id="outlined-size-normal" onChange={(e) => setInvoiceto(e.target.value)} placeholder='Who is this invoice from?(required)' />
                                    </Box>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '22ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField sx={{ ml: 2, mt: 0.9 }} id="outlined-size-normal" onChange={(e) => setOptional(e.target.value)} placeholder='(optional)' />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <CacheProvider value={cacheRtl}>
                                    <ThemeProvider theme={theme}>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    '& .MuiTextField-root': { m: 1, width: '55ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 53,
                                                        padding: '0 14px',
                                                        fontSize: 30
                                                    },
                                                }} id="outlined-size-normal" onChange={(e) => setInvoice(e.target.value)} defaultValue='Invoice' />
                                            </Box>
                                            <Box
                                                component="form"
                                                sx={{
                                                    '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    startAdornment: <InputAdornment position="start">#</InputAdornment>,
                                                }} id="outlined-size-normal" defaultValue='Invoice' size="small" onChange={(e) => setInvoicesmal(e.target.value)} />
                                            </Box>
                                        </div>
                                        <Box>
                                            <Box sx={{ display: "flex" }}>
                                                <div dir="rtl">
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <TextField id="outlined-size-normal" defaultValue='Date' onChange={(e) => setDate(e.target.value)} size="small" />
                                                    </Box>
                                                </div>
                                                <Box
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, width: '12ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField size='small' id="outlined-size-normal" onChange={(e) => setDatevalue(e.target.value)} />
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: "flex" }}>
                                                <div dir="rtl">
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <TextField id="outlined-size-normal" defaultValue='Payment Terms' size="small" onChange={(e) => setPayment(e.target.value)} />
                                                    </Box>
                                                </div>
                                                <Box
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, width: '12ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField size='small' id="outlined-size-normal" onChange={(e) => setPaymentvalue(e.target.value)} />
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: "flex" }}>
                                                <div dir="rtl">
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <TextField id="outlined-size-normal" defaultValue='Daue Date' size="small" onChange={(e) => setDuedate(e.target.value)} />
                                                    </Box>
                                                </div>
                                                <Box
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, width: '12ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField size='small' id="outlined-size-normal" onChange={(e) => setDuedatevalue(e.target.value)} />
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: "flex" }}>
                                                <div dir="rtl">
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <TextField id="outlined-size-normal" defaultValue='PO Number' size="small" onChange={(e) => setPonumber(e.target.value)} />
                                                    </Box>
                                                </div>
                                                <Box
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, width: '12ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField size='small' id="outlined-size-normal" onChange={(e) => setPonumbervalue(e.target.value)} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </ThemeProvider>
                                </CacheProvider>

                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", mt: 5 }}>
                            <input style={{
                                width: '55ch',
                                background: "black", boxSizing: "border-box",

                                borderRadius: "4px 0 0 0", backgroundPosition: "10px 10px", color: "White", fontSize: "18px",
                            }} onChange={(e) => setTableInvoice(e.target.value)} defaultValue={'Invoice'} />
                            <input style={{
                                width: '15ch',
                                background: "black", boxSizing: "border-box",

                                backgroundPosition: "10px 10px", color: "White", fontSize: "18px",
                            }} onChange={(e) => setTableqty(e.target.value)} defaultValue={'Quanty'} />
                            <input style={{
                                width: '15ch',
                                background: "black", boxSizing: "border-box",

                                backgroundPosition: "10px 10px", color: "White", fontSize: "18px",
                            }} onChange={(e) => setTableRating(e.target.value)} defaultValue={'Rating'} />
                            <input style={{
                                width: '15ch',
                                background: "black", boxSizing: "border-box",
                                borderRadius: "0 0 0 4px",
                                backgroundPosition: "10px 10px", color: "White", fontSize: "18px",
                            }} onChange={(e) => setTableAmount(e.target.value)} defaultValue={'Amount'} />
                        </Box>


                        {fields ? (
                            <>
                                {fields.map(({ id }, index) => {
                                    return (
                                        <>
                                            <Box sx={{ display: "flex", }}>
                                                <Box
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, width: '42ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField size='small' id="outlined-size-normal"
                                                        name={`test.${index}.Desc`} placeholder='Description of service or Product...'
                                                        {...register(`test.${index}.Desc`, { required: false })}
                                                    />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, width: '16ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField size='small' id="outlined-size-normal" placeholder='Quantity' name={`test.${index}.qty`} defaultValue="1"
                                                        {...register(`test.${index}.qty`, { required: false })}
                                                    />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, width: '16ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField size='small' name={`test.${index}.Rating`} id="outlined-size-normal" InputProps={{
                                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                    }} defaultValue='333'
                                                        {...register(`test.${index}.Rating`, { required: false })}
                                                    />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 1, width: '12ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <TextField size='small' name={`test.${index}.Amount`} id="outlined-size-normal" InputProps={{
                                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                    }} onChange={(e) => setAmount(e.target.value)}
                                                        {...register(`test.${index}.Amount`, { required: false })}
                                                    />
                                                </Box>
                                                <IconButton
                                                    type="button"
                                                    onClick={() => remove(index)}
                                                >
                                                    <ClearIcon sx={{ color: "red" }} />
                                                </IconButton>
                                            </Box>
                                        </>
                                    );
                                })}
                            </>
                        ) : (
                            <> </>
                        )}
                        <Button variant="contained" sx={{
                            color: '#fff!important',
                            backgroundColor: '#33CC99 !important',
                            width: 150,
                            height: '3em'
                        }} startIcon={<AddIcon />}
                            onClick={handleappendupdate}>
                            Line Item
                        </Button>
                        <Box sx={{ mt: 5 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box>
                                        <Box
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField size='small' id="outlined-size-normal" defaultValue={"Notes"} onChange={(e) => setNotes(e.target.value)} />
                                        </Box>
                                        <Box
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '48ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField id="outlined-size-normal" placeholder='Notes-any relevant information not alredy coverd' onChange={(e) => setNoterelavent(e.target.value)} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField size='small' id="outlined-size-normal" defaultValue={"Terms"} onChange={(e) => setTerms(e.target.value)} />
                                        </Box>
                                        <Box
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '48ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField id="outlined-size-normal" placeholder='Terms and conditions-late fees, payment methods,delivery 
                    schedule' onChange={(e) => setTermscon(e.target.value)} />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{ display: "flex" }}>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='subTotal' size="small" onChange={(e) => setSubTotal(e.target.value)} />
                                            </Box>
                                        </div>
                                        <Box
                                            component="form"
                                            sx={{
                                                ml: 3,
                                                '& .MuiTextField-root': { m: 1, width: '15ch', height: '5ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField InputProps={{
                                                style: {
                                                    height: 33,
                                                    padding: '0 14px',
                                                },
                                            }} id="outlined-size-normal" defaultValue='0' size="small" onChange={(e) => setSubvalue(e.target.value)} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='Discount' size="small" onChange={(e) => setDiscount(e.target.value)} />
                                            </Box>
                                        </div>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '15ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='0' size="small" onChange={(e) => setDisvalue(e.target.value)} />
                                            </Box>
                                        </div>
                                    </Box>
                                    <Box sx={{ display: "flex", mt: 0.3 }}>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='Tax' size="small" onChange={(e) => setTax(e.target.value)} />
                                            </Box>
                                        </div>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '15ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='0' size="small" onChange={(e) => setTaxvalue(e.target.value)} />
                                            </Box>
                                        </div>
                                    </Box>
                                    <Box sx={{ display: "flex", mt: 0.3 }}>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='Shipping' size="small" onChange={(e) => setShipping(e.target.value)} />
                                            </Box>
                                        </div>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '15ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='0' size="small" onChange={(e) => setShippingvalue(e.target.value)} />
                                            </Box>
                                        </div>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='Total' size="small" onChange={(e) => setTotal(e.target.value)} />
                                            </Box>
                                        </div>
                                        <Box
                                            component="form"
                                            sx={{
                                                ml: 3,
                                                '& .MuiTextField-root': { m: 1, width: '15ch', height: '5ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField InputProps={{
                                                style: {
                                                    height: 33,
                                                    padding: '0 14px',
                                                },
                                            }} id="outlined-size-normal" defaultValue='$0.00' size="small" onChange={(e) => setTotalvalue(e.target.value)} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField inputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='Amount Paid' size="small" onChange={(e) => setAmountpaid(e.target.value)} />
                                            </Box>
                                        </div>
                                        <Box
                                            component="form"
                                            sx={{
                                                ml: 3,
                                                '& .MuiTextField-root': { m: 1, width: '15ch', height: '5ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField InputProps={{
                                                style: {
                                                    height: 33,
                                                    padding: '0 14px',
                                                },
                                            }} id="outlined-size-normal" defaultValue='0' size="small" onChange={(e) => setPaidvalue(e.target.value)} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <div dir="rtl">
                                            <Box
                                                component="form"
                                                sx={{
                                                    ml: 3,
                                                    '& .MuiTextField-root': { m: 1, width: '25ch', height: '5ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField InputProps={{
                                                    style: {
                                                        height: 33,
                                                        padding: '0 14px',
                                                    },
                                                }} id="outlined-size-normal" defaultValue='Balance Due' size="small" onChange={(e) => setBalencedue(e.target.value)} />
                                            </Box>
                                        </div>
                                        <Box
                                            component="form"
                                            sx={{
                                                ml: 3,
                                                '& .MuiTextField-root': { m: 1, width: '15ch', height: '5ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField InputProps={{
                                                style: {
                                                    height: 33,
                                                    padding: '0 14px',
                                                },
                                            }} id="outlined-size-normal" defaultValue='$0.00' size="small" onChange={(e) => setBalenceduevalue(e.target.value)} />
                                        </Box>
                                    </Box>

                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Box >
            <Box sx={{ ml: 5, mt: 5 }}>
                <Box>
                    <Button variant="contained" disabled sx={{
                        ":disabled": {
                            backgroundColor: "#33CC99" || '#33CC99', color: "#fff"
                        }
                    }}>Send Invoice</Button>
                </Box>
                <Box sx={{ mt: 1 }}>
                    {/* <PDFDownloadLink
                        document={<MyDocument product={invoicedeatail} />}
                        fileName="movielist.pdf"
                        startIcon={<DownloadIcon />}
                        style={{
                            textDecoration: "none",

                            color: "#4a4a4a",
                            backgroundColor: "#f2f2f2",
                            border: "1px solid #4a4a4a"
                        }}
                    > Download Invoice</PDFDownloadLink> */}
                    <Button variant="text" onClick={(e) => Download(e)} sx={{
                        ":disabled": {
                            backgroundColor: "#33CC99" || '#33CC99', color: "#fff"
                        }
                    }} startIcon={<DownloadIcon />}>
                        Download Pdf
                    </Button>

                </Box>
                <Box sx={{ mt: 1 }}>
                    <Typography variant='p'>Currency</Typography>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select native defaultValue="" id="grouped-native-select">
                                <optgroup label="Category 1">
                                    <option value={1}>Option 1</option>
                                    <option value={2}>Option 2</option>
                                </optgroup>
                            </Select>
                        </FormControl>

                    </div>
                </Box>
                <Box sx={{ mt: 1 }}>
                    <Typography variant='p'>TYPE</Typography>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select native defaultValue="" id="grouped-native-select">
                                <option value={1}>Invoice</option>
                                <option value={2}>Credit Note</option>
                                <option value={1}>Quote</option>
                                <option value={2}>Parchase Order</option>
                                <option value={2}>Recipt</option>
                            </Select>
                        </FormControl>

                    </div>
                </Box>
                <Button type='submit' variant='containd' sx={{ backgroundColor: "blue", color: "#fff" }}>Save Draft</Button>
                <br></br>
                <Button variant='containd'>History</Button>
            </Box>
        </Box >
    )
}

export default InvoiceScree
