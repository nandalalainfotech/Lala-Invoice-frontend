/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { makeStyles, Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { StyleSheet } from "@react-pdf/renderer";
import Axios from "axios";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { InvoceDetails, InvoiceListDetails } from "../actions/InvoiceActions";
import "./styles.css";

const useStyle = makeStyles({
  Headers: {
    color: "red",
    fontSize: "14px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
  },
  Button: {
    backgroundColor: "#336699",
    color: "#fff",
    "&:hover": {
      background: "#336699",
      color: "#fff",
    },
  },
});

const theme = createTheme({
  direction: "rtl",
  resize: {
    fontSize: 150,
  }, // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#336699",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const renderIcon = () => {
  return <div>Function called</div>;
};

function InvoiceScree() {
  const { handleSubmit, register, setValue, control, getValues } = useForm({
    defaultValues: {
      test: [
        { Desc: "", qty: "", Rating: "", Amount: "" },
        { Desc: "", qty: "", Rating: "", Amount: "" },
      ],
    },
    mode: "onChange"
  });

  const style = useStyle();

  const dispatch = useDispatch();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  const watchTest = useWatch({
    control,
    name: "test",
  });

  const handleappendupdate = () => {
    append({});
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
  const [Disvalue, setDisvalue] = useState(null);
  const [Tax, setTax] = useState("Tax");
  const [Taxvalue, setTaxvalue] = useState(null);
  const [Shipping, setShipping] = useState("Shipping");
  const [Shippingvalue, setShippingvalue] = useState(null);
  const [Total, setTotal] = useState("Total");
  const [Amountpaid, setAmountpaid] = useState("Amount Paid");
  const [Paidvalue, setPaidvalue] = useState(null);
  const [Balencedue, setBalencedue] = useState("Balance Due");
  const [TableInvoice, setTableInvoice] = useState("Invoice");
  const [Tableqty, setTableqty] = useState("Quanty");
  const [TableRating, setTableRating] = useState("Rating");
  const [TableAmount, setTableAmount] = useState("Amount");
  const [Subvalue, setSubvalue] = useState("");
  const [duevalue, setBalenceduevalue] = useState(null);
  const [Totalvalue, setTotalvalue] = useState(null);

  const [imageFile, setimageFile] = useState("");
  const [border, setBorder] = useState(0);
  const [border1, setBorder1] = useState(0);
  const [border2, setBorder2] = useState(0);
  const [border3, setBorder3] = useState(0);
  const [border4, setBorder4] = useState(0);
  const [border5, setBorder5] = useState(0);
  const [border6, setBorder6] = useState(0);
  const [img, setimg] = useState("");

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
          image: imageFile,
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
          totalvalue: Totalvalue,
        })
      );
    } catch (error) {
      setErrorUpload(error.message);
    }
  };

  // const InvoiceList = useSelector((state) => state.InvoiceList);
  // const { invoicedeatail } = InvoiceList;


  const Download = () => {
    Axios.get(`/api/invoices/downloadALLPDF/`, {
      responseType: "blob",
      headers: {
        "Content-Type": "application/pdf",
      },
    }).then((response) => {
      const link = document.createElement("a");

      link.href = window.URL.createObjectURL(response.data);
      link.download = `${"invoice.pdf"}`;
      link.click();
    });
  };

  const loadFile = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
    setimg(URL.createObjectURL(file));
  };

  const onLoad = (fileString) => {
    setimageFile(fileString);
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const handleDiscountValue = (e) => {
    let tax = 0;
    if (Taxvalue) {
      tax = (Taxvalue / 100) * Subvalue;
    }
    let calculate = Subvalue - e.target.value + tax + Shippingvalue
    setTotalvalue(calculate)
    setDisvalue(e.target.value)
    if (Paidvalue) {
      let bal = calculate - Paidvalue
      setBalenceduevalue(bal)
    }
  }

  const handleTaxValue = (e) => {
    let tax = (e.target.value / 100) * Subvalue;
    let calculate = Subvalue - Disvalue + tax + Shippingvalue
    setTotalvalue(calculate)
    setTaxvalue(e.target.value)
    if (Paidvalue) {
      let bal = calculate - Paidvalue
      setBalenceduevalue(bal)
    }
  }

  const handleShipping = (e) => {
    let tax = 0;
    if (Taxvalue) {
      tax = (Taxvalue / 100) * Subvalue;
    }
    let calculate = Subvalue - Disvalue + tax + parseInt(e.target.value ? e.target.value : 0)
    setTotalvalue(calculate)
    setShippingvalue(e.target.value ? e.target.value : 0)
    if (Paidvalue) {
      let bal = calculate - Paidvalue
      setBalenceduevalue(bal)
    }
  }

  const HandlePaidvalue = (e) => {

    let tax = 0;
    if (Taxvalue) {
      tax = (Taxvalue / 100) * Subvalue;
    }
    let totalAmt = Subvalue - Disvalue + tax + parseInt(Shippingvalue)
    if (e.target.value && e.target.value <= totalAmt) {
      let dueAmt = totalAmt - parseInt(e.target.value ? e.target.value : 0)
      setPaidvalue(parseInt(e.target.value ? e.target.value : 0))
      setBalenceduevalue(dueAmt)
    } else {
      setPaidvalue(0)
      setBalenceduevalue(totalAmt)
    }

  }

  const handleChange = () => {
    let subamount = 0
    const arr = getValues().test.map((item) => {
      item.Amount = item.qty && item.Rating ? parseInt(item.qty) * parseInt(item.Rating) : 0
      subamount = subamount + item.Amount
    })
    setSubvalue(subamount)
  }
  useEffect(() => {
    // dispatch(InvoiceListDetails());
    // const fetct = async () => {
    //     const { data } = await Axios.get(`/api/invoices/downloadCurrent/`);
    // }
    // fetct()


  }, [])

  return (

    <>
    <Box
      sx={{ display: { xs: 'none', sm: 'flex',md: 'flex',lg: 'flex',xl: 'flex' } }}
      component="form"
      onSubmit={handleSubmit(submitHandler)}
      onChange={handleChange}
    >
      <Box sx={{ maxWidth: 975, bgcolor: "#fff", Height: 875, ml: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ maxWidth: 300, ml: 1 }}>
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
                          <>
                            

                            {img ? (<>
                              <ClearIcon onClick={(e) => setimg()} />
                              <img width="100" height="100" alt="preview image" src={img} />
                            </>) : 
                            (
                            <>
                            <label htmlFor="contained-button-file">
                              <Fab component="span">
                                <AddIcon />
                              </Fab>
                            </label>
                            </>
                            )}
                          </>
                        )}
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "35ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    size="small"
                    id="outlined-size-normal"
                    onChange={(e) => setInvoicefrom(e.target.value)}
                    placeholder="Who is this invoice from?(required)"
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      InputProps={{
                        style: {
                          height: 35,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-size-normal"
                      onChange={(e) => setBillto(e.target.value)}
                      size="small"
                      defaultValue="Bill To"
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      sx={{
                        "& .MuiInput-underline:hover:before": {
                          border: "none !important",
                        },
                      }}
                      InputProps={{
                        style: {
                          height: 35,
                          padding: "0 14px",
                          "*.Mui-focused": {
                            borderColor: "transparent",
                            outline: "none",
                          },

                          border: "none !important",
                        },
                      }}
                      id="standard-basic"
                      size="small"
                      variant="outlined"
                      onChange={(e) => setShipto(e.target.value)}
                      defaultValue="Ship to"
                    />
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      sx={{ mt: 0.9 }}
                      size="small"
                      id="outlined-size-normal"
                      onChange={(e) => setInvoiceto(e.target.value)}
                      placeholder="Who is this invoice from?(required)"
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      sx={{ ml: 2, mt: 0.9 }}
                      size="small"
                      id="outlined-size-normal"
                      onChange={(e) => setOptional(e.target.value)}
                      placeholder="(optional)"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "55ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 53,
                            padding: "0 14px",
                            fontSize: 30,
                          },
                        }}
                        id="outlined-size-normal"
                        onChange={(e) => setInvoice(e.target.value)}
                        defaultValue="Invoice"
                        size="small"
                      />
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              #
                            </InputAdornment>
                          ),
                        }}
                        id="outlined-size-normal"
                        defaultValue="Invoice"
                        size="small"
                        onChange={(e) => setInvoicesmal(e.target.value)}
                      />
                    </Box>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": {
                              m: 1,
                              width: "25ch",
                              height: "5ch",
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-size-normal"
                            defaultValue="Date"
                            onChange={(e) => setDate(e.target.value)}
                            size="small"
                          />
                        </Box>
                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "15ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            type="date"
                            size="small"
                            id="outlined-size-normal"
                            onChange={(e) => setDatevalue(e.target.value)}
                            InputProps={{
                              style: {
                                border: "1px solid #C2C2C2",
                                padding: 6,
                                width: "15ch",
                                height: 41,
                              },
                            }}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": {
                              m: 1,
                              width: "25ch",
                              height: "5ch",
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-size-normal"
                            defaultValue="Payment Terms"
                            size="small"
                            onChange={(e) => setPayment(e.target.value)}
                          />
                        </Box>
                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "15ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            size="small"
                            id="outlined-size-normal"
                            onChange={(e) => setPaymentvalue(e.target.value)}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": {
                              m: 1,
                              width: "25ch",
                              height: "5ch",
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-size-normal"
                            defaultValue="Due Date"
                            size="small"
                            onChange={(e) => setDuedate(e.target.value)}
                          />
                        </Box>
                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "15ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            type="date"
                            size="small"
                            id="outlined-size-normal"
                            onChange={(e) => setDuedatevalue(e.target.value)}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": {
                              m: 1,
                              width: "25ch",
                              height: "5ch",
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-size-normal"
                            defaultValue="PO Number"
                            size="small"
                            onChange={(e) => setPonumber(e.target.value)}
                          />
                        </Box>
                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "15ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            size="small"
                            id="outlined-size-normal"
                            onChange={(e) => setPonumbervalue(e.target.value)}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </ThemeProvider>
                </CacheProvider>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", mt: 5 }}>
              <input
                style={{
                  width: "55ch",
                  background: "#336699",
                  boxSizing: "border-box",

                  borderRadius: "4px 0 0 0",
                  backgroundPosition: "10px 10px",
                  color: "White",
                  fontSize: "18px",
                }}
                onChange={(e) => setTableInvoice(e.target.value)}
                defaultValue={"Invoice"}
              />
              <input
                style={{
                  width: "15ch",
                  background: "#336699",
                  boxSizing: "border-box",

                  backgroundPosition: "10px 10px",
                  color: "White",
                  fontSize: "18px",
                }}
                onChange={(e) => setTableqty(e.target.value)}
                defaultValue={"Quantity"}
              />
              <input
                style={{
                  width: "15ch",
                  background: "#336699",
                  boxSizing: "border-box",

                  backgroundPosition: "10px 10px",
                  color: "White",
                  fontSize: "18px",
                }}
                onChange={(e) => setTableRating(e.target.value)}
                defaultValue={"Rating"}
              />
              <input
                style={{
                  width: "15ch",
                  background: "#336699",
                  boxSizing: "border-box",
                  borderRadius: "0 0 0 4px",
                  backgroundPosition: "10px 10px",
                  color: "White",
                  fontSize: "18px",
                }}
                onChange={(e) => setTableAmount(e.target.value)}
                defaultValue={"Amount"}
              />
            </Box>

            {fields ? (
              <>
                {fields.map(({ id }, index) => {
                  return (
                    <>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "42ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            size="small"
                            id="outlined-size-normal"
                            name={`test.${index}.Desc`}
                            placeholder="Description of service or Product..."
                            {...register(`test.${index}.Desc`, {
                              required: false,
                            })}
                          />
                        </Box>
                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "16ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            size="small"
                            id="outlined-size-normal"
                            placeholder="Quantity"
                            name={`test.${index}.qty`}
                            defaultValue="1"
                            {...register(`test.${index}.qty`, {
                              required: false,
                            })}
                          />
                        </Box>
                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "16ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            size="small"
                            name={`test.${index}.Rating`}
                            id="outlined-size-normal"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              ),
                            }}
                            defaultValue="333"
                            {...register(`test.${index}.Rating`, {
                              required: false,
                            })}
                          />
                        </Box>
                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "12ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            value={getValues().test[index].Amount}
                            size="small"
                            name={`test.${index}.Amount`}
                            id="outlined-size-normal"
                            InputProps={{
                              readOnly: true,
                              startAdornment: (
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              ),
                            }}

                            onChange={(e) => setAmount(e.target.value)}
                            {...register(`test.${index}.Amount`, {
                              required: false,
                            })}
                          />
                        </Box>
                        <IconButton type="button" onClick={() => remove(index)}>
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
            <Box sx={{ ml: 1 }}>
              <Button
                variant="contained"
                className={style.Button}
                sx={{
                  color: "#fff!important",
                  backgroundColor: "#33CC99 !important",
                  width: 150,
                  height: "3em",
                }}
                startIcon={<AddIcon />}
                onClick={handleappendupdate}
              >
                Line Item
              </Button>
            </Box>

            <Box sx={{ mt: 5 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        size="small"
                        id="outlined-size-normal"
                        defaultValue={"Notes"}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "48ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        size="small"
                        id="outlined-size-normal"
                        placeholder="Notes-any relevant information not alredy coverd"
                        onChange={(e) => setNoterelavent(e.target.value)}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        size="small"
                        id="outlined-size-normal"
                        defaultValue={"Terms"}
                        onChange={(e) => setTerms(e.target.value)}
                      />
                    </Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "48ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        size="small"
                        id="outlined-size-normal"
                        placeholder="Terms and conditions-late fees, payment methods,delivery 
                    schedule"
                        onChange={(e) => setTermscon(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border6 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="subTotal"
                            size="small"
                            // onChange={(e) => setSubTotal(e.target.value)}
                            onClick={(e) => {
                              setBorder6(1);
                              setSubTotal(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="subTotal"
                            size="small"
                            // onChange={(e) => setSubTotal(e.target.value)}
                            onClick={(e) => {
                              setBorder6(1);
                              setSubTotal(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        size="small"
                        value={Subvalue}
                        onChange={(e) => setSubvalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border5 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Discount"
                            size="small"
                            // onChange={(e) => setDiscount(e.target.value)}
                            onClick={(e) => {
                              setBorder5(1);
                              setDiscount(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Discount"
                            size="small"
                            // onChange={(e) => setDiscount(e.target.value)}
                            onClick={(e) => {
                              setBorder5(1);
                              setDiscount(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        size="small"
                        value={Disvalue}
                        // onChange={(e) => setDisvalue(e.target.value)}
                        onChange={(e) => handleDiscountValue(e)}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", mt: 0.3 }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border4 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Tax (%)"
                            size="small"
                            // onChange={(e) => setTax(e.target.value)}
                            onClick={(e) => {
                              setBorder4(1);
                              setTax(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Tax (%)"
                            size="small"
                            // onChange={(e) => setTax(e.target.value)}
                            onClick={(e) => {
                              setBorder4(1);
                              setTax(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        value={Taxvalue}
                        size="small"
                        onChange={(e) => handleTaxValue(e)}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", mt: 0.3 }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border3 === 0 ? (
                        <>
                          {" "}
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Shipping"
                            size="small"
                            // onChange={(e) => setShipping(e.target.value)}
                            onClick={(e) => {
                              setBorder3(1);
                              setShipping(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          {" "}
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Shipping"
                            size="small"
                            // onChange={(e) => setShipping(e.target.value)}
                            onClick={(e) => {
                              setBorder3(1);
                              setShipping(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        value={Shippingvalue}
                        size="small"
                        onChange={(e) => handleShipping(e)}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border2 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Total"
                            size="small"
                            // onChange={(e) => setTotal(e.target.value)}
                            onClick={(e) => {
                              setBorder2(1);
                              setTotal(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Total"
                            size="small"
                            // onChange={(e) => setTotal(e.target.value)}
                            onClick={(e) => {
                              setBorder2(1);
                              setTotal(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue="$0.00"
                        size="small"
                        disabled={true}
                        value={Totalvalue}
                        onChange={(e) => setTotalvalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border1 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            inputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Amount Paid"
                            size="small"
                            // onChange={(e) => setAmountpaid(e.target.value)}
                            onClick={(e) => {
                              setBorder1(1);
                              setAmountpaid(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            inputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Amount Paid"
                            size="small"
                            // onChange={(e) => setAmountpaid(e.target.value)}
                            onClick={(e) => {
                              setBorder1(1);
                              setAmountpaid(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        value={Paidvalue}
                        size="small"
                        onChange={(e) => HandlePaidvalue(e)}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Balance Due"
                            size="small"
                            // onChange={(e) => setBalencedue(e.target.value)}
                            onClick={(e) => {
                              setBorder(1);
                              setBalencedue(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Balance Due"
                            size="small"
                            // onChange={(e) => setBalencedue(e.target.value)}
                            onClick={(e) => {
                              setBorder(1);
                              setBalencedue(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                          marginBottom: 10,
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue="$0.00"
                        size="small"
                        disabled={true}
                        value={duevalue}
                      // onChange={(e) => setBalenceduevalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ ml: 5, mt: 5 }}>
        <Box sx={{ ml: 1 }}>
          <Button
            variant="contained"
            disabled
            sx={{
              ":disabled": {
                backgroundColor: "#33CC99" || "#33CC99",
                color: "#fff",
              },
            }}
          >
            Send Invoice
          </Button>
        </Box>
        <Box sx={{ mt: 3, ml: 1 }}>
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
          <Button
            variant="text"
            className={style.Button}
            onClick={(e) => Download(e)}
            sx={{
              ":disabled": {
                backgroundColor: "#33CC99" || "#33CC99",
                color: "#fff",
              },
            }}
            startIcon={<DownloadIcon />}
          >
            Download Pdf
          </Button>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="p">Currency</Typography>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                native
                defaultValue=""
                id="grouped-native-select"
                size="small"
              >
                <optgroup label="Category 1">
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                </optgroup>
              </Select>
            </FormControl>
          </div>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="p">TYPE</Typography>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                native
                defaultValue=""
                id="grouped-native-select"
                size="small"
              >
                <option value={1}>Invoice</option>
                <option value={2}>Credit Note</option>
                <option value={1}>Quote</option>
                <option value={2}>Parchase Order</option>
                <option value={2}>Recipt</option>
              </Select>
            </FormControl>
          </div>
        </Box>
        <Box sx={{ ml: 1 }}>
          {" "}
          <Button
            type="submit"
            variant="outlined"
            className={style.Button}
            sx={{ backgroundColor: "blue", color: "#fff" }}
          >
            Save Draft
          </Button>
          <br></br>
          <Box sx={{ mt: 2 }}>
            <Button
              sx={{ color: "#fff", backgroundColor: "green" }}
              className={style.Button}
              variant="outlined"
            >
              History
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box
        sx={{ display: { xs: 'flex', sm: 'none',md: 'none',lg: 'none',xl: 'none' }, }}
        component="form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <Box sx={{ maxWidth: 975, bgcolor: "#fff",  }}>
          <Card variant="outlined">
            <CardContent>
              <Box>
                <Typography>INVOICE</Typography>
                <Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "35ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      size="small"
                      id="outlined-size-normal"
                      onChange={(e) => setInvoicefrom(e.target.value)}
                      placeholder="Who is this invoice from?(required)"
                    />
                  </Box>
                </Typography>
                <Typography>
                  <Card variant="outlined" sx={{ mt: 2 }}>
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
                          <>
                            <label htmlFor="contained-button-file">
                              <Fab component="span">
                                <AddIcon />
                              </Fab>
                            </label>

                            {img ? (
                              <>
                                <ClearIcon onClick={(e) => setimg()} />
                                <img
                                  width="100"
                                  height="100"
                                  alt="preview image"
                                  src={img}
                                />
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </Grid>
                    </CardContent>
                  </Card>
                </Typography>
                <Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { width: "35ch", mt: 2 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      size="small"
                      id="outlined-size-normal"
                      onChange={(e) => setInvoicefrom(e.target.value)}
                      placeholder="Who is this invoice from?(required)"
                    />
                  </Box>
                </Typography>
                <Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      InputProps={{
                        style: {
                          height: 35,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-size-normal"
                      onChange={(e) => setBillto(e.target.value)}
                      size="small"
                      defaultValue="Bill To"
                    />
                  </Box>
                </Typography>

                <Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      sx={{ mt: 0.9 }}
                      size="small"
                      id="outlined-size-normal"
                      onChange={(e) => setInvoiceto(e.target.value)}
                      placeholder="Who is this invoice from?(required)"
                    />
                  </Box>
                </Typography>

                <Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      sx={{
                        "& .MuiInput-underline:hover:before": {
                          border: "none !important",
                        },
                      }}
                      InputProps={{
                        style: {
                          height: 35,

                          "*.Mui-focused": {
                            borderColor: "transparent",
                            outline: "none",
                          },

                          border: "none !important",
                        },
                      }}
                      id="standard-basic"
                      size="small"
                      variant="outlined"
                      onChange={(e) => setShipto(e.target.value)}
                      defaultValue="Ship to"
                    />
                  </Box>
                </Typography>

                <Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      // sx={{ ml: 2, mt: 0.9 }}
                      size="small"
                      id="outlined-size-normal"
                      onChange={(e) => setOptional(e.target.value)}
                      placeholder="(optional)"
                    />
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          mt: 2,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-size-normal"
                        defaultValue="Date"
                        onChange={(e) => setDate(e.target.value)}
                        size="small"
                      />
                    </Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { mt: 2, ml: 1, width: "15ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        type="date"
                        size="small"
                        id="outlined-size-normal"
                        onChange={(e) => setDatevalue(e.target.value)}
                        InputProps={{
                          style: {
                            border: "1px solid #C2C2C2",
                            padding: 6,
                            width: "15ch",
                            height: 41,
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          mt: 2,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-size-normal"
                        defaultValue="Payment Terms"
                        size="small"
                        onChange={(e) => setPayment(e.target.value)}
                      />
                    </Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { mt: 2, ml: 1, width: "15ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        size="small"
                        id="outlined-size-normal"
                        onChange={(e) => setPaymentvalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          mt: 2,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-size-normal"
                        defaultValue="Due Date"
                        size="small"
                        onChange={(e) => setDuedate(e.target.value)}
                      />
                    </Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { mt: 2, ml: 1, width: "15ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        type="date"
                        size="small"
                        id="outlined-size-normal"
                        onChange={(e) => setDuedatevalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          mt: 2,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-size-normal"
                        defaultValue="PO Number"
                        size="small"
                        onChange={(e) => setPonumber(e.target.value)}
                      />
                    </Box>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { mt: 2, ml: 1, width: "15ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        size="small"
                        id="outlined-size-normal"
                        onChange={(e) => setPonumbervalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex", mt: 5 }}>
                    <input
                      style={{
                        width: "10ch",
                        background: "#336699",
                        boxSizing: "border-box",

                        borderRadius: "4px 0 0 0",
                        backgroundPosition: "10px 10px",
                        color: "White",
                        fontSize: "18px",
                      }}
                      onChange={(e) => setTableInvoice(e.target.value)}
                      defaultValue={"Invoice"}
                    />
                    <input
                      style={{
                        width: "10ch",
                        background: "#336699",
                        boxSizing: "border-box",

                        backgroundPosition: "10px 10px",
                        color: "White",
                        fontSize: "18px",
                      }}
                      onChange={(e) => setTableqty(e.target.value)}
                      defaultValue={"Quantity"}
                    />
                    <input
                      style={{
                        width: "10ch",
                        background: "#336699",
                        boxSizing: "border-box",

                        backgroundPosition: "10px 10px",
                        color: "White",
                        fontSize: "18px",
                      }}
                      onChange={(e) => setTableRating(e.target.value)}
                      defaultValue={"Rating"}
                    />
                    <input
                      style={{
                        width: "10ch",
                        background: "#336699",
                        boxSizing: "border-box",
                        borderRadius: "0 0 0 4px",
                        backgroundPosition: "10px 10px",
                        color: "White",
                        fontSize: "18px",
                      }}
                      onChange={(e) => setTableAmount(e.target.value)}
                      defaultValue={"Amount"}
                    />
                  </Box>
                </Typography>

                <Typography>
                  {fields ? (
                    <>
                      {fields.map(({ id }, index) => {
                        return (
                          <>
                            <Box sx={{ display: "flex" }}>
                              <Box
                                sx={{
                                  "& .MuiTextField-root": {
                                    m: 1,
                                    width: "9ch",
                                  },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  size="small"
                                  id="outlined-size-normal"
                                  name={`test.${index}.Desc`}
                                  placeholder="Description of service or Product..."
                                  {...register(`test.${index}.Desc`, {
                                    required: false,
                                  })}
                                />
                              </Box>
                              <Box
                                sx={{
                                  "& .MuiTextField-root": {
                                    m: 1,
                                    width: "9ch",
                                  },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  size="small"
                                  id="outlined-size-normal"
                                  placeholder="Quantity"
                                  name={`test.${index}.qty`}
                                  defaultValue="1"
                                  {...register(`test.${index}.qty`, {
                                    required: false,
                                  })}
                                />
                              </Box>
                              <Box
                                sx={{
                                  "& .MuiTextField-root": {
                                    m: 1,
                                    width: "9ch",
                                  },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  size="small"
                                  name={`test.${index}.Rating`}
                                  id="outlined-size-normal"
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        $
                                      </InputAdornment>
                                    ),
                                  }}
                                  defaultValue="333"
                                  {...register(`test.${index}.Rating`, {
                                    required: false,
                                  })}
                                />
                              </Box>
                              <Box
                                sx={{
                                  "& .MuiTextField-root": {
                                    m: 1,
                                    width: "9ch",
                                  },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  size="small"
                                  name={`test.${index}.Amount`}
                                  id="outlined-size-normal"
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        $
                                      </InputAdornment>
                                    ),
                                  }}
                                  onChange={(e) => setAmount(e.target.value)}
                                  {...register(`test.${index}.Amount`, {
                                    required: false,
                                  })}
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
                </Typography>

                <Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      className={style.Button}
                      sx={{
                        color: "#fff!important",
                        backgroundColor: "#33CC99 !important",
                        width: 150,
                        height: "3em",
                      }}
                      startIcon={<AddIcon />}
                      onClick={handleappendupdate}
                    >
                      Line Item
                    </Button>
                  </Box>
                </Typography>
                <Typography>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      size="small"
                      id="outlined-size-normal"
                      defaultValue={"Notes"}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </Box>
                </Typography>

                <Typography>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "48ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      size="small"
                      id="outlined-size-normal"
                      placeholder="Notes-any relevant information not alredy coverd"
                      onChange={(e) => setNoterelavent(e.target.value)}
                    />
                  </Box>
                </Typography>

                <Typography>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      size="small"
                      id="outlined-size-normal"
                      defaultValue={"Terms"}
                      onChange={(e) => setTerms(e.target.value)}
                    />
                  </Box>
                </Typography>

                <Typography>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { mt: 2, width: "48ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      size="small"
                      id="outlined-size-normal"
                      placeholder="Terms and conditions-late fees, payment methods,delivery
                    schedule"
                      onChange={(e) => setTermscon(e.target.value)}
                    />
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          mt: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border6 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="subTotal"
                            size="small"
                            // onChange={(e) => setSubTotal(e.target.value)}
                            onClick={(e) => {
                              setBorder6(1);
                              setSubTotal(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="subTotal"
                            size="small"
                            // onChange={(e) => setSubTotal(e.target.value)}
                            onClick={(e) => {
                              setBorder6(1);
                              setSubTotal(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 3,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        size="small"
                        value={Subvalue}
                        onChange={(e) => setSubvalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border5 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Discount"
                            size="small"
                            // onChange={(e) => setDiscount(e.target.value)}
                            onClick={(e) => {
                              setBorder5(1);
                              setDiscount(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Discount"
                            size="small"
                            // onChange={(e) => setDiscount(e.target.value)}
                            onClick={(e) => {
                              setBorder5(1);
                              setDiscount(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        size="small"
                        value={Disvalue}
                        // onChange={(e) => setDisvalue(e.target.value)}
                        onChange={(e) => handleDiscountValue(e)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border4 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Tax (%)"
                            size="small"
                            // onChange={(e) => setTax(e.target.value)}
                            onClick={(e) => {
                              setBorder4(1);
                              setTax(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Tax (%)"
                            size="small"
                            // onChange={(e) => setTax(e.target.value)}
                            onClick={(e) => {
                              setBorder4(1);
                              setTax(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        value={Taxvalue}
                        size="small"
                        onChange={(e) => handleTaxValue(e)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border3 === 0 ? (
                        <>
                          {" "}
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Shipping"
                            size="small"
                            // onChange={(e) => setShipping(e.target.value)}
                            onClick={(e) => {
                              setBorder3(1);
                              setShipping(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          {" "}
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Shipping"
                            size="small"
                            // onChange={(e) => setShipping(e.target.value)}
                            onClick={(e) => {
                              setBorder3(1);
                              setShipping(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        value={Shippingvalue}
                        size="small"
                        onChange={(e) => handleShipping(e)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border2 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Total"
                            size="small"
                            // onChange={(e) => setTotal(e.target.value)}
                            onClick={(e) => {
                              setBorder2(1);
                              setTotal(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Total"
                            size="small"
                            // onChange={(e) => setTotal(e.target.value)}
                            onClick={(e) => {
                              setBorder2(1);
                              setTotal(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue="$0.00"
                        size="small"
                        disabled={true}
                        value={Totalvalue}
                        onChange={(e) => setTotalvalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border1 === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            inputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Amount Paid"
                            size="small"
                            // onChange={(e) => setAmountpaid(e.target.value)}
                            onClick={(e) => {
                              setBorder1(1);
                              setAmountpaid(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            inputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Amount Paid"
                            size="small"
                            // onChange={(e) => setAmountpaid(e.target.value)}
                            onClick={(e) => {
                              setBorder1(1);
                              setAmountpaid(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue={null}
                        value={Paidvalue}
                        size="small"
                        onChange={(e) => HandlePaidvalue(e)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "25ch",
                          height: "5ch",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {border === 0 ? (
                        <>
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                              },
                            }}
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Balance Due"
                            size="small"
                            // onChange={(e) => setBalencedue(e.target.value)}
                            onClick={(e) => {
                              setBorder(1);
                              setBalencedue(e.target.value);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <TextField
                            InputProps={{
                              style: {
                                height: 33,
                                padding: "0 14px",
                              },
                            }}
                            id="outlined-size-normal"
                            defaultValue="Balance Due"
                            size="small"
                            // onChange={(e) => setBalencedue(e.target.value)}
                            onClick={(e) => {
                              setBorder(1);
                              setBalencedue(e.target.value);
                            }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        ml: 2,
                        "& .MuiTextField-root": {
                          m: 1,
                          width: "15ch",
                          height: "5ch",
                          marginBottom: 10,
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        InputProps={{
                          style: {
                            height: 33,
                            padding: "0 14px",
                          },
                        }}
                        id="outlined-size-normal"
                        defaultValue="$0.00"
                        size="small"
                        disabled={true}
                        value={duevalue}
                        // onChange={(e) => setBalenceduevalue(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ ml: 2 }}>
                    <Box sx={{ ml: 1 }}>
                      <Button
                        variant="contained"
                        disabled
                        sx={{
                          ":disabled": {
                            backgroundColor: "#33CC99" || "#33CC99",
                            color: "#fff",
                          },
                        }}
                      >
                        Send Invoice
                      </Button>
                    </Box>
                    <Box sx={{ mt: 3, ml: 1 }}>
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
                      <Button
                        variant="text"
                        className={style.Button}
                        onClick={(e) => Download(e)}
                        sx={{
                          ":disabled": {
                            backgroundColor: "#33CC99" || "#33CC99",
                            color: "#fff",
                          },
                        }}
                        startIcon={<DownloadIcon />}
                      >
                        Download Pdf
                      </Button>
                    </Box>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ mt: 2, ml: 1 }}>
                    <Typography variant="p">Currency</Typography>
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          native
                          defaultValue=""
                          id="grouped-native-select"
                          size="small"
                        >
                          <optgroup label="Category 1">
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                          </optgroup>
                        </Select>
                      </FormControl>
                    </div>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ mt: 2, ml: 1 }}>
                    <Typography variant="p">TYPE</Typography>
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          native
                          defaultValue=""
                          id="grouped-native-select"
                          size="small"
                        >
                          <option value={1}>Invoice</option>
                          <option value={2}>Credit Note</option>
                          <option value={1}>Quote</option>
                          <option value={2}>Parchase Order</option>
                          <option value={2}>Recipt</option>
                        </Select>
                      </FormControl>
                    </div>
                  </Box>
                </Typography>

                <Typography>
                  <Box sx={{ ml: 2,mt: 2 }}>
                    {" "}
                    <Button
                      type="submit"
                      variant="outlined"
                      className={style.Button}
                      sx={{ backgroundColor: "blue", color: "#fff" }}
                    >
                      Save Draft
                    </Button>
                    <br></br>
                    <Box sx={{ mt: 2 }}>
                      <Button
                        sx={{ color: "#fff", backgroundColor: "green" }}
                        className={style.Button}
                        variant="outlined"
                      >
                        History
                      </Button>
                    </Box>
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

    </>
  );
}

export default InvoiceScree;
